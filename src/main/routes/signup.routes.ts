import { Router } from 'express'

export const signUpRoutes = (router: Router): void => {
  router.post('/signup', (req, res) => res.status(200).json({ ok: 'ok' }))
}
