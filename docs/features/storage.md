---
id: storage
title: Data Lake Storage
---
### Data Lake Storage Info

### Persisted

The vast majority of the data lake content is stored in Amazon’s S3 (Simple Storage
Service).  This service offers a very low-cost way to manage content at scale.  It can be
thought of as “free to store, pay to query”.  Data is organized into “buckets” and
“objects” (files).  Files can have “prefixes” which operate in a similar fashion as “folders” do
within a traditional file system.  Persisted data in the data lake currently resides within 1 S3
bucket.


### Virtual

As the data lake can be described as a “hybrid lake”, some content is obtained, managed
and published virtually.  This means that in certain cases, data is retrieved from a given data
source “on-the-fly” or, when an end-user asks for it vs. uploading a copy of it to the data
lake’s persisted S3 container.  This choice is sometimes done to experiment or enable
some data quickly while longer-term management & publishing requirements are
considered.  Virtual data can be used in the same way as persisted data including data
blending, transformation, analysis, dashboarding, etc.

 
### Cache

A third category of data storage within the data lake is “cached content”.  Caching data lake
data (whether from persisted S3 or virtually from some other data source) causes the data
to be relocated to a separate “cache database”.  From there, queries against a cached
dataset will be answered from the cache database vs. the original data sources.  This is
sometimes done to improve query performance for certain types of data sources.  It can
also be a way to obtain “snapshots” of data as it changes in the data source if no other
change capture mechanism exists.  These snapshots can then be used for trend-types of
analysis.