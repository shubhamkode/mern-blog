import express, { Router } from "express";

import { getAllUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", createUser);
userRouter.get("/:id", getUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
