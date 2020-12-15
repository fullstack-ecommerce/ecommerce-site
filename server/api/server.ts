import express from 'express';
import cors from 'cors';
import productRoutes from '../routes/productRoutes';
import userRoutes from '../routes/userRoutes';
import userCartRoutes from '../routes/userCartRoutes';
import resetPassword from '../routes/resetPassword';
import commentRoute from '../routes/commentRoutes';
import { validateToken } from '../restricted/restrictedMiddleware';

const server = express();

server.use(express.json());
server.use(cors());

server.use('/product', productRoutes);
server.use("/auth", userRoutes);
server.use('/auth', resetPassword);
// add validateToken middleware to user_cart and comment
server.use("/user_cart", userCartRoutes);
server.use("/comment", commentRoute);

export default server;
