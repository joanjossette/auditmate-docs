---
title: Firewall Setup
description: Configure Windows Firewall for AuditMate web access
category: Getting Started > Installation Guide
---

# Firewall Setup

To enable remote access, configure **Windows Defender Firewall**:

---

## 1. Web Application Port

1. Open **Windows Defender Firewall → Advanced Settings → Inbound Rules → New Rule**
2. Choose **Port → TCP**
3. Enter port: `3080`
4. Action: **Allow**
5. Name the rule: `AuditmateWebApp`

---

## 2. Web API Port

1. Repeat the steps for TCP port: `3081`
2. Name the rule: `AuditmateWebAPI`

> ⚠️ Ensure the firewall rules match the ports configured in Deployment Manager and IIS bindings.
