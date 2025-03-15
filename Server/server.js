import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import measurementRoute from "./routes/measurements.js";

dotenv.config();
connectDB();
const port = process.env.PORT || 7000;
const app = express();

const __dirname = path.resolve();
app.use(express.json()); //allows the use of JSON data in req,body

//app.use(express.urlencoded({ extended: true }));

app.use("/api/measurements", measurementRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`server is running on port ${port}....`);
});
