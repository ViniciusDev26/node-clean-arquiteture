import bcrypt from 'bcrypt'
import { Encryptor } from '../../data/protocols/encryptor'

export class BcryptAdapter implements Encryptor {
  constructor (
    private readonly salt: number = 12
  ) {}

  async encrypt (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
