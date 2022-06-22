import { Express, Router } from 'express'
import { signUpRoutes } from '../routes/signup.routes'

export const routes = (app: Express): void => {
  const router = Router()
  app.use('/api', router)

  signUpRoutes(router)
}
