gsutil mb gs://fancy-store-$DEVSHELL_PROJECT_ID

git clone https://github.com/googlecodelabs/monolith-to-microservices.git
cd ~/monolith-to-microservices
./setup.sh
nvm install --lts

echo "✅ vnm installed"

# MANUAL THIS STEP
touch ~/monolith-to-microservices/startup-script.sh
# COPY CONTENT_ REPLACE DEVSHELL_PROJECT_ID

gsutil cp ~/monolith-to-microservices/startup-script.sh gs://fancy-store-$PROJECT_ID

cd ~
rm -rf monolith-to-microservices/*/node_modules monolith-to-microservices/*/.git
gsutil -m cp -r monolith-to-microservices gs://fancy-store-$PROJECT_ID/

echo "✅ Task 3 done"

gcloud compute instances create backend \
    --zone=$ZONE \
    --machine-type=e2-standard-2 \
    --tags=backend \
   --metadata=startup-script-url=https://storage.googleapis.com/fancy-store-$PROJECT_ID/startup-script.sh

gcloud compute instances list

cd ~/monolith-to-microservices/react-app

cat > .env <<EOF_CP
REACT_APP_ORDERS_URL=http://$EXTERNAL_IP_BK:8081/api/orders
REACT_APP_PRODUCTS_URL=http://$EXTERNAL_IP_BK:8082/api/products
EOF_CP

npm install && npm run-script build

cd ~
rm -rf monolith-to-microservices/*/node_modules
gsutil -m cp -r monolith-to-microservices gs://fancy-store-$PROJECT_ID/

gcloud compute instances create frontend \
    --zone=$ZONE \
    --machine-type=e2-standard-2 \
    --tags=frontend \
    --metadata=startup-script-url=https://storage.googleapis.com/fancy-store-$PROJECT_ID/startup-script.sh

gcloud compute firewall-rules create fw-fe \
    --allow tcp:8080 \
    --target-tags=frontend

gcloud compute firewall-rules create fw-be \
    --allow tcp:8081-8082 \
    --target-tags=backend

gcloud compute instances list
echo "✅ Task 4 done"