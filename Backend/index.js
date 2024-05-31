import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";


import bookRoute from "./route/book.route.js"

const app = express();

app.use(cors());

dotenv.config();

const PORT=process.env.PORT ||4000;
const DBURI=process.env.MONGODBURI;

// connect to mongodb
try {
    mongoose.connect(DBURI);
    console.log("Connect to MongoDB");
} catch (error) {
    console.log("Error", error);
}

// defining routes
app.use("/book",bookRoute)


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})