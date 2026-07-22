---
title: IIS Application Pool and Site Configuration
description: Configure IIS application pools and sites for AuditMateMFG™ Revision Manager
category: Getting Started > Installation Guide
---

# IIS Application Pool and Site Configuration

Configure the IIS application pools and sites created by the Deployment Manager to ensure **AuditMateMFG™** runs reliably and initializes on startup.

---

## 1. Configure Application Pools

1. Open **IIS Manager**
2. Navigate to **Application Pools**
3. Select **AuditMateMFG_Backend** → right-click → **Advanced Settings**
4. Apply the following settings:

| Setting                     | Value                     |
| --------------------------- | ------------------------- |
| **Start Mode**              | `AlwaysRunning`           |
| **Idle Time-out (minutes)** | `0`                       |
| **Identity**                | `ApplicationPoolIdentity` |

5. Click **OK**
6. Repeat steps 3–5 for **AuditMateMFG_Frontend**

![Application Pools Settings](../../../../images/application-pools-settings.png)

---

## 2. Configure Sites

1. Navigate to **Sites**
2. Select **AuditMateMFG_Backend** → **Advanced Settings**
3. Set **Preload Enabled** to `True`
4. Click **OK**
5. Repeat steps 2–4 for **AuditMateMFG_Frontend**

![Application Pools Settings](../../../../images/sites.png)

---

## Next Steps

After IIS configuration is complete, proceed to [Power Plan Configuration](/docs/getting-started/installation/power-plan-configuration) to ensure continuous 24/7 system availability.
