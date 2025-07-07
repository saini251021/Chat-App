import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
// app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173', // your frontend URL
  credentials: true
}));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});