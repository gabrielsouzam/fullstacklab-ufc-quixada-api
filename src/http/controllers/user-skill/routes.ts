import { Router } from 'express'
import { createUserSkill, getAllUserSkills } from './userSkill-controller'

const router = Router()

router.post('/', createUserSkill)
router.get('/', getAllUserSkills)

export default router
