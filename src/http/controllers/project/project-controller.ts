import { Request, Response } from 'express'
import * as projectService from '../../../services/project-service'

export const createProject = async (req: Request, res: Response) => {
  const { title, description, userId } = req.body
  try {
    const newProject = await projectService.createProject(
      title,
      description,
      userId,
    )
    res.status(201).json(newProject)
  } catch (error) {
    res.status(400).json({ error: 'Erro interno' })
  }
}

export const getAllProjects = async (_: Request, res: Response) => {
  try {
    const projects = await projectService.getAllProjects()
    res.json(projects)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar projetos' })
  }
}
