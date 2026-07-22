---
title: Authorization Process
description: Approve programs for production use
category: Using the Product
---

# Authorization Process

Approve parts, operations, and machine programs for production use.

![Approval](./images/approval.png "width=800 nozoom")
**Access:** Top Menu → **Parts and Operations**, select a part, operation, and machine type, then go to **Machine Programs**. Click the **Approval** icon to open the **Authorize Program Status Change** form.

## Who Can Authorize?

Authorization permissions are based on:
- User role assignments (Configure these in **Admin** > **Users**)
- Approval group settings (Configure these in **Settings > Global Settings > Program Approval Groups**.)

## Authorization Process

<div class="doc-flex-row">
<div>

1\. Log in using an account with authorization permissions. <br> 2. Navigate through: **Part → Operation → Machine Type → Machine Programs**. <br> 3. Review the program details, including version, revision, and any alerts. <br> 4. Click the **Approval** icon to open the **Authorize Program Status Change** form. <br> 5. Toggle to **Authorize**, and click **Save**.

</div>
<div>

![Authorize Program](./images/authorize-program.png "width=400")

</div>
</div>

### Authorization States

- **Development** – The program is still being created, edited, or validated. Not yet approved for production use.  
- **Production** – The program has been reviewed and authorized. Ready for use on the shop floor.

## Next Step

After authorizing machine programs, proceed to [Machine Release](/docs/using-the-product/machine-release) to transfer programs to machines for execution.
