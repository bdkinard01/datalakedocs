---
id: static
title: Static Schema
---

### Static Schema

Static schema is a configuration setting that is applied to set the structure of a dataset.

- This feature should only be used when the structure of the data is **not** changing.
**If a static schema is applied, the data lake will no longer dynamically infer the schema of a dataset** (***instead, it will use the static schema***).

:::tip Note:
When a static schema is configured, uploaded files cannot contain a header row
or columns that do not exist in the static schema configuration.
:::

 

#### To configure a static schema, a SparkSQL string must be supplied.

- **Static Schema**: SparkSQL string used to define a static schema for a dataset
- **Use a comma** (,) to separate each column/datatype pair.
- Do include a space between a column name and its datatype.
- Do not include a space between a comma and the next column name.

     ***Example***: header_tenantid String,header_ID String,header_accountingEntity String