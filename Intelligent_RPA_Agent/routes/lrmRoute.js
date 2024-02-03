import express from 'express';

import { generateRWD } from '../controllers/lrmController.js';

const router = express.Router();

router.post('/generate-rwd',generateRWD);

export default router;
