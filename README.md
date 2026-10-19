## MongoDB and Mongoose

**Branch:** [`02-mongodb`](https://github.com/IrinaV1/nodejs-hw/tree/02-mongodb)

This assignment extends the Express application by integrating MongoDB with Mongoose and organizing the code into separate modules.

### Features

- Connect to MongoDB using Mongoose.
- Implement all five CRUD operations for notes.
- Organize routes, controllers, models, and middleware into separate modules.
- Log HTTP requests using `pino-http`.
- Handle missing routes with a custom 404 handler.
- Handle application errors with a centralized error handler.
- Use `http-errors` to create HTTP errors with appropriate status codes.
- Configure the server using environment variables.

### Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Additional libraries:** dotenv, cors, pino-http, http-errors.

### Project Structure

- `src/db/` — MongoDB connection.
- `src/models/` — Mongoose schemas and models.
- `src/routes/` — API route definitions.
- `src/controllers/` — request handlers and business logic.
- `src/middleware/` — logging and error-handling middleware.
- `src/server.js` — application setup and server startup.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | Retrieve all notes |
| GET | `/notes/:noteId` | Retrieve a note by ID |
| POST | `/notes` | Create a new note |
| PATCH | `/notes/:noteId` | Update an existing note |
| DELETE | `/notes/:noteId` | Delete a note by ID |

### Note Model

Each note includes the following fields:

- `title` — required string.
- `content` — optional string, defaults to an empty string.
- `tag` — note category, defaults to `Todo`.
- `createdAt` — creation timestamp.
- `updatedAt` — last update timestamp.

### Environment Variables

Create a `.env` file with the following variables:

```env
PORT=3030
MONGO_URL=your_mongodb_connection_string
```

### Links

- [Source Code — Branch 02-mongodb](https://github.com/IrinaV1/nodejs-hw/tree/02-mongodb)
- [GitHub Repository](https://github.com/IrinaV1/nodejs-hw)
- [Live Demo on Render](https://nodejs-hw-1-jp0r.onrender.com/)
