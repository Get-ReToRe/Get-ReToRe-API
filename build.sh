gcloud builds submit --tag gcr.io/get-retore/api --project get-retore

gcloud run deploy getretore-api --image gcr.io/get-retore/api --platform managed --region asia-southeast2 --allow-unauthenticated --project get-retore
 