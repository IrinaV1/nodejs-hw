import { Router } from 'express';
import {
  loginUserSchema,
  registerUserSchema,
  resetPasswordSchema,
} from '../validations/authValidation.js';
import { celebrate } from 'celebrate';
import {
  loginUser,
  logoutUser,
  refreshUserSession,
  registerUser,
} from '../controllers/authController.js';

const authRoutes = Router();

authRoutes.post('/auth/register', celebrate(registerUserSchema), registerUser);
authRoutes.post('/auth/login', celebrate(loginUserSchema), loginUser);
authRoutes.post('/auth/refresh', refreshUserSession);
authRoutes.post('/auth/logout', logoutUser);
authRoutes.post('/auth/reset-password', celebrate(resetPasswordSchema));
export default authRoutes;
