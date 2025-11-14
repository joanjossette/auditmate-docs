---
title: Sending to Machine
description: Deploy programs to production machines
category: Using the Product
---

# Sending to Machine

Deploy authorized CNC programs to production machines.

## Prerequisite

Before sending CNC programs to a machine, they must be **tested** and correctly **tagged** in the system.

To update the program’s download status:
- Click the **Untested** status.
- The **Authorize Download Status Change** form will open.
- Toggle the status to **Authorize**.
- Click **Save**.

Once updated to **Tested**, the program becomes eligible for **Sending to Machine**.

⚠️ **Note:** Control who can authorize downloads in: **Settings > Global Settings > Download Status Authorization** <br>

## Send to Machine

|  |  |
|---|---|
| - Click the **Send** button for the corresponding machine and head. <br> - The **Send to Machine** form will open. <br> - Select the programs you want to send by checking the boxes next to each program. <br> - Click **Send to Machine** to begin the transfer. <br><br> The system will process the request and handle delivery based on the configured communication method for that machine. | ![Send to Machine](./images/send-to-machine.png "width=400") |


---

## Transfer Methods

AuditMate supports multiple transfer protocols:

- **Network Transfer** – Direct IP-based communication to compatible machines.  
- **DNC (Direct Numerical Control)** – Traditional RS-232 or serial-based transfer.  
- **File Share** – Sending programs to a monitored network folder for machine retrieval.  

## Troubleshooting

### Connection Failed
- Verify machine is powered on
- Check network connectivity
- Confirm IP address and port settings

### Transfer Timeout
- Check file size limits
- Verify machine storage availability
- Review communication settings

### Program Not Found on Machine
- Confirm transfer completed successfully
- Check destination folder on machine
- Verify file naming conventions
