# 🚀 Node.js Express Backend – Task 01

## 📌 Project Overview

This is a **basic Node.js + Express.js project** where I have set up a simple server and added basic routes.  
It serves as a beginner-friendly example to understand how to build a minimal backend with Express.

---

## 🗂️ Folder Structure

root/
├── <your-name>/
│ ├── task-01/
│ │ ├── index.js
│ │ ├── server.js
│ │ ├── package.json
│ │ ├── README.md




---

## ✅ Features

- **HTTP Server** built with Express.js.
- **Middleware**: `express.urlencoded` and `express.json` for parsing request data.
- **Basic Routes**:
  - `/` → Home page (`Welcome to the Home page!`)
  - `/about` → About page (`This is the About page!`)

---




| Method | Route    | Description             |
| ------ | -------- | ----------------------- |
| GET    | `/`      | Returns Home page text  |
| GET    | `/about` | Returns About page text |


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>/<your-name>/task-01


 Install Dependencies
 npm install


Run the Project using Nodemon
npx nodemon server.js



Or if you have added a start script in package.json:
npm start


⚙️ How it Works
server.js runs the Express server.

index.js defines the routes and handles the HTTP requests.

Once the server is up, open: http://localhost:3000


👤 Author
Name: sunil kumar
GitHub: @sunilkmar2170