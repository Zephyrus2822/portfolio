import express from "express";
import contactRoute from "./routes/contactRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("NAME", process.env.USR_EMAIL);
console.log("PASSWORD", process.env.USR_PASSWORD);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoute);

app.listen(5001, () => {
    console.log("Server is running on Port 5001.");
})