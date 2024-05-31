import express from "express";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
const app = express();

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


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})