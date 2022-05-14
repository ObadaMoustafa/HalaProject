import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get("/api", (req, res) => {
  res.json({ name: "Hala", date: "14/05/2022" });
});

app.listen(port, function (err) {
  if (err) console.log("Error!:", err);
  console.log("Server listening on PORT", port);
});
