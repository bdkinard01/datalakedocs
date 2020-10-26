---
id: filereader
title: File Reader
---


## File Reader

The File Reader feature allows you customize the way the data lake will read your uploaded file. During ingestion, these settings are used to properly read the file content. All settings have default values that will be used when not not specified. Below are the file reader settings that can be configured to change how the data lake reads an uploaded file.

#### Delimiter for CSV Files

The "separator" character that is being used in the upload files to identify the beginning/ending of column values.
-       Default value is "," (comma delimited)


#### Name of XML tag to treat as row

The property label (tag) within an XML file containing nested (arrayed) content that should be used to "flatten" the data into rows/columns.
-       Default value is "ROW"

#### Escape Character

The character that is being used in the upload files to indicate a special character should be
considered "part of the data".
-       Default value is "\"

#### Multi-Line (boolean)

Denotes whether a file contains records that span across multiple lines. If enabled, the EMR
process will look for line breaks enclosed in double quotes during ingestion.If enabled,headers must be double quoted: " " 
-       Default value is false

#### Timestamp Format

The format that all timestamp column types will adhere to in the upload files. These format strings follow Java data format standards. Refer to this link for further information on formatting conventions.


![Timestamp](/img/features/timestamp.png)

#### The number of symbol letters you specify also determines the format. 
For example, if the **"zz"** pattern results in "PDT," then the **"zzzz"** pattern generates "Pacific Daylight Time."
The following table summarizes these rules:

![Format](/img/features/format.png)

