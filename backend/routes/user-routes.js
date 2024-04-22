import { Router } from "express";
import { getAllUsers, getUserProfile, profiles, userLogin, userLogout, userSignup, verifyUser, } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate, } from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";


const userRoutes = Router();


userRoutes.get("/",verifyToken, getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(loginValidator), userLogin);
userRoutes.get("/auth-status", verifyToken, verifyUser);
userRoutes.get("/logout", verifyToken, userLogout);
userRoutes.post('/profiles',verifyToken, profiles);
userRoutes.get("/profile", verifyToken, getUserProfile);


export default userRoutes;