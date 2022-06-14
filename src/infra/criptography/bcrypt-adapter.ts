import bcrypt from 'bcrypt'
import { Encryptor } from '../../data/protocols/encryptor'

export class BcryptAdapter implements Encryptor {
  constructor (
    private readonly salt: number
  ) {}

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
