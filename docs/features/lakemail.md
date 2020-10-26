---
id: Lakemail
title: Lake Mail 
---

#### LakeMail

WHAT IS IT?

LakeMail allows you to send data (in the form of a supported file attachment) to the data lake via email.  This can be used as a low-cost method of automating data "upload" tasks in cases where content is received through email (such as weekly/monthly published content from a 3rd-party data provider).


### Process 

-  Send an email with attached data to:
    - lakemail@datalake-prod.kcs.kochcloud.com (Production)
    - lakemail@datalake-dev.kcs.kochcloud.com (Development)

-  In the subject line of your email, please include the dataset path to where your attachment should go. You can find this through the DataLake website using the Content Explorer (navigate to your dataset configuration).

-  The dataset path must contain a configuration in order for the process to work.  You
can copy/paste the path from the breadcrumb at the top of the page.  Make sure to
include the entire path, including the slash at the end.


:::tip NOTE!
You will not be able to create folders in the subject line so please make sure to use an
existing dataset path.
:::


![Lakemail](/img/features/lakemail.png)

### Verify Success

- Access the Data Lake environment that you mailed the file to. Prod of Dev  

- The file will appear in the location specified in the subject line of the email

![LakemailVerify](/img/features/lakemailverify.png)


### Restrictions 

The overall size of the email being sent to the lake cannot exceed 10 MB, this is inclusive of text and attachments. To ensure the email and its attachments are successfully processed into the lake ensure attachments do not exceed this limit.

Technical Note: Attached files can be larger than 10 MB because email encoding decreases
the overall file size