import express from 'express';

import { getallUsers, getUser, logIn, logout, signUp } from '../controller/user.controller.js';

const router = express.Router();


router.post('/signup', signUp);
router.post('/login', logIn);
router.post('/logout', logout);
router.get('/allusers', getallUsers);

// Assuming you want to use the same controller for signin as well, otherwise replace with the correct controller function

export default router;