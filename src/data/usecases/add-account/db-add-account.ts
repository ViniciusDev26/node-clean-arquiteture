import {
  AddAccount,
  Encryptor,
  AddAccountModel,
  AccountModel
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly encryptor: Encryptor) {}

  async add ({ password }: AddAccountModel): Promise<AccountModel> {
    await this.encryptor.encrypt(password)
    return await new Promise(resolve => resolve(null))
  }
}
