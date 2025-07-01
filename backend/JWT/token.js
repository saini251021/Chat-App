import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const createTokenandSaveCookies = (user_id, res)=>{
    const token = jwt.sign({ user_id }, process.env.JWT_TOKEN, { expiresIn: '10d' });

    res.cookie('jwt', token, {
        httpOnly: true,// xss
        secure: true,
        sameSite:'strict' // CSRF
    });
}

export default createTokenandSaveCookies;