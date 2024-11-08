import { Request, Response } from 'express'
import * as userService from '../../../services/user-service'

export const createUser = async (req: Request, res: Response) => {
  const { name, description, presentation } = req.body

  try {
    const newUser = await userService.createUser(
      name,
      description,
      presentation,
    )
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' })
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' })
  }
}
