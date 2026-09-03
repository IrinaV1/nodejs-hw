import { Router } from 'express';
import {
  loginUserSchema,
  registerUserSchema,
} from '../validations/authValidation.js';
import { celebrate } from 'celebrate';
import { loginUser, refreshUserSession, registerUser } from '../controllers/authController.js';

const authRoutes = Router();

authRoutes.post('/auth/register', celebrate(registerUserSchema), registerUser);
authRoutes.post('/auth/login', celebrate(loginUserSchema), loginUser);
authRoutes.post('/auth/refresh', refreshUserSession);

export default authRoutes;
