---
title: CNC Program Import
description: Import CNC programs for version control
category: Using the Product
---

# CNC Program Import

Import CNC programs into AuditMate for version control and deployment.

## Before Importing

CNC programs are created using external CAM software (like Mastercam, Fusion 360, or similar). AuditMate manages these programs but does not create them.

 ![Import CNC Programs](./images/import-cnc-programs.png "width=800 nozoom") 
**Access:** Top Menu → **Parts and Operations**, select a part from the list, then go to **Operations** via the Left Menu or Center Menu. Select the operation, click **Machines** (Left Menu) or **Machine Types** (Center Menu), and finally navigate to **CNC Programs** from the Left or Center Menu.

## Import CNC Programs

|  |
|---|
| - With a machine associated to your operation, click **CNC Programs** from the menu. <br> - For multi-head machines, select the correct head number before importing. <br> - Import program files using either of the following methods: <br> &nbsp;&nbsp;&nbsp;**Drag and Drop**: Drag program files from your file explorer and drop them into either the MAIN or SUB panels. <br> &nbsp;&nbsp;&nbsp;**Browse for Files**: Click **Click to Browse**, select one or more program files, and click **Open**. <br><br> Once imported, the programs will appear in the CNC Programs list for the selected operation. | 


## Main vs. Sub Programs

### Main Programs
The primary CNC program that runs on the machine. Typically contains:
- Tool calls
- Machining operations
- Program flow control

### Sub Programs
Reusable routines called by main programs:
- Common patterns
- Subroutines
- Macros

## After Import

Once imported, programs are:
- Stored with version control
- Ready for review and authorization
- Available for editing if needed

## Next Step

After importing CNC programs, proceed to the [Authorization Process](/docs/using-the-product/authorization-process) to approve programs for production.
