import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
dotenv.config();


const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


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