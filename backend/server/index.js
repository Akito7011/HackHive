import dotenv from 'dotenv';
import { userRouter } from './routes/user.js';
const express = require("express");
const { MongoClient } = require("mongodb");
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const client = new MongoClient(process.env.MONGODB_URI);

async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}
connectToMongo();

app.get("/", (req, res) => {
  res.send("Yupp server is running!🎉");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use(cors({ origin: ["http://localhost:"+PORT], credentials: true })); //currently running on localhost:5173
app.use(cookieParser());
app.use('/auth', userRouter);



mongoose.connect('')
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});