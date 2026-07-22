---
title: Machine Program Import
description: Import machine programs for version control
category: Using the Product
---

# Machine Program Import

Import machine programs into AuditMate for version control and deployment.

## Before Importing

Machine programs are created using external CAM software (like Mastercam, Fusion 360, or similar). AuditMate manages these programs but does not create them.

 ![Import Machine Programs](./images/import-machine-programs.png "width=800 nozoom") 
**Access:** Top Menu → **Parts and Operations**, select a part from the list, then go to **Operations** via the Left Menu or Center Menu. Select the operation, click **Machines** (Left Menu) or **Machine Types** (Center Menu), and finally navigate to **Machine Programs** from the Left or Center Menu.

## Import Machine Programs

<div class="doc-flex-row">
<div>

1\. With a machine associated to your operation, click **Machine Programs** from the menu. <br> 2. For multi-head machines, select the correct head number before importing. <br> 3. Import program files using either of the following methods: <br> &nbsp;&nbsp;&nbsp;**Drag and Drop**: Drag program files from your file explorer and drop them into either the MAIN or SUB panels. <br> &nbsp;&nbsp;&nbsp;**Browse for Files**: Click **Click to Browse**, select one or more program files, and click **Open**. <br><br> Once imported, the programs will appear in the Machine Programs list for the selected operation.

</div>
</div>


## Program Types

### Main Programs
The primary machine program that runs on the machine. Typically contains:
- Tool calls
- Machining operations
- Program flow control

### Sub Programs
Reusable routines called by main programs:
- Common patterns
- Subroutines
- Macros

### Non-G-Code Programs
Supporting files that aren't standard G-code toolpaths but are still managed and version-controlled alongside a program:
- Macro variables and parameters
- Tool offset or probing data
- Control-specific configuration files

## After Import

Once imported, programs are:
- Stored with version control
- Ready for review and authorization
- Available for editing if needed

## Next Step

After importing machine programs, proceed to the [Authorization Process](/docs/using-the-product/authorization-process) to approve programs for production.
