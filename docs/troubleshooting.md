---
id: troubleshooting
title: Troubleshooting 
sidebar_label: Troubleshooting
---

### The Basics

The first thing to underestand is what type of files the Data Lake can process. The ideal file would be a flat file. A flat file is free of headers, formatting, formulas, tabs, pictures or anything else that would not easily be converted to table format. This means you may have to make some changes to your file before it will upload successfully. 

## Supported File Types

### Structured

Structured files (meaning those with a detectable schema using standard relational query/
analysis tools) that can be uploaded to the data lake include CSV, XLS and JSON.  Files of
these types will participate in the data lake “schema detection” process and will produce a
queryable asset once ingestion processing is completed.  Other structured files may be
uploaded to the data lake for raw storage purposes, but no schema detection nor queryable
asset(s) will be produced.


### Unstructured

Unstructured files (those lacking a detectable schema using standard relational query/
analysis tools) can be uploaded to the data lake for raw storage/retrieval purposes.  Future
investment in the data lake may allow these types of content to be used for analysis or other
use cases.


### Spreadsheet Upload Guidance

#####   "Data Lake Friendly Format"

What makes for a “friendly” spreadsheet format for the data lake?

In order to upload a spreadsheet (or parts of a spreadsheet) to the data lake, the
content to be uploaded must abide by certain rules-of-the-road.  Here are some of
those rules:

- If uploading an entire “Tab” of a spreadsheet workbook, all content must appear as a
    “Table” (meaning the content is comprise of Rows and Columns of data.

- Column Headings should not contain spaces or special characters.  Any that are found
    will be removed in the data lake result set.

- Column Headings cannot start with numbers.  Any that are found will be replaced with
    words (e.g. “1” becomes “one”, etc.).

- Files can be configured (through Data Lake App / Configuration) to ignore a specific
    number of leading rows.  This can sometimes be helpful when company logos or
    explanatory text is part of the file.

- Files can be configured (through the Data Lake App / Configuration) to ignore a specific
    number of trailing rows. This can sometimes be helpful when company logos, footers,
    totals or other explanatory text is part of the file.

- There are certain “reserved words” used by various components of the data lake that
    should be avoided as Column Header labels.  These words can be part of a more
    descriptive label, but not the entire label itself.  Examples: DATE, FROM, …  These can be
    used in the form “SHIP_DATE” or “FROM_LOCATION”, but not as “DATE” or “FROM”
    standalone.