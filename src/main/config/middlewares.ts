import { Express } from 'express'
import { bodyParser } from '../middlewares/body-parser'

export const middlewares = (app: Express): void => {
  app.use(bodyParser)
}
