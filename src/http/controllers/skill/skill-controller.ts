import { Request, Response } from 'express'
import * as skillService from '../../../services/skill-service'

export const createSkill = async (req: Request, res: Response) => {
  const { name, level } = req.body
  try {
    const newSkill = await skillService.createSkill(name, level)
    res.status(201).json(newSkill)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno' })
  }
}

export const getAllSkills = async (_: Request, res: Response) => {
  try {
    const skills = await skillService.getAllSkills()
    res.json(skills)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar habilidades' })
  }
}
