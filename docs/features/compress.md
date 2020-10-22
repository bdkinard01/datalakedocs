---
id: compress
title: Compression Modes
---


There are 2 primary ways that content can be compressed into queryable Parquet files:

### Append or Overwrite.   

#### Append
Choosing “Append” will cause newly uploaded content to be added to the compressed result.  This style of content management is normally selected
when new pictures or subsets of a dataset are accumulated over time. 

#### Overwrite
Alternatively, choosing “Overwrite” causes newly uploaded content to replace the previous compressed result.  This style option is often selected when an end user has a complete dataset each time they wish to upload or refresh the data.