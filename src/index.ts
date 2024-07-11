import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv'
import sellerRouter from "./routes/seller.routes";
import productRouter from "./routes/products.routes";

dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT;

app.use('/seller',sellerRouter)
app.use('/product',productRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
}); 