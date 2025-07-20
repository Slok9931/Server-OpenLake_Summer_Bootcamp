# Task 02 - MongoDB Integration 🛠️

This task is part of the **OpenLake Summer Backend Bootcamp**, focusing on integrating **MongoDB** with a Node.js + Express.js backend.

---

## ✅ Task Objective

- Connect a local MongoDB database using **Mongoose**
- Set up a simple Express server
- Create a sample `POST` and `GET` API to test data persistence

---

## 📁 Folder Structure

task-02/
├── index.js # Main server file
├── .env # Environment variables (MongoDB URI)
├── models/
│ └── User.js # Mongoose model for user data
├── package.json
└── README.md # Project documentation (this file)

yaml
Copy code

---

## 🧪 Features Implemented

- ✅ Connected local MongoDB using Mongoose
- ✅ Created a `User` schema with `name` and `email` fields
- ✅ Created a `POST /user` route to save users in the DB
- ✅ Created a `GET /` route to verify API is working

---

## 💻 How to Run Locally

### 1. Install Dependencies

```bash
npm install
2. Start Local MongoDB Server
Make sure MongoDB is running locally on:


mongodb://localhost:27017
You can use MongoDB Compass to verify.

3. Set Environment Variable
In .env:


MONGO_URI=mongodb://localhost:27017/taskify
PORT=5000
4. Run Server

npm start
📬 API Endpoints
➕ POST /user
Create a new user

Request Body:
json

{
  "name": "John Doe",
  "email": "john@example.com"
}
Success Response:
json

{
  "message": "user saved successfully",
  "user": {
    "_id": "60af...",
    "name": "John Doe",
    "email": "john@example.com",
    "__v": 0
  }
}
✅ GET /
Returns:


"In this task we are doing database setup using mongoose"
```
