import { Router } from 'express'
import { createSocialLink, getAllSocialLinks } from './socialLink-controller'

const router = Router()

router.post('/', createSocialLink)
router.get('/', getAllSocialLinks)

export default router
