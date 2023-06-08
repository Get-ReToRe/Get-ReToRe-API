$GOOGLE_PROJECT_ID="get-retore"
$IMAGE_NAME="api"
$SERVICE_NAME="getretore-api"

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$IMAGE_NAME `
--project=$GOOGLE_PROJECT_ID

gcloud beta run deploy $SERVICE_NAME `
--image gcr.io/$GOOGLE_PROJECT_ID/$IMAGE_NAME `
--platform managed `
--region asia-southeast2 `
--min-instances=0 `
--max-instances=1 `
--project=$GOOGLE_PROJECT_ID