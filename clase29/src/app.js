import express from "express";
import { connection } from "./config/database.js";
import cors from "cors";
import userRouter from './routes/users.router.js'
import businessRouter from './routes/business.router.js'
import ordersRouter from './routes/orders.router.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use('/api/users', userRouter)
app.use('/api/business', businessRouter)
app.use('/api/orders', ordersRouter)



connection()
app.listen(4500, () => {
  console.log("Server on port 4500");
});
