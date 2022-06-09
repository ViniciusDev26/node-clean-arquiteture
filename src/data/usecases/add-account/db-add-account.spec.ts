import { Encryptor } from '../../protocols/encryptor'
import { DbAddAccount } from './db-add-account'

const makeEncryptor = (): Encryptor => {
  class EncryptorStub implements Encryptor {
    async encrypt (value: string): Promise<string> {
      return await new Promise(resolve => resolve('hashed_password'))
    }
  }

  return new EncryptorStub()
}

interface SutTypes {
  sut: DbAddAccount
  encryptorStub: Encryptor
}
const makeSut = (): SutTypes => {
  const encryptorStub = makeEncryptor()
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

  it('should throw if Encryptor', async () => {
    const { sut, encryptorStub } = makeSut()
    jest
      .spyOn(encryptorStub, 'encrypt')
      .mockReturnValueOnce(new Promise(
        (resolve, reject) => reject(new Error())
      ))
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }

    const promise = sut.add(accountData)

    await expect(promise).rejects.toThrow()
  })
})
