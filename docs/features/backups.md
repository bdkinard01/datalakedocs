---
id: backups
title: Data Lake Backups
---


 **One of the information protection mechanisms in the data lake is the dataset Backup feature.**

 ### Default Settings

 Within the Base Config option of the Data Lake you will notice a section labeled Backup. This setting is enabled by default.

 #### Key Notes
 
- Backup files are generated each morning beginning at 8 am, CST/CDT.
- A total of 45 days worth of backups are retained for any dataset with this feature enabled.
- Backup file snapshots older than 45 days are discarded.
- A copy of the data set data is stored in S3 bucket until manually removed.

:::caution
Backups are enabled to protect your data!
:::


This feature can be toggled "off" in cases where there is no advantage or significant risk reduction in having the platform create a backup for a given dataset. Example situations where this might be the case are:

- A dataset is configured with the Upload Action property set to 'Overwrite'.
- A dataset's data source is already backed up and re-obtaining the data from the source already provides adequate data protection.


