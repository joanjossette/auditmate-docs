---
title: Part Identification
description: Define and configure parts to be manufactured in AuditMate, including properties such as name, revision, and authorization type.
category: Using the Product
---

# Part Identification

A **Part** represents a physical component to be manufactured. In AuditMate, each part acts as a container for related **operations** and **CNC programs**, serving as the foundation of your manufacturing workflow.

![Parts Page](./images/parts-page.png "width=800 nozoom")  
**Access:** Top Menu → **Parts and Operations**, Left Menu → **Parts**. <br>
The Left Panel displays all existing parts created in the system.

---

## Create a New Part

|  |  |
|---|---|
| You can create and define a new part to be manufactured within your facility. <br><br> - Click **+ Create** in the Left Panel. <br> - Fill in the required details in the **Create Part** form. <br> - Click **Save** to add the part to the system. <br><br> Once created, the part will be listed and available for further setup such as adding operations or CNC programs. | ![Create Part Form](./images/create-part-form.png "width=400") |

## Part Properties

| **Property** | **Description** |
|---------------|-----------------|
| **Part Name** | A unique and descriptive identifier for the part. Use consistent naming conventions such as part numbers, drawing numbers, or internal codes. |
| **Part Revision** | Version control identifier. Formats are configured in **Settings → Global Settings → Part Revision Format**.  |
| **Part Authorization Type** | Determines who can approve parts for production. Configure these under **Settings → Global Settings → Part Authorization Types** to align with quality control workflows. |
| **Part Description** | Optional field for providing additional context or details about the part. |

---

## Best Practices

- Use consistent naming and revision conventions  
- Include meaningful descriptions for clarity  
- Set appropriate authorization types based on part importance  
- Review existing parts before creating new ones to avoid duplicates  

---

## Next Step

After identifying parts, proceed to [Operation Creation](/docs/using-the-product/operation-creation) to define the manufacturing steps associated with each part.
