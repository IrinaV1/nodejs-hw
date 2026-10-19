## Authentication and Sessions

**Branch:** [`04-auth`](https://github.com/IrinaV1/nodejs-hw/tree/04-auth)

This stage extends the Express application with user authentication, session management, and private note collections.

### Features

- User registration and login
- Password hashing with bcrypt
- Session creation and refresh using access and refresh tokens
- Secure HTTP-only cookies for session management
- User logout and session deletion
- Authentication middleware for protected routes
- Private note collections associated with individual users
- Request validation and error handling
- MongoDB integration with Mongoose

### Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Additional libraries:**
- `bcrypt` — password hashing
- `celebrate` and `Joi` — request validation
- `cookie-parser` — cookie parsing
- `http-errors` — HTTP error handling
- `dotenv` — environment variable management

### Authentication Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Log in |
| POST | `/auth/refresh` | Refresh the session |
| POST | `/auth/logout` | Log out |

### Notes API

Note routes require authentication. Each user can access and manage only their own notes.

### Deployment

[**Live API on Render**](https://nodejs-hw-5-6fbo.onrender.com/)

### Source Code

[**GitHub Repository**](https://github.com/IrinaV1/nodejs-hw)
