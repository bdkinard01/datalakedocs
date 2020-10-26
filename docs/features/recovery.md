---
id: recovery
title: Recover Data in the Data Lake 
---

### Recover


***PURPOSE:***  This action will replace the queryable data associated with a dataset with a backup version.

All data uploaded to the data lake is backed up by default. You do not have to do anything special to make this happen. Once each day, a copy of each dataset is preserved in a "backup bucket" in case you ever need to recover the dataset or "start over". 
The data lake will keep the most recent 45 days worth of backup copies for this purpose. If you find that you need to recover a dataset (as the contents have become corrupt or otherwise non-useful), click the **'RECOVER'** button from the Files tab in the data lake website.


In order to start the recovery process, you must select which day's backup copy you wish to
recover from. You can select from the list of available dates to indicate which timeframe
you'd like to go back to.




:::tip Keep in mind:
The ability to recover data will depend on the users permissions.
:::

***Please note that the ability to recover data will depend on the users permissions. If you are not able to restore a file, please contact support***