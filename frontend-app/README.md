# Rule Engine Application

## Overview
The Rule Engine Application is a Node.js-based backend service that allows users to create, combine, and evaluate logical rules using an Abstract Syntax Tree (AST) structure. The application utilizes MongoDB for data storage and provides a RESTful API for interaction.

## Features
- Create rules with logical conditions using operators like AND, OR, etc.
- Combine multiple rules into a single rule.
- Evaluate rules against user-provided data.
- Store and retrieve rules using MongoDB.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Data Structure**: Abstract Syntax Tree (AST)
- **Client**: React.js 

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v12 or later)
- [MongoDB](https://www.mongodb.com/) (running locally or using a service)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/shaiksuhail01/rule-engine-app.git
   cd rule-engine-app

2. Install dependencies:
    ```bash
    npm install
3. Start MongoDB (if using a local instance):
    ```bash
    mongod
4. Start the application:
    ```bash
    npm start
5. The server will run on http://localhost:5000.


API Endpoints:

1. Create a Rule
    ```bash
    POST /api/rules/create
    Request Body:
    {
  "ruleString": "YOUR_RULE_STRING"
    }

    Response:
    {
  "rule": {
    "rule": "YOUR_RULE_STRING",
    "ast": {
      "type": "operator",
      "value": "AND",
      "left": {...},
      "right": {...}
    }
    }
    }
    }
2. Combine Rules:
    ```bash
    POST /api/rules/combine
    Request Body:
    ["RULE_STRING_1", "RULE_STRING_2", ...]

    Response:
    {
  "rule": {
    "rule": "combine",
    "combinedAst": {...}
    }
    }
    

3. Evaluate a Rule:
    ```bash
    POST /api/rules/evaluate
    Request Body:
    {
  "astId": "RULE_ID",
  "data": {
    "key": "value"
    }
    }

    Response:
    {
  "result": true
    }


4. Get All Rules:
    ```bash
    GET /api/rules/getAll

    Response:
    [
  {
    "rule": "YOUR_RULE_STRING",
    "ast": {...}
  },
  ...
    ]

5. Delete a Rule:
    ```bash
    DELETE /api/rules/:id

    Response:
    "Rule has been deleted..."





