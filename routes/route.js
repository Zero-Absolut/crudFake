import express from 'express';
import { listVerify } from '../middlewares/listVerification.js';
import { listSerach } from '../controller/listSearch.js';

const routers = express.Router();

routers.get('/list', listVerify, listSerach);

export default routers;