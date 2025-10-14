import express from 'express';
import authRouter from './routes/route.js';


const app = express();
// modulo para trabalhar json
app.use(express.json());
const port = 3001;

app.use('/api/route', authRouter);

app.listen(port, () => {
    console.log(`servidor rodando na porta: ${port}`);
})