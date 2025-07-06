# 🚀 Task01 - Basic Node.js Backend with Express

This project is a basic Node.js backend server built using **Express**, designed to demonstrate fundamental backend setup and routing. It includes two simple routes and uses **dotenv** for environment variables and **nodemon** for development ease.

---

## 📌 What This Project Includes

- ✅ Basic Node.js project setup
- ✅ Installed dependencies: `express`, `dotenv`, `nodemon`
- ✅ `.gitignore` configured for `node_modules` and `.env`
- ✅ Express server setup with two simple routes
- ✅ Support for environment variables via `.env`
- ✅ Live server reloading using `nodemon`
- ✅ A custom `dev` script for easier development

---

## 🧠 What I Did

1. Initialized the project with `npm init`
2. Installed required packages:
   - `express` – for setting up the web server and routes
   - `nodemon` – to auto-restart the server during development
   - `dotenv` – to manage environment variables
3. Created a `.gitignore` file to keep unnecessary or sensitive files out of version control
4. Wrote an `index.js` file with two basic routes:
   - `/` → returns "you are on home page"
   - `/about` → returns "you are on about page"
5. Added a `"dev"` script to run the server using `nodemon`
6. Created this `README.md` to explain how the project works

---

## 🛠️ How to Set Up and Run This Project

Follow these steps to clone and run this backend locally.

### 📁 1. Clone the Repository

```bash
git clone https://github.com/your-username/task01.git
cd task01

```

📦 2. Install Dependencies

npm install

🔐 3. Create a .env File
Create a .env file in the root of the project:

env

PORT=3000

⚙️ 4. Run the Server
Option 1: With nodemon (Development Mode)

npm run dev

task01/
├── index.js # Main server code
├── package.json # Project metadata and scripts
├── .gitignore # Ignores node_modules and .env
├── .env # Stores environment variables
└── README.md # Project documentation
