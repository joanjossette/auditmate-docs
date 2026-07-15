---
title: Create SQL Server Login
description: Create required SQL Server login
category: Getting Started > Installation Guide > SQL Server Configuration
---

# Create SQL Server Login

Create a dedicated SQL Server login for **AuditMateMFG™ Revision Manager** to allow database access and configuration during installation.

## Steps

1. Open **SQL Server Management Studio (SSMS)**
2. Connect to your SQL Server instance
3. Expand **Security > Logins**
4. Right-click **Logins** → Select **New Login**
5. Configure Login Details:
   - **Login name:** `auditmate_user`
   - **Authentication:** SQL Server Authentication
   - **Password:** Set a secure password
6. Uncheck **Enforce password policy**
7. Assign **Server Roles**
8. Assign the following roles:
   - `dbcreator`
   - `sysadmin`

⚠️ **Note:** Make sure to note your Server Name and SQL Server login credentials -- you will need them during application deployment.You are working inside an existing Knowledge Base web project opened in Visual Studio Code.

Your task is to create a new documentation section under:

APPLICATION DEPLOYMENT

### CONTEXT AWARENESS REQUIREMENT

Before writing anything, carefully examine the existing project files to understand:

- The current documentation tone and writing style
- Existing Markdown/MDX structure patterns (headings, sections, formatting)
- How other knowledge base articles are structured
- Typical formatting conventions used across the site (e.g., headings, bullets, steps, notes, warnings)

You MUST base your output on the existing project style so that the new content blends seamlessly with the rest of the Knowledge Base.

### INPUT

I will paste content from a PDF user manual. This content may be unstructured or inconsistent.

### YOUR TASK

1. Analyze the existing Knowledge Base style from the project files
2. Convert the provided manual content into a new Knowledge Base section under "Application Deployment"
3. Rewrite and improve wording where necessary to match:
   - Professional technical documentation tone
   - Consistent formatting used in the project
   - Clear, concise instructional style

### CONTENT RULES

- Do NOT change the technical meaning
- DO improve clarity, grammar, and structure
- DO NOT copy raw manual wording if it conflicts with KB tone
- Keep instructions action-oriented and step-based
- Use consistent formatting found in the project (headings, lists, notes, etc.)
- Remove redundancy or unclear phrasing
- If needed, reorganize content for better flow (Prerequisites → Steps → Verification, etc.)

### OUTPUT REQUIREMENTS

- Output ONLY the final documentation section
- No explanations, no commentary, no analysis
- Format must match the existing project style exactly (Markdown or MDX as used in repo)
- The section should be ready to paste directly into the Knowledge Base

### FINAL SECTION NAME

Application Deployment

---

Now analyze the project files and rewrite the following content into a proper Knowledge Base article:

[PASTE PDF USER MANUAL CONTENT HERE]

![New Login](../../../../images/new-login.png)
![Server Roles](../../../../images/assign-server-roles.png "width=500")

---

## Next Steps

After creating the SQL Server login, proceed to [IIS Setup](/docs/getting-started/installation/iis-setup) to continue the installation process.
