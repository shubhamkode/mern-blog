import prisma from "../config/prisma";
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany()
  res.json(posts)
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, authorId } = req.body;

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: Number(authorId) },
        },
      }
    });
    res.json(newPost)
  } catch (error) {
    res.json({ error: "Unable to Create Post" })
  }
}

export const publishPost = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const postData = await prisma.post.findUnique({
      where: { id: Number(id) },
      select: {
        published: true,
      }
    });

    const updatedPost = await prisma.post.update({
      where: { id: Number(id) },
      data: { published: !postData.published },
    })

    res.json(updatedPost)
  } catch (error) {
    res.json({
      error: `Post with ID ${id} does not exist in the database`
    })
  }
}

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.delete({
      where: {
        id: Number(id)
      }
    });
    res.json(post)

  } catch (error) {
    res.json({
      error: `Post with id ${id} does not Exist...`
    })
  }
}

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { title, content, } = req.body;
    const post = await prisma.post.update({
      where: {
        id: Number(id)
      },
      data: {
        title,
        content,
      }
    })
    res.json(post)
  } catch (error) {
    res.json({ error: `Unable to update Post with id: ${id}` })
  }
}


export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { id: Number(id) }
    });
    res.json(post)
  } catch (error) {
    res.json({ error: `Post with id: ${id} does not exist` })
  }
}
