# Cost Calculation API

This is a Node/Express/MongoDB REST API to put data in mongoDB Database and Shoot a mail to both on client and admin side.

## Getting Started

```
  Open the config/default.json file and add your mongoURI
```

```bash
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Register a User [POST /api/estimate/mobileapp]

- Request: Add form data to DB and shoot mail to both client and admin

  - Headers
        Content-type: application/json

  - Body

            {
              "firstName": "",
              "lastName": "",
              "email": "",
              "mobile": "",
              "stepsData": ""
            }

- Response: 200 (application/json)

  - Body

          {
            "msg": "Request proceed successfully"
          }
