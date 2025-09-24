# Init first

export CONNECTION_REGION=$REGION
export DATASET_NAME="gcc_bqml_dataset"

bq query --use_legacy_sql=false "
CREATE OR REPLACE EXTERNAL TABLE 
\`${PROJECT_ID}.c.gcc_image_object_table\`
WITH CONNECTION \`${PROJECT_ID}.${REGION}.${CONNECTION_NAME}\`
OPTIONS (
  object_metadata = 'SIMPLE',
  uris = ['gs://${PROJECT_ID}/*']
)"


export DEFINE_ENDPOINT="multimodalembedding@001"
bq query --use_legacy_sql=false "
CREATE OR REPLACE MODEL
\`${PROJECT_ID}.${DATASET_NAME}.gcc_embedding\`
REMOTE WITH CONNECTION \`${PROJECT_ID}.${REGION}.${CONNECTION_NAME}\`
options(
  endpoint = '${DEFINE_ENDPOINT}'
);"

sleep 100

bq query --use_legacy_sql=false "
CREATE OR REPLACE TABLE 
\`${PROJECT_ID}.${DATASET_NAME}.gcc_retail_store_embeddings\` AS
SELECT *, REGEXP_EXTRACT(uri, r'[^/]+$') AS product_name
FROM ML.GENERATE_EMBEDDING(
  MODEL \`${PROJECT_ID}.${DATASET_NAME}.gcc_embedding\`,
  TABLE \`${PROJECT_ID}.${DATASET_NAME}.gcc_image_object_table\`
);"

sleep 100

bq show --format=prettyjson ${PROJECT_ID}:${DATASET_NAME}.gcc_retail_store_embeddings

sleep 100

bq query --use_legacy_sql=false "
Create or replace table \`${PROJECT_ID}.${DATASET_NAME}.gcc_vector_search_table\` AS
select
  base.uri,
  base.product_name,
  base.content_type,
  distance
from
  VECTOR_SEARCH(
    TABLE \`${PROJECT_ID}.${DATASET_NAME}.gcc_retail_store_embeddings\`,
    'ml_generate_embedding_result',
    (
      select
        ml_generate_embedding_result AS embedding_col
      from
        ML.GENERATE_EMBEDDING(
          MODEL \`${PROJECT_ID}.${DATASET_NAME}.gcc_embedding\`,
          (select 'Men Sweaters' AS content),
          STRUCT(TRUE AS flatten_json_output)
        )
    ),
    top_k => 2,
    distance_type => 'COSINE'
  );
"


bq query --use_legacy_sql=false \
"
CREATE OR REPLACE MODEL \`CustomerReview.Gemini\`
REMOTE WITH CONNECTION \`us.embedding_conn\`
OPTIONS (ENDPOINT = 'gemini-2.0-flash');
"

bq query --use_legacy_sql=false "
SELECT
    ml_generate_text_llm_result AS generated
FROM
    ML.GENERATE_TEXT(
        MODEL \`CustomerReview.Gemini\`,
        (
            SELECT
                CONCAT(
                    'Summarize what customers think about our services',
                    STRING_AGG(FORMAT('review text: %s', base.content), ',\n')
                ) AS prompt
            FROM
                \`CustomerReview.vector_search_result\` AS base
        ),
        STRUCT(
            0.4 AS temperature,
            300 AS max_output_tokens,
            0.5 AS top_p,
            5 AS top_k,
            TRUE AS flatten_json_output
        )
    );"