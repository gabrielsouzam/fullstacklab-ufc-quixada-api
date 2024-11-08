import { Request, Response } from 'express'
import * as socialLinkService from '../../../services/socialLink-service'

export const createSocialLink = async (req: Request, res: Response) => {
  const { type, url, userId } = req.body
  try {
    const newLink = await socialLinkService.createSocialLink(type, url, userId)
    res.status(201).json(newLink)
  } catch (error) {
    res.status(500).json({ error: 'Erro interno' })
  }
}

export const getAllSocialLinks = async (_: Request, res: Response) => {
  try {
    const links = await socialLinkService.getAllSocialLinks()
    res.json(links)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar links sociais' })
  }
}
