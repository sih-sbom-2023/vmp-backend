import AuthController from './../controllers/auth/auth.controller';
import express from 'express';

const router = express.Router();

router.use("/auth", AuthController);

export default router;