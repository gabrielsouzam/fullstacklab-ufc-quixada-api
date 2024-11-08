import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUser = async (
  name: string,
  description: string,
  presentation: string,
) => {
  return await prisma.user.create({
    data: {
      name,
      description,
      presentation,
    },
  })
}

export const getUsers = async () => {
  return await prisma.user.findMany()
}
