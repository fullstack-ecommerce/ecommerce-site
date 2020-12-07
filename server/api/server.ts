import express from 'express';
import cors from 'cors';
import productRoutes from '../routes/productRoutes';
import userRoutes from '../routes/userRoutes';
import userCartRoutes from '../routes/userCartRoutes';

const server = express();


server.use(express.json());
server.use(cors());

server.use('/product', productRoutes);
server.use("/auth", userRoutes);
server.use("/user_cart", userCartRoutes);

export default server;
