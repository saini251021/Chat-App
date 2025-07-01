import express from 'express';

import { getUser, signIn, signUp } from '../controller/user.controller.js';

const router = express.Router();


router.post('/signup', signUp)
router.post('/signin', signIn) 
router.get('/getuser/:id', getUser);
// Assuming you want to use the same controller for signin as well, otherwise replace with the correct controller function

export default router;