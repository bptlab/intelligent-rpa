import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/lrmRoute.js';  
import cors from 'cors';

import dotenv from 'dotenv';


const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use('/', router);
dotenv.config();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
