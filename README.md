# Payload CMS – Form Builder with Supabase (Local Setup)

## 📝 Objective

This project demonstrates the use of Payload CMS locally with a working form builder system, connected to a Supabase PostgreSQL database. It shows how to:

- Create forms using Payload's admin panel
- Fetch and submit form data using Payload’s built-in API
- Test the backend integration using Postman

---

## ✅ Tech Stack

- Payload CMS (local development)
- Supabase PostgreSQL (free tier)
- Postman (API testing)
- Node.js + TypeScript
- Form Builder Plugin (`@payloadcms/plugin-form-builder`)

---

## ⚙️ Setup Steps

### 1. Connected to Supabase PostgreSQL

- Signed up at [https://supabase.io](https://supabase.io) using GitHub
- Created a project and copied the PostgreSQL connection string:

- Pasted this into the `.env` file of the Payload project:

```env
DATABASE_URI=your-supabase-connection-string
PAYLOAD_SECRET=your-secret-key
npx create-payload-app
# Selected the "blank" template
cd my-payload-app
npm install

npm run dev

Opened Payload Admin at:
👉 http://localhost:3000/admin

Created an admin user
npm install @payloadcms/plugin-form-builder
npm install @payloadcms/plugin-form-builder

Then in payload.config.ts, added:
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

plugins: [
  formBuilderPlugin({})
]
4. Created "Contact Us" Form
Navigated to the Forms section in the Payload Admin

Clicked “Create New Form”

Set form title as "Contact Us"

Added fields:

Full Name (type: text)

Email Address (type: email)

Message (type: textarea)

GET http://localhost:3000/api/forms/[formID]

response

```
{
    "id": 1,
    "title": "Contact Us",
    "fields": [
        {
            "id": "68345a180f9d3ba0ab9b7077",
            "name": "fullname",
            "label": "Full Name",
            "width": 100,
            "defaultValue": null,
            "required": true,
            "blockName": null,
            "blockType": "text"
        },
        {
            "id": "68345a920f9d3ba0ab9b7079",
            "name": "email",
            "label": "Email Address",
            "width": 100,
            "required": true,
            "blockName": null,
            "blockType": "email"
        },
        {
            "id": "68345ad00f9d3ba0ab9b707b",
            "message": {
                "root": {
                    "type": "root",
                    "format": "",
                    "indent": 0,
                    "version": 1,
                    "children": [
                        {
                            "type": "paragraph",
                            "format": "",
                            "indent": 0,
                            "version": 1,
                            "children": [],
                            "direction": null,
                            "textStyle": "",
                            "textFormat": 0
                        },
                        {
                            "type": "paragraph",
                            "format": "",
                            "indent": 0,
                            "version": 1,
                            "children": [
                                {
                                    "mode": "normal",
                                    "text": "abcd",
                                    "type": "text",
                                    "style": "",
                                    "detail": 0,
                                    "format": 0,
                                    "version": 1
                                }
                            ],
                            "direction": "ltr",
                            "textStyle": "",
                            "textFormat": 0
                        }
                    ],
                    "direction": "ltr"
                }
            },
            "blockName": "",
            "blockType": "message"
        }
    ],
    "submitButtonLabel": "Submit Response",
    "confirmationType": "redirect",
    "confirmationMessage": null,
    "redirect": {
        "url": "/"
    },
    "updatedAt": "2025-05-26T13:26:42.055Z",
    "createdAt": "2025-05-26T12:25:41.755Z",
    "emails": []
}


