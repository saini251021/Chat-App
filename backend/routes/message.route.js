import express from 'express'
import { getMessage, sendMessage } from '../controller/message.controller.js';
import secureRoute from '../middleware/secureRoute.js';
 const router = express.Router();

 router.post('/send/:id',secureRoute , sendMessage)
 router.get('/prev/:id',secureRoute ,getMessage)

 export default router;