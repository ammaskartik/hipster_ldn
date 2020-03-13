# hipster_ldn

Master monorepo for the Hipster London App, backend, and ML/Data Pipeline.

`Please refer to infrastructure directory for README instructions`

## Phase 1

* Vue based Web App to display map + features.
* Allow users to click regions?
* Basic Auth?
* Ingest London MSA multi-polygon into Mongo
* Ingest London Boroughs if possible
* Ingest London PostCodes if possible
* Ingest Basic Demographics if possible
* Ingest Basic Crime data if possible
* Ingest Landmarks & other Open Street map data
* Spatially index data in Mongo
* Serve London Map, and query basic data/stats by clickable Region? Or Zoom bounding boxes

We will use `ldnshapes` and `ldnfeatures` as the collections.
