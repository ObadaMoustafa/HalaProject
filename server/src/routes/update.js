import express from "express";
import { updateEmail, updatePassword } from "../controllers/update.js";
export const updateRouter = express.Router();

updateRouter.put("/email", updateEmail);
updateRouter.put("/password", updatePassword);
