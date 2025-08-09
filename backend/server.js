import express from "express";
import contactRoute from "./routes/contactRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
console.log("env loaded");

const PORT = process.env.PORT || 5001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", contactRoute);

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`);
})