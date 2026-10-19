##  Express Basics

**Branch:** [`01-express`](https://github.com/IrinaV1/nodejs-hw/tree/01-express)

This assignment introduces the fundamentals of building a web server with Express.js, handling HTTP requests, and organizing middleware.

### Features

- Set up an Express server using environment variables with `dotenv`.
- Configure `cors` to allow cross-origin requests.
- Parse JSON request bodies using `express.json()`.
- Log HTTP requests using `pino-http`.
- Implement basic note-related routes.
- Handle requests to undefined routes with a custom 404 middleware.
- Handle server errors with a centralized error-handling middleware.
- Add a test endpoint to simulate server errors.

### Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

**Additional libraries:** dotenv, cors, pino-http, nodemon, ESLint, Prettier.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/notes` | Return a message confirming that all notes were retrieved |
| GET | `/notes/:noteId` | Return a message containing the requested note ID |
| GET | `/test-error` | Simulate a server error for testing error handling |

### Error Handling

- `404 Not Found` — returns `{"message": "Route not found"}` for undefined routes.
- `500 Internal Server Error` — returns a JSON object containing the error message.

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
```

### Links

- [Source Code — Branch 01-express](https://github.com/IrinaV1/nodejs-hw/tree/01-express)
- [GitHub Repository](https://github.com/IrinaV1/nodejs-hw)
- [Live Demo on Render](https://nodejs-hw-anjf.onrender.com/)

