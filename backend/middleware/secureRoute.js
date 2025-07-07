import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const secureRoute = async (req, res, next) => {
    try{
        const token=req.cookies.jwt;
        // console.log(req.cookies);
        // console.log('Token received:', token);
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized access' });
        }
        const decoded = jwt.verify(token, process.env.JWT_TOKEN);
        // console.log('Decoded token:', decoded);
        // console.log('User ID from token:', decoded.user_id);
        if (!decoded) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        const user = await User.findById(decoded.user_id).select('-password');
        // console.log('User found:', user);
         // Check if user exists
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        req.user = user; // Attach user to request object
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        console.log('Error in secureRoute middleware:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

export default secureRoute;