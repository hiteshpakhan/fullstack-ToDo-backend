import express from "express";
// import http from "http";
import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
}));

// app.use(compression());
// app.use(cookieParser());
app.use(bodyParser.json());

// const server = http.createServer(app);

const MONGO_URL = process.env.MONGO_URL;

app.get("/", (req,res)=>{
    res.json({message: "hi there your on the '/' route"})
})

app.use("/api/todos", todoRoutes);

app.listen(8080, async ()=> {
    console.log("server running on http://localhost:8080/");
    const connection = await mongoose.connect(MONGO_URL);
    if(connection){
        console.log("MONGODB DATABASE CONNECTED");
    } else {
        console.log("mongodb connection failed");
    }
});



// console.log("typescript hello there");