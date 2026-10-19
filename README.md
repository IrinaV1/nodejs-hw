
### Backend development with Node.js, Express, and MongoDB

A collection of backend homework assignments focused on building and extending REST APIs with Node.js and Express. The project covers server-side development, database integration, authentication, email services, and cloud image storage.

## Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

### Additional Technologies

- **Authentication & Security:** JSON Web Token (JWT), bcrypt
- **Email Services:** Nodemailer, SMTP (Brevo)
- **Image Uploads:** Multer, Cloudinary
- **Validation:** Joi
- **Error Handling:** http-errors
- **Templating:** Handlebars
- **Environment Variables:** dotenv
- **Deployment:** Render
- **Version Control:** Git, GitHub

## Features

- REST API development with Express.js
- MongoDB database integration using Mongoose
- User authentication and protected routes
- Password reset via email with time-limited JWT tokens
- Password hashing with bcrypt
- User avatar uploads using Multer and Cloudinary
- Request validation and centralized error handling
- Environment-based configuration
- API deployment on Render

## Project Structure

The repository contains multiple homework assignments organized into separate Git branches. Each branch represents a stage of backend development.

The `05-mail-and-img` branch extends the Express application with email-based password recovery and user avatar uploads.

## Live Demo

[**Deployed API on Render**](https://nodejs-hw-5-6fbo.onrender.com/)

## Source Code

[**GitHub Repository**](https://github.com/IrinaV1/nodejs-hw)

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IrinaV1/nodejs-hw.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nodejs-hw
   ```

3. Switch to the required homework branch:

   ```bash
   git checkout 05-mail-and-img
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Create a `.env` file in the project root and configure the required environment variables.

6. Start the application using the script defined in `package.json`.

## Environment Variables

The application may require the following environment variables, depending on the selected homework branch:

```env
PORT=
MONGO_URL=
JWT_SECRET=
FRONTEND_DOMAIN=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=
```

**Important:** Never commit your `.env` file or expose database credentials, API keys, SMTP passwords, or JWT secrets in a public repository.

## Learning Goals

- Building RESTful APIs with Node.js and Express
- Working with MongoDB and Mongoose
- Implementing authentication and password recovery
- Sending transactional emails
- Handling file uploads and cloud storage
- Validating requests and managing errors
- Configuring and deploying backend applications

## Author

**Irina V.**

[GitHub Profile](https://github.com/IrinaV1)
