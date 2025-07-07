import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
const createTokenandSaveCookies = (user_id, res) => {
    // console.log("Creating token and saving cookies for user_id:", user_id);
    dotenv.config();
    const token = jwt.sign({ user_id }, process.env.JWT_TOKEN, { expiresIn: '10d' });

    res.cookie('jwt', token, {
        httpOnly: true,// xss
        // secure: true,
        sameSite:'strict' // CSRF
    });
}
export default createTokenandSaveCookies;