import express from 'express';
import * as listMiddleware from '../middlewares/listVerification.js';
import * as listController from '../controller/listSearch.js';

const routers = express.Router();

routers.get('/list', listMiddleware.listVerify, listController.listSerach);

routers.post('/input', listMiddleware.insertName, listController.insertDatabase);

export default routers;