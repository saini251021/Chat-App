import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import createTokenandSaveCookies from '../JWT/token.js';

const signUp = async (req, res) => {
    try {
        // console.log(req.body.confirmPassword);
        const { name, email, password, confirmPassword } = req.body;
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        if (newUser) {
            createTokenandSaveCookies(newUser._id, res);
            res.status(201).json({ message: 'User created successfully', 
                user: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email
                }
             });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const logIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const passCheck = await bcrypt.compare(password, user.password);
        if (!passCheck) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        createTokenandSaveCookies(user._id, res); 
        res.status(200).json({ message: 'User LoggedIn successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie('jwt')
        res.status(200).json({ message: 'User logged out successfully' });
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }  
} 

const getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { name, email } = req.body;
        const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getallUsers=async(req,res)=>{
    try{
        const users= await User.find({});
        if (!users){
            return res.status(404).send({message: "No Users Found"})
        }
        res.status(200).json(users);

    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
}
export { signUp, logIn, getUser, updateUser, logout, getallUsers };