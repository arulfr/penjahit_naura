import express from 'express';
const adminRouter = express.Router();
import { adminDashboard } from '../controller/admin';

adminRouter.get('/',adminDashboard);

export default adminRouter;