import express from 'express';
import cors from 'cors';
import productRoutes from '../routes/productRoutes';
import userRoutes from '../routes/userRoutes';

const server = express();


server.use(express.json());
server.use(cors());

server.use('/product', productRoutes);
server.use("/auth", userRoutes);

export default server;