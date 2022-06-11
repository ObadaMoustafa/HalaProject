import express from "express";
import { deleteUser } from "../controllers/delete.js";

const deleteRoute = express.Router();

deleteRoute.delete("/:userId", deleteUser);

export default deleteRoute;
