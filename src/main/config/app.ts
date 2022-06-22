import express from 'express'
import { middlewares } from './middlewares'

const app = express()
middlewares(app)

export { app }
