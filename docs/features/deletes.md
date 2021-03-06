---
id: deletes
title: Deletes in the Data Lake 
---

:::tip
Deletes are controlled by an AWS job the runs at 11PM Nightly. Data is not removed immediately! Check to see if data has been removed the next day.  
:::

## Delete Types 

![Deletes](/img/features/deletes1.png)

### Data Delete


***PURPOSE:*** Action will remove the queryable data associated with a dataset.

This action can be useful when a dataset is in "experiment mode".  Sometimes, when a new
dataset is being put together, changes can be introduced that are not beneficial longer-
term.  When this occurs, you can remove the queryable data, upload a new "good" version
of the data and quickly get back to a useful dataset.

:::important
Data is not removed immediately!  
:::


### Folder Delete

![Folder](/img/features/folderDelete.png)

***PURPOSE:***  Removes a folder from the data lake.  The folder must be empty (not contain
any datasets).

When is button is clicked, you will be prompted with a confirmation window containing additional information about the asset you are preparing to delete and two additional buttons, Cancel or Confirm.  
In order to click on the confirmation button, you will need the proper permissions on that asset.  If you have the proper permissions, clicking this action will "mark" the asset for deletion.  This means that you'll have until midnight (CST/CDT) to
unmark/undo this action should you change your mind.

If you leave the asset "marked for deletion" it will be removed from the data lake (AWS S3, Auroroa, and Snowflake) at midnight.

***Please note that this action does not propagate down to child folders/assets unless certain conditions are met:***

- If the folder is empty, it will simply be deleted

- If the folder contains other folders/datasets that are ALL marked for deletion, then all of
    them will be deleted

- If the folder contains at least 1 folder/dataset that is NOT marked for deletion, then
deletion will be ignored


### Dataset Delete

![Dataset](/img/features/datasetDelete.png)

***PURPOSE:***   Will remove the asset completely from the data lake.  This includes any raw S3 file storage, configurations, Snowflake schema definitions and views. 

When the button is clicked, you will be prompted with a confirmation window containing additional information about the asset you are preparing to delete and two additional buttons, Cancel or Confirm. 

In order to click on the confirmation button, you will need the proper permissions on that asset.  If you have the proper permissions, clicking this action will "mark" the asset for deletion.  This means that you'll have until midnight (CST/CDT) to
unmark/undo this action should you change your mind.


:::important
Data is not removed immediately! You have time to undo your selection.  
:::


If you leave the asset "marked for deletion" it will be removed from the data lake (AWS S3, Auroroa, and Snowflake) at midnight. 

***Please note that this action does not propagate down to child folders/assets unless certain conditions are met:***

- If the dataset is empty, it will simply be deleted

- If the dataset contains other folders/datasets that are ALL marked for deletion, then all of
    them will be deleted
    
- If the dataset contains at least 1 folder/dataset that is NOT marked for deletion, then the
    dataset will have its queryable data deleted and its configuration changed to that of a
    folder with the same name