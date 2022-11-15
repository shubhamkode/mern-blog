import express, { Router } from "express";

import { getAllUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/user", createUser);
userRouter.get("/user/:id", getUser);
userRouter.patch("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
