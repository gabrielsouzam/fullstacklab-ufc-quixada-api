import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createUserSkill = async (userId: string, skillId: string) => {
  if (!userId || !skillId) throw new Error('UserId e SkillId são obrigatórios')
  return await prisma.userSkill.create({
    data: { userId, skillId },
  })
}

export const getAllUserSkills = async () => {
  return await prisma.userSkill.findMany()
}
