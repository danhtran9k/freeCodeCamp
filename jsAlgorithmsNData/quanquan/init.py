# configure logging
import logging
from google.cloud import logging as cloud_logging

logging.basicConfig(level=logging.INFO)
# attach a Cloud Logging handler to the root logger
log_client = cloud_logging.Client()
log_client.setup_logging()

# SOMETHING WRONG HERE
import os
PROJECT_ID = os.environ.get("GCP_PROJECT")  # Your Google Cloud Project ID
LOCATION = os.environ.get("GCP_REGION")  # Your Google Cloud Project Region

# OLD working
PROJECT_ID = str(os.environ.get("GOOGLE_CLOUD_PROJECT"))
LOCATION = os.environ.get("GOOGLE_CLOUD_REGION", "global")