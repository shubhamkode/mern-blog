import prisma from "../config/prisma";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    const newUser = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    res.json(newUser)

  }
  catch (error) {
    throw new Error(error);
  }
}

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(id)
      }
    });

    if (user) {
      res.json(user)
    } else {
      res.json({
        "error": "User Not Found..."
      })
    }
  }
  catch (error) {
    throw new Error(error);
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email } = req.body
  try {

    const user = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        email
      }
    })
    return res.json(user)
  }
  catch (error) {
    throw new Error(error)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleteUser = await prisma.user.delete({
      where: {
        id: Number(id)
      }
    })
    res.json({ user: deleteUser, message: "User Deleted" })
  } catch (error) {
    throw new Error(error)
  }
}
