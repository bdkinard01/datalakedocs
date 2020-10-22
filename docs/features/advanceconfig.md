---
id: config
title: Advanced Configuration
---

## Advanced Configuration

There are numerous other data management settings that can be configured.  Largely,
these are all optional choices that an end user or data delivery team member can select.

### Static Schema

Static schema is a dataset configuration feature that allows your dataset to have a pre-
defined layout that you control (vs. one that is "discovered" by the data lake when you
upload a file). If you know what your column headers & data types will be and they will not
change often (i.e. Static) then this may be a valid option to use to define your content.

The recommended approach when configuring a dataset is to allow the data lake to
discover/define the schema for you.  As long as your initial upload file has a large enough
sample size, the data lake should be able to determine the proper data types (text, integer,
date, etc.) for your columns.  However, sometimes this is not possible or you may have a
need to see a column represented with a specific format or precision. In those cases, static
schema is your ticket to success.

- Allows the layout (schema) of a dataset to be "pre-defined"
- Ensures that the schema stays consistent across file uploads
- Must be separately managed when schema changes occur (new columns are added,
  removed or altered)
- When defining a static schema, each column that you are wanting to include in your
  layout should be written out as a value pair. The first value is the name of your column
  and the second value is the data type. **Do NOT** include any spaces between your value
  pairs (separate these with only a comma).

#### Column Name
 - This value should align with the column labels/headers in your upload file
        
        Example:  tenant_id, base_amt, transaction_date, etc.

#### Data Type
 - This value describes the expected type of data the related column will contain
    - Valid values include:
        - string - Use when representing a textual or mixed-content value
        - integer - Use when representing a number with no decimals
        - timestamp - Use when representing any date or timestamp value
        - double - Use when representing a number with decimals

:::caution
Do NOT include any spaces in between your value pairs, separate these with only a comma.
:::       


        Example:
            tenant_id string,bod_id integer,logical_id string,load_timestamp
            timestamp,total_amount float