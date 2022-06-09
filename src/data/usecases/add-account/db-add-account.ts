import { AccountModel } from '../../../domain/models/account'
import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { Encryptor } from '../../protocols/encryptor'

export class DbAddAccount implements AddAccount {
  constructor (private readonly encryptor: Encryptor) {}

  async add ({ password }: AddAccountModel): Promise<AccountModel> {
    await this.encryptor.encrypt(password)
    return await new Promise(resolve => resolve(null))
  }
}
