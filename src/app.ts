import express from 'express'
import userRoutes from './http/controllers/user/routes'
import projectRoutes from './http/controllers/project/routes'
import skillRoutes from './http/controllers/skill/routes'
import socialLinkRoutes from './http/controllers/social-link/routes'
import userSkillRoutes from './http/controllers/user-skill/routes'

export const app = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/projects', projectRoutes)
app.use('/skills', skillRoutes)
app.use('/social-links', socialLinkRoutes)
app.use('/user-skills', userSkillRoutes)
