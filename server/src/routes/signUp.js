import express from "express";
import { createNewUser } from "../controllers/signUp.js";

const signUpRoute = express.Router();

signUpRoute.post("/", createNewUser);

export default signUpRoute;
