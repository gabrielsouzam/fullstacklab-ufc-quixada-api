import { Router } from 'express'
import { createSkill, getAllSkills } from './skill-controller'

const router = Router()

router.post('/', createSkill)
router.get('/', getAllSkills)

export default router
