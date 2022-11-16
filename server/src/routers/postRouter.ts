import express, { Router } from "express";
import { getPosts, createPost, publishPost, deletePost, getPost } from "../controllers/postController";

const postRouter: Router = express.Router();

postRouter.get("/", getPosts)
postRouter.post("/", createPost)
postRouter.get("/:id", getPost)
postRouter.put("/publish/:id", publishPost)
postRouter.delete("/:id", deletePost);

export default postRouter;

