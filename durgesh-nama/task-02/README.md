# Task 2: MongoDB Integration

### What I Did

- Installed Mongoose to connect MongoDB with the Node.js server.
- Connected to a local MongoDB database at `mongodb://localhost:27017/openlake_taskify_app`.
- Created a simple User schema with fields: `name` and `email`.
- Created a POST route `/user` to store user data into the database.
- Used `express.json()` middleware to parse incoming JSON.
- Used `nodemon` for auto-restart on file changes.

---

### How to Run

1. Make sure MongoDB is running locally on your system.

2. Install dependencies:

```bash
npm install

```
3. Start the server using nodemon:

```bash
npm run dev

```
4. Test endpoints:

- GET http://localhost:5000/ : Returns a simple message

- POST http://localhost:5000/user : Accepts JSON like:

```bash
{
  "name": "Durgesh",
  "email": "durgesh@example.com"
}
```
---

✨ **Files** 

- **index.js** :  Main server file with MongoDB integration
- **package.json** : Project config and scripts

---
## That's it! MongoDB integration is complete! 🚀
