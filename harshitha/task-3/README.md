Task 3: REST API Basics

This project is a complete RESTful API built with Node.js, Express, and MongoDB. It provides full CRUD (Create, Read, Update, Delete) operations for "Todo" and "Note" resources.

### Key Features Implemented:

-   **Mongoose Schemas:** Defined structured models for `Todo` and `Note`.
-   **CRUD Operations:** Implemented all four database operations for both resources.
-   **RESTful Routing:** Used standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) to interact with the API.
-   **API Testing:** All endpoints were tested for functionality and error handling using Postman.
-   **Query Parameter Filtering:** Added logic to filter `GET` requests (e.g., `/todos?completed=true`).

### API Endpoints

#### Todo Resource (`/todos`)

-   `POST /todos` - Create a new todo.
-   `GET /todos` - Get all todos (supports filtering).
-   `GET /todos/:id` - Get a single todo by ID.
-   `PUT /todos/:id` - Update a todo by ID.
-   `DELETE /todos/:id` - Delete a todo by ID.
-   `DELETE /todos` - (Advanced) Delete multiple todos matching a filter in the request body.

#### Note Resource (`/notes`)

-   `POST /notes` - Create a new note.
-   `GET /notes` - Get all notes (supports filtering).
-   `GET /notes/:id` - Get a single note by ID.
-   `PUT /notes/:id` - Update a note by ID.
-   `DELETE /notes/:id` - Delete a note by ID.


### How to Run

1.  Run `npm install` to install dependencies.
2.  Run `npm run dev` to start the server.