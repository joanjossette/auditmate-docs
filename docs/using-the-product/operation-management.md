---
title: Operation Management
description: Create and manage manufacturing operations for your parts
category: Using the Product
---

# Operation Management

Operations in AuditMate represent specific manufacturing activities performed on a part. They organize the workflow and link parts to machines.

![Parts Page](./images/operations-page.png "width=800 nozoom")  
**Access:** Top Menu → **Parts and Operations**, select a part from the list, then go to **Operations** via the Left Menu or Center Menu. The Left Panel shows all operations for the selected part.

---
## Create an Operation

<div class="doc-flex-row">
<div>

1\. Select a **Part** from the list. <br> 2. Click **+ Create** in the Left Panel. <br> 3. Fill in the required details in the **Create Operation** form. <br> 4. Click **Save** to add the operation to the system. <br><br> Once created, the operation will appear in the **Operations** list for the selected part.

</div>
<div>

![Create Operation Form](./images/create-operation-form.png "width=400")

</div>
</div>


⚠️ **Note:** Parts can have multiple operations to represent multi-step manufacturing processes.

## Manage Operations 

**Operations Menu** ![Operations Menu](./images/operations-menu.png "width=300 nozoom")  
Displayed on the Left Panel and becomes available when an operation is selected.

| Action | Description |
|--------|-------------|
| **Rev** | Update the operation’s revision number to track process or setup changes. |
| **Edit** | Modify existing operation details. |
| **Copy** | Duplicate an operation within the same part, including its associated machines and machine programs, for quicker setup. |
| **Archive** | Move an operation to the archive when it’s no longer active but needs to be retained for reference. |
| **Hold** | Temporarily suspend an operation to prevent it from being used or processed until further notice. |
| **Release** | Available when an operation is on hold; releases the operation from hold status, making it active again. |
---

## Center Panel Actions

When an operation is selected, the Center Panel displays additional buttons for working with the operation.

![Operation Center Panel](./images/operations-center-panel.png "width=800 nozoom")

| Button | Description |
|--------|-------------|
| **Documents** | Attach reference files, drawings, or specifications to the operation. The badge shows how many documents are currently attached. |
| **Add a Note** | Add a note to the operation for context, reminders, or communication with other users. |
| **History** | View the history log of changes and actions performed on the operation. |
| **Email Notifications** | Appears once the operation has been associated with a machine and a machine program has been uploaded. Opens a form listing users with the **Receive Email Notification** permission — selected users are notified of incoming and active-monitoring program modifications. |

---

## Next Step

After managing operations, proceed to [Machine Association](/docs/using-the-product/machine-association) to link operations to machines.
