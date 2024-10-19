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
   git clone https://github.com/shaiksuhail01/rule-engine-ast-app.git
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
   
2. Combine Rules:
    ```bash
    POST /api/rules/combine
    
3. Evaluate a Rule:
    ```bash
    POST /api/rules/evaluate


4. Get All Rules:
    ```bash
    GET /api/rules/getAll


5. Delete a Rule:
    ```bash
    DELETE /api/rules/:id




