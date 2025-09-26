gcloud compute instances stop frontend --zone=$ZONE
gcloud compute instances stop backend --zone=$ZONE

gcloud compute instance-templates create fancy-fe \
    --source-instance-zone=$ZONE \
    --source-instance=frontend

gcloud compute instance-templates create fancy-be \
    --source-instance-zone=us-west1-c \
    --source-instance=backend

gcloud compute instance-templates list

gcloud compute instances delete backend --zone=$ZONE --quiet

gcloud compute instance-groups managed create fancy-fe-mig \
    --zone=us-west1-c \
    --base-instance-name fancy-fe \
    --size 2 \
    --template fancy-fe

gcloud compute instance-groups managed create fancy-be-mig \
    --zone=us-west1-c \
    --base-instance-name fancy-be \
    --size 2 \
    --template fancy-be

gcloud compute instance-groups set-named-ports fancy-fe-mig \
    --zone=us-west1-c \
    --named-ports frontend:8080

gcloud compute instance-groups set-named-ports fancy-be-mig \
    --zone=us-west1-c \
    --named-ports orders:8081,products:8082

gcloud compute health-checks create http fancy-fe-hc \
    --port 8080 \
    --check-interval 30s \
    --healthy-threshold 1 \
    --timeout 10s \
    --unhealthy-threshold 3

gcloud compute health-checks create http fancy-be-hc \
    --port 8081 \
    --request-path=/api/orders \
    --check-interval 30s \
    --healthy-threshold 1 \
    --timeout 10s \
    --unhealthy-threshold 3

gcloud compute firewall-rules create allow-health-check \
    --allow tcp:8080-8081 \
    --source-ranges 130.211.0.0/22,35.191.0.0/16 \
    --network default

gcloud compute instance-groups managed update fancy-fe-mig \
    --zone=us-west1-c \
    --health-check fancy-fe-hc \
    --initial-delay 300

gcloud compute instance-groups managed update fancy-be-mig \
    --zone=us-west1-c \
    --health-check fancy-be-hc \
    --initial-delay 300

echo "✅ Task 5 done"

gcloud compute http-health-checks create fancy-fe-frontend-hc \
  --request-path / \
  --port 8080

gcloud compute http-health-checks create fancy-be-orders-hc \
  --request-path /api/orders \
  --port 8081

gcloud compute http-health-checks create fancy-be-products-hc \
  --request-path /api/products \
  --port 8082

gcloud compute backend-services create fancy-fe-frontend \
  --http-health-checks fancy-fe-frontend-hc \
  --port-name frontend \
  --global

gcloud compute backend-services create fancy-be-orders \
  --http-health-checks fancy-be-orders-hc \
  --port-name orders \
  --global

gcloud compute backend-services create fancy-be-products \
  --http-health-checks fancy-be-products-hc \
  --port-name products \
  --global

gcloud compute backend-services add-backend fancy-fe-frontend \
  --instance-group-zone=us-west1-c \
  --instance-group fancy-fe-mig \
  --global

gcloud compute backend-services add-backend fancy-be-orders \
  --instance-group-zone=us-west1-c \
  --instance-group fancy-be-mig \
  --global

gcloud compute backend-services add-backend fancy-be-products \
  --instance-group-zone=us-west1-c \
  --instance-group fancy-be-mig \
  --global

gcloud compute url-maps create fancy-map \
  --default-service fancy-fe-frontend

gcloud compute url-maps add-path-matcher fancy-map \
   --default-service fancy-fe-frontend \
   --path-matcher-name orders \
   --path-rules "/api/orders=fancy-be-orders,/api/products=fancy-be-products"

gcloud compute target-http-proxies create fancy-proxy \
  --url-map fancy-map

gcloud compute forwarding-rules create fancy-http-rule \
  --global \
  --target-http-proxy fancy-proxy \
  --ports 80

echo "✅ Task 6 done"

cd ~/monolith-to-microservices/react-app/

gcloud compute forwarding-rules list --global

echo "REPLACE LB_IP env"
echo "======================================================================"

cd ~/monolith-to-microservices/react-app
npm install && npm run-script build

cd ~
rm -rf monolith-to-microservices/*/node_modules
gsutil -m cp -r monolith-to-microservices gs://fancy-store-qwiklabs-gcp-04-2b83a8eb0035/

gcloud compute instance-groups managed rolling-action replace fancy-fe-mig \
    --zone=us-west1-c \
    --max-unavailable 100%

# watch -n 2 gcloud compute backend-services get-health fancy-fe-frontend --global

gcloud compute instance-groups managed set-autoscaling \
  fancy-fe-mig \
  --zone=us-west1-c \
  --max-num-replicas 2 \
  --target-load-balancing-utilization 0.60

gcloud compute instance-groups managed set-autoscaling \
  fancy-be-mig \
  --zone=us-west1-c \
  --max-num-replicas 2 \
  --target-load-balancing-utilization 0.60

gcloud compute backend-services update fancy-fe-frontend \
    --enable-cdn --global

echo "✅ Task 7 done"

gcloud compute instances set-machine-type frontend \
  --zone=us-west1-c \
  --machine-type e2-small

gcloud compute instance-templates create fancy-fe-new \
    --region=$REGION \
    --source-instance=frontend \
    --source-instance-zone=us-west1-c

gcloud compute instance-groups managed rolling-action start-update fancy-fe-mig \
  --zone=us-west1-c \
  --version template=fancy-fe-new

# watch -n 2 gcloud compute instance-groups managed list-instances fancy-fe-mig \
#   --zone=us-west1-c

# echo "✅ WAITING CTRL + C"
# echo "======================================================================"
# echo "REPLACE VM_NAME"
# echo "======================================================================"

# gcloud compute instances describe [VM_NAME] --zone=us-west1-c | grep machineType



cd ~/monolith-to-microservices/react-app/src/pages/Home
mv index.js.new index.js

cat ~/monolith-to-microservices/react-app/src/pages/Home/index.js

cd ~/monolith-to-microservices/react-app
npm install && npm run-script build

cd ~
rm -rf monolith-to-microservices/*/node_modules
gsutil -m cp -r monolith-to-microservices gs://fancy-store-$DEVSHELL_PROJECT_ID/

gcloud compute instance-groups managed rolling-action replace fancy-fe-mig --zone=$ZONE --max-unavailable=100%

echo "✅ Task 8 done"






