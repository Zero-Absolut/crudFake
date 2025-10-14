import express from 'express';
import authRouter from './routes/route.js';


const app = express();
const port = 3001;

app.use('/api/route', authRouter);

app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`);
})