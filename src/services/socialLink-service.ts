import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createSocialLink = async (
  type: string,
  url: string,
  userId: string,
) => {
  if (!type || !url || !userId)
    throw new Error('Type, URL e UserId são obrigatórios')
  return await prisma.socialLink.create({
    data: { type, url, userId },
  })
}

export const getAllSocialLinks = async () => {
  return await prisma.socialLink.findMany()
}
