import { Router } from 'express'
import { createProject, getAllProjects } from './project-controller'

const router = Router()

router.post('/', createProject)

router.get('/', getAllProjects)

export default router
