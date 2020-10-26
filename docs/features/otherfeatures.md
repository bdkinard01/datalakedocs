---
id: features
title: Other Features
---

### Spark Scripts 

Spark scripts are a set of transformation steps that can be applied to a file during ingestion. By default, all datasets are compressed in the datalake. However, there are more advanced Spark scripts that can be applied.

![Tab](/img/features/sparktab.png)

### Compress

![Compress](/img/features/compress.png)

On by default for new datasets. Produces an optimized columnar, queryable file (or set of
files) in parquet format.

-------------------------------------------------------------------------------------------------

### Unpivot

![Unpivot](/img/features/unpovit.png)

***Optional***. Produces a separate, compressed version of the data by creating additional rows
from columns specified by the user.

------------------------------------------------------------------------------------------------- 

### Deduplicate

![Dedup](/img/features/dedup.png)

***Optional***. Produces a separate, compressed version of the data with duplicate records
removed (based on user specification).

-------------------------------------------------------------------------------------------------

### Ingestion Filter

![Ingestion](/img/features/ingestion.png)

***Optional***. Produces a separate, compressed version of the data with user-specified filtering
applied.


-------------------------------------------------------------------------------------------------