## Validation, Filtering and Pagination

**Branch:** [`03-validation`](https://github.com/IrinaV1/nodejs-hw/tree/03-validation)

This assignment extends the Express application with note filtering, pagination, and request validation.

### Features

- Filter notes by tag using the `tag` query parameter.
- Search notes by title and content using regular expressions.
- Paginate the notes collection with `page` and `perPage` query parameters.
- Validate query parameters, route parameters, and request bodies.
- Validate MongoDB ObjectIds before processing note requests.
- Handle validation errors using `celebrate`.
- Handle 404 and server errors.
- Connect to MongoDB using environment variables.

### Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Additional libraries:** Celebrate, Joi, dotenv, http-errors.

### API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | Get notes with filtering, search, and pagination |
| GET | `/notes/:noteId` | Get a note by ID |
| POST | `/notes` | Create a note |
| PATCH | `/notes/:noteId` | Update a note |
| DELETE | `/notes/:noteId` | Delete a note |

### Query Parameters

The `GET /notes` endpoint supports:

- `page` — page number, default: `1`.
- `perPage` — number of notes per page, default: `10`, allowed range: `5–20`.
- `tag` — filter notes by tag.
- `search` — search note titles and content.

Example:

`GET /notes?page=1&perPage=10&tag=Todo&search=hello`

### Environment Variables

Create a `.env` file and configure:

```env
PORT=3030
MONGO_URL=your_mongodb_connection_string
```

### Links

- [Source Code — Branch 03-validation](https://github.com/IrinaV1/nodejs-hw/tree/03-validation)
- [GitHub Repository](https://github.com/IrinaV1/nodejs-hw)
- [Live Demo on Render](https://nodejs-hw-3-amqn.onrender.com/)

