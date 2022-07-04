GOOGLE_PROJECT_ID=takeyoupill
CLOUD_RUN_SERVICE=takeyou-service
INSTANCE_CONNECTION_NAME=takeyoupill:us-central1:takeyoupill-db
DB_USER=root
DB_PASS=esteban310713
DB_NAME=typ-data

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \ 
    --project=$GOOGLE_PROJECT_ID

gcloud run deploy $CLOUD_RUN_SERVICE \ 
    --image gcr.io/$GOOGLE_PROJECT_ID/$CLOUD_RUN_SERVICE \
    --add-cloudsql-instance $INSTANCE_CONNECTION_NAME \
    --update-env-vars INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME,DB_PASS=$DB_PASS,DB_NAME=$DB_NAME,DB_USER=$DB_USER \
    --platform maneged \
    --region us-central1 \
    --allow-unauthenticated \
    --project=$GOOGLE_PROJECT_ID