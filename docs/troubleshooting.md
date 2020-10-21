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