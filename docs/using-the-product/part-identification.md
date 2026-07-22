---
title: Part Identification
description: Define and configure parts to be manufactured in AuditMate, including properties such as name, revision, and approval group.
category: Using the Product
---

# Part Identification

A **Part** represents a physical component to be manufactured. In AuditMate, each part acts as a container for related **operations** and **machine programs**, serving as the foundation of your manufacturing workflow.

![Parts Page](./images/parts-page.png "width=800 nozoom")  
**Access:** Top Menu → **Parts and Operations**, Left Menu → **Parts**. <br>
The Left Panel displays all existing parts created in the system.

---

## Create a New Part

<div class="doc-flex-row">
<div>

You can create and define a new part to be manufactured within your facility. <br><br> 1. Click **+ Create** in the Left Panel. <br> 2. Fill in the required details in the **Create Part** form. <br> 3. Click **Save** to add the part to the system. <br><br> Once created, the part will be listed and available for further setup such as adding operations or machine programs.

</div>
<div>

![Create Part Form](./images/create-part-form.png "width=400")

</div>
</div>

## Part Properties

| **Property** | **Description** |
|---------------|-----------------|
| **Part Name** | A unique and descriptive identifier for the part. Use consistent naming conventions such as part numbers, drawing numbers, or internal codes. |
| **Part Revision** | Version control identifier. Formats are configured in **Settings → Global Settings → Part Revision Format**.  |
| **Approval Group** | Determines who can approve parts for production. Configure these under **Settings → Global Settings → Program Approval Groups** to align with quality control workflows. |
| **Part Description** | Optional field for providing additional context or details about the part. |
| **Tags** | Optional labels for categorizing and filtering parts, useful for grouping related parts or narrowing search results. |

---

## Manage Parts

**Parts Menu** ![Parts Menu](./images/parts-menu.png "width=300 nozoom")  
Displayed on the Left Panel and becomes available when a part is selected.

| Action | Description |
|--------|-------------|
| **Rev** | Update the part’s revision number to reflect design, specification, or documentation changes. |
| **Edit** | Modify the part’s details. |
| **Copy** | Create a duplicate of the part, including its associated operations, for faster setup of similar parts. |
| **Archive** | Move the part to the archive when it is no longer active but must remain in the system for historical reference. |
| **Hold** | Temporarily restrict the part from being used in operations or production until issues are resolved or approval is granted. |
| **Release** | Available when a part is on hold; restores the part to active status so it can be used again. |
---

## Center Panel Actions

When a part is selected, the Center Panel displays additional buttons for working with the part.

![Part Center Panel](../images/part-center-panel.png "width=800 nozoom")

| Button | Description |
|--------|-------------|
| **Documents** | Upload and attach reference files, drawings, or specifications to the part. The badge shows the number of documents currently attached. |
| **Add a Note** | Record a note on the part for context, reminders, or communication with other users. |
| **History** | View the history log of changes and actions performed on the part. |

---

## Best Practices

- Use consistent naming and revision conventions  
- Include meaningful descriptions for clarity  
- Set appropriate approval groups based on part importance  
- Review existing parts before creating new ones to avoid duplicates  

---

## Next Step

After identifying parts, proceed to [Operation Creation](/docs/using-the-product/operation-management) to define the manufacturing steps associated with each part.
