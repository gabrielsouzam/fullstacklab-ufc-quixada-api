import { Request, Response } from 'express'
import * as userSkillService from '../../../services/userSkill-service'

export const createUserSkill = async (req: Request, res: Response) => {
  const { userId, skillId } = req.body
  try {
    const newUserSkill = await userSkillService.createUserSkill(userId, skillId)
    res.status(201).json(newUserSkill)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno' })
  }
}

export const getAllUserSkills = async (_: Request, res: Response) => {
  try {
    const userSkills = await userSkillService.getAllUserSkills()
    res.json(userSkills)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar habilidades de usuário' })
  }
}
