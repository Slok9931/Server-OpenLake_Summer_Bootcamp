# 🚀 Task 03: REST API Basics

## ✅ What I Did

- Created a **RESTful API** using **Node.js**, **Express.js**, and **MongoDB** (Mongoose).
- Developed two models:
  - **Todo**: `{ title: String, completed: Boolean }`
  - **Note**: `{ title: String, content: String }`
- Implemented full **CRUD** operations for both resources.
- Used **Postman** for testing.
- Used `nodemon` for hot-reloading during development.

---

## 🛠 How to Run

1. **Start MongoDB** locally on your machine.

2. Clone this repository and install dependencies:

```bash
npm install

```
3. Run the server using 

```bash
npm run dev

```
- Server will run on http://localhost:5000

---

 # 📫 API Endpoints

 ##🔹 Todo Routes

 - Create Todo using POST request

 ```bash
 POST /api/todos
 
 ```
Request body 

```bash
{
  "title": "Learn REST API",
  "completed": false
}
```
- Get All Todos using GET request

```bash
GET /api/todos
```
- Get Todo by ID using GET request

```bash
GET /api/todos/:id
```
- Update Todo using PUT request

```bash
PUT /api/todos/:id
```
Request Body : 
```bash
{
  "title": "Updated Task",
  "completed": true
}
```
- Delete Todo using DELETE request

```bash
DELETE /api/todos/:id
```
---
 ## 📝 Note Routes

 - Create Note using POST request
 
 ```bash
 POST /api/notes
```
Request Body : 

```bash
{
  "title": "Project Discussion",
  "content": "Discussed deadline and deliverables"
}
```
- Get all Notes using GET request

```bash
GET  /api/notes
```
- Get Note by ID

```bash
GET /api/notes/:id
```
- Update Note using PUT request
```bash
PUT /api/notes/:id
```
Request Body : 

```bash
{
  "title": "Updated Note",
  "content": "New content here"
}
```
- Delete Note using Delete request

```bash
Delete /api/notes/:id
```
---

# 📌 Tools & Technologies
- Node.js

- Express.js

- MongoDB

- Mongoose

- Nodemon

- Postman (for API testing)

---

## That's it ! Task-3 Done ✅ ! 🚀


