import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import signUpRoute from "./routes/signUp.js";
import { connectDb } from "./Db/connectDb.js";
import loginRoute from "./routes/login.js";
import { updateRouter } from "./routes/update.js";
import deleteRoute from "./routes/delete.js";
import { v2 as cloudinary } from "cloudinary";
import profilePicRouter from "./routes/profilePic.js";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

connectDb();
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_NAME,
});
console.log("db and cloud are connected");

const port = process.env.PORT;

//? test the server side
/* app.get("/api", (req, res) => {
  res.json({ name: "Hala", date: "14/05/2022" });
}); ldsjadkljsadkj*/

app.use("/api/signUp", signUpRoute);
app.use("/api/login", loginRoute);
app.use("/api/update", updateRouter);
app.use("/api/delete", deleteRoute);
app.use("/api/profilePic", profilePicRouter);

app.listen(port, function (err) {
  if (err) console.log("Error!:", err);
  console.log("Server listening on PORT", port);
});
