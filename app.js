import Express from "express";
import userRouter from "./router/user.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./Middlewares/error.js";
import cors from "cors";

export const app = Express();

config({
    path: "./data/config.env"
})

// using middleware
app.use(Express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})
);

// Using routes
app.use( "/api/v1/users" ,userRouter);

app.get("/" , (req, res)=> {
    res.send("Nice Working");
})

app.use(errorMiddleware);

