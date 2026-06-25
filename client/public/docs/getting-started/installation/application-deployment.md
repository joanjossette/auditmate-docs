---
title: Application Deployment
description: Deploy AuditMate MFG and configure database
category: Getting Started > Installation Guide
---

# Application Deployment

## 1. Extract Installer

- Extract the AuditMateMFG installation package to a local folder

## 2. Launch Deployment Manager

1. Run **Deployment Manager → Run as Administrator**
2. Ensure the **File Storage Path** exists

![AuditMateMFG Deployment Manager](../images/deployment-manager.png)

---

## 3. Add Database Configuration

- Enter SQL Server details from previous steps
- Apply the application license

| Setting             | Value                      |
| ------------------- | -------------------------- |
| SQL Server Instance | `NEXAS-SVR2025\SQLEXPRESS` |
| Database Username   | `Nexas`                    |
| Password            | `nexasPW1`                 |
| Port Number         | `59978`                    |

---

## 4. Verify Deployment

1. Open **IIS Manager → Sites**
2. Ensure all application sites are **Running**
