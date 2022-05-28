import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import signUpRoute from "./routes/signUp.js";
import { connectDb } from "./Db/connectDb.js";
import signInRoute from "./routes/signIn.js";

const app = express();
app.use(express.json());
app.use(cors());

connectDb();

const port = process.env.PORT;

app.get("/api", (req, res) => {
  res.json({ name: "Hala", date: "14/05/2022" });
});

app.use("/api/signUp", signUpRoute);
app.use("/api/signIn", signInRoute);

app.listen(port, function (err) {
  if (err) console.log("Error!:", err);
  console.log("Server listening on PORT", port);
});
