# https://github.com/Cloud-Wala-Banda/Labs-Solutions/blob/main/The%20Basics%20of%20Google%20Cloud%20Compute%20Challenge%20Lab/arc120.sh
# https://www.cloudskillsboost.google/focuses/65384?parent=catalog

gsutil mb -l US gs://${PROJECT_ID}-bucket

gcloud compute instances create my-instance \
    --zone=$ZONE \
    --machine-type=e2-medium \
    --create-disk=size=100GB,type=pd-standard,mode=rw,device-name=additional-disk \
    --tags=http-server \
    --image-project=debian-cloud \
    --image-family=debian-11 \
    --boot-disk-size=10GB \
    --boot-disk-type=pd-balanced \

# ===============================
# https://www.cloudskillsboost.google/course_templates/754/labs/584201
# Default create
export INS_NAME=gcelab
gcloud compute instances create $INS_NAME \
    --zone $ZONE \
    --machine-type e2-standard-2
gcloud compute instances list

gcloud compute disks create mydisk \
    --size=200GB \
    --zone $ZONE

gcloud compute instances attach-disk $INS_NAME \
    --disk mydisk \
    --zone $ZONE

gcloud compute ssh $INS_NAME \
    --zone $ZONE

gcloud compute firewall-rules create fw-fe \
    --allow tcp:8080 \
    --target-tags=frontend

# ===============================
# BUCKET GENERATE
gsutil mb gs://fancy-store-$PROJECT_ID