import express from 'express';
const router = express.Router();
import { home } from '../controller';


router.get('/',home);



export default router;