gcloud auth list
gcloud config set compute/zone Zone

# gcloud services enable cloudaicompanion.googleapis.com

gcloud services enable \
  aiplatform.googleapis.com \
  compute.googleapis.com \
  run.googleapis.com \
  bigquery.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com

export PROJECT_ID=$(gcloud config get-value project)
export REGION=$(gcloud compute project-info describe --format="value(commonInstanceMetadata.items[google-compute-default-region])")
export ZONE=$(gcloud compute project-info describe \
--format="value(commonInstanceMetadata.items[google-compute-default-zone])")
echo "PROJECT_ID=$PROJECT_ID - REGION=$REGION - ZONE=$ZONE"

#########################################################################
### FOR PYTHON
# Tùy có thiếu file ko
gcloud storage cp -r gs://${PROJECT_ID}-labconfig-bucket/* .


# Python active environment
python3 -m venv gemini-streamlit
source gemini-streamlit/bin/activate
python3 -m  pip install -r requirements.txt

#########################################################################
# FOR BIGQUERY, fill connection name
export CONNECTION_NAME="embedding_conn" 
bq mk --connection --location=$REGION --project_id=$PROJECT_ID --connection_type=CLOUD_RESOURCE $CONNECTION_NAME

# SERVICE ACCOUNT FOR BIGQUERY
SERVICE_ACCOUNT=$(bq show --format=json --connection $PROJECT_ID.$REGION.$CONNECTION_NAME | jq -r '.cloudResource.serviceAccountId')
echo "Service Account: $SERVICE_ACCOUNT"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT" \
  --role="roles/bigquery.dataOwner"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT" \
  --role="roles/storage.objectViewer"

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT" \
  --role="roles/aiplatform.user"
