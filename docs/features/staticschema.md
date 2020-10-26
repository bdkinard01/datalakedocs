Static Schema

Static schema is a configuration setting that is applied to set the structure of a dataset.

This feature should only be used when the structure of the data is not changing.
If a static schema is applied, the data lake will no longer dynamically infer the schema of a
dataset (instead, it will use the static schema).
Note: When a static schema is configured, uploaded files cannot contain a header row
or columns that do not exist in the static schema configuration.
 

To configure a static schema, a SparkSQL string must be supplied.

Static Schema: SparkSQL string used to define a static schema for a dataset
Use a comma (,) to separate each column/datatype pair.
Do include a space between a column name and its datatype.
Do not include a space between a comma and the next column name.
Example: header_tenantid String,header_ID String,header_accountingEntity
String,header_variationID Long,header_assetTypeCode
String,header_BODCreationDate Timestamp,header_amount Double,header_bin
String,header_builtYear Int,header_category String,header_class
String,header_commisionDateTime Timestamp,header_costCenter
String,header_costRollupIndicator Boolean,header_criticalityCode
String,header_departmentCode String,header_description String,header_itemID
String,header_manufacturerPartyID String,header_modelNumber
String,header_modelRevision String,header_originalReceiptDate
Timestamp,header_outOfServiceIndicator
Boolean,header_parentAssetAccountingEntity String,header_parentAssetID
Boolean,header_udfdate01 Timestamp,header_udfdate02
Timestamp,header_uomcode String,header_variable1 String,note_entryDateTime
Timestamp,note_note String,header_parentTypeCode String,header_udfchar13
String,header_udfnote01 String,dataSet_ID Long, boomi_timeStamp Timestamp
