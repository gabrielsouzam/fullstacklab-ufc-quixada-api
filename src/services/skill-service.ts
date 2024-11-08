import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createSkill = async (name: string, level: string) => {
  if (!name || !level) throw new Error('Name e Level são obrigatórios')
  return await prisma.skill.create({
    data: { name, level },
  })
}

export const getAllSkills = async () => {
  return await prisma.skill.findMany()
}
