import request from 'supertest'
import { app } from '../config/app'

describe('Signup Routes', () => {
  it('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'vinicius',
        email: 'vinicius26092000@gmail.com',
        password: 'carlos123',
        passwordConfirmation: 'carlos123'
      })
      .expect(200)
  })
})
