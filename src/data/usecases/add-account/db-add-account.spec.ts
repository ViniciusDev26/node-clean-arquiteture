import { Encryptor } from '../../protocols/encryptor'
import { DbAddAccount } from './db-add-account'

class EncryptorStub {
  async encrypt (value: string): Promise<string> {
    return await new Promise(resolve => resolve('hashed_password'))
  }
}

interface SutTypes {
  sut: DbAddAccount
  encryptorStub: Encryptor
}
const makeSut = (): SutTypes => {
  const encryptorStub = new EncryptorStub()
  const sut = new DbAddAccount(encryptorStub)

  return {
    encryptorStub,
    sut
  }
}

describe('DbAddAccount UseCase', () => {
  it('should call Encryptor with correct password', async () => {
    const { sut, encryptorStub } = makeSut()
    const encryptSpy = jest.spyOn(encryptorStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    await sut.add(accountData)

    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
