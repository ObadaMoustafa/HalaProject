import express from "express";
import { signIn } from "../controllers/signIn.js";
const signInRoute = express.Router();

signInRoute.get("/", signIn);

export default signInRoute;
