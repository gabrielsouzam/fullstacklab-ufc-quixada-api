import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createProject = async (
  title: string,
  description: string,
  userId: string,
) => {
  if (!title || !userId) throw new Error('Title e UserId são obrigatórios')
  return await prisma.project.create({
    data: { title, description, userId },
  })
}

export const getAllProjects = async () => {
  return await prisma.project.findMany()
}
