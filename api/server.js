import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import gigRoute from './routes/gig.route.js';
import conversationRoute from './routes/conversation.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {

    
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to mondoDB')
    } catch (error) {
        console.log(error)
    }
};

//midleware
app.use(express.json());
app.use(cookieParser());

// using endpoints
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);   
app.use('/api/reviews', reviewRoute);
app.use('/api/orders', orderRoute);
app.use('/api/messages', messageRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/conversations', conversationRoute);

    
app.listen(8800, () => {
        connect()
        console.log('Backend server is running')
    })