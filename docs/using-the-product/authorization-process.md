---
title: Authorization Process
description: Approve programs for production use
category: Using the Product
---

# Authorization Process

Approve parts, operations, and CNC programs for production use.

## Who Can Authorize?

Authorization permissions are based on:
- User role assignments (Configure these in **Admin** > **Users**)
- Authorization type settings (Configure these in **Settings > Global Settings > Part Authorization Types**.)

## Authorization Process

<div class="doc-flex-row">
<div>

1\. Log in using an account with authorization permissions. <br> 2. Navigate through: **Part → Operation → Machine Type → CNC Programs**. <br> 3. Review the program details, including version, revision, and any alerts. <br> 4. Click the **Authorization** icon in the right-most column. <br> 5. In the **Authorize Program Status Change** form, toggle to **Authorize**, and click **Save**.

</div>
<div>

![Authorize Program](./images/authorize-program.png "width=400")

</div>
</div>

### Authorization States

- **Development** – The program is still being created, edited, or validated. Not yet approved for production use.  
- **Production** – The program has been reviewed and authorized. Ready for use on the shop floor.

## Next Step

After authorizing CNC programs, proceed to [Sending to a Machine](/docs/using-the-product/sending-to-machine) to transfer programs to machines for execution.
