```
gcloud config set compute/zone Zone

PROJECT_ID=$(gcloud config get-value project)
gcloud storage cp -r gs://${PROJECT_ID}-labconfig-bucket/* .

```
