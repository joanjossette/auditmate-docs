---
title: Machine Configuration
description: Learn how to configure machine settings, including DNC setup, scanning folders, and communication parameters.
category: Machines
---

# Machine Configuration

The **Machine Configuration** is defined within the **Create Machine** form.  
These settings determine how each CNC machine communicates with AuditMate, handles CNC program transfers, and scans for modifications.

|  |  |
|---|---|
| **Create Machine Form (Single-Head)**![Create Machine - Single Head](./images/create-machine-single-head.png "width=400") | **Create Machine Form (Multi-Head)**![Create Machine - Multi Head](./images/create-machine-multi-head.png "width=400") |


## Configuration Details

| **Field / Section** | **Description** |
|----------------------|-----------------|
| **Machine Name** | Unique name that identifies the machine within the system. |
| **Machine Description** | Short description of the machine (e.g., model or purpose). |
| **DNC Settings** | Defines how AuditMate communicates with the machine for sending CNC programs. |
| → **Workplace ID** | Specifies the workstation or network identifier associated with the machine. |
| → **DNC Type** | Determines the communication method for program transfer. <br>**Options:** <ul><li>**Send SMB** – Transfers via shared folder (SMB protocol).</li><li>**Send** – Sends programs through direct path.</li><li>**Send SMB to Active Programs Folder** – Sends to designated shared folder for active programs.</li></ul> |
| **Program Modifications Scanning** | Enables automatic detection of CNC program changes. |
| → **Scanned Folder** | Folder monitored for new or modified CNC programs. |
| → **DNC Incoming Folder** | Directory where scanned or updated programs are received and stored. |
| **FOCAS Machine Settings** | Applies when the machine uses **FOCAS (Fanuc Open CNC API)** for communication. |
| → **Fanuc CNC Address** | IP address of the Fanuc CNC controller. |
| → **Fanuc CNC Port** | Port number used for communication. |
| **DNC Type – Specific Options** | Additional fields depending on the selected **DNC Type**. |
| → **Send SMB** | Option to **Delete last sent folder during send**, clearing previous files before new transfer. |
| → **Send** | - Specify **paths for each machine head**.<br>- **Active Program Range:** Defaults to **0–6999**.<br>- Option to **Enable program range deletion** to remove programs outside the set range. |
| → **Send SMB to Active Programs Folder** | Requires specifying a **Target Directory** for storing active programs. |

---

⚠️ **Note:** Ensure all network addresses, folder paths, and communication ports are correctly configured to prevent transfer or connectivity errors.

---

## Next Step

Proceed to [Using the Product](/docs/using-the-product) to learn about the system’s **workflow steps** and **core concepts**, including how parts, operations, and machines interact in the production process.
