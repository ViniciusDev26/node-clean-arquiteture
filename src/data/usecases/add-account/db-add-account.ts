import {
  AddAccount,
  Encryptor,
  AddAccountModel,
  AccountModel,
  AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encryptor: Encryptor,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add ({ name, email, password }: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encryptor.encrypt(password)

    const account = await this.addAccountRepository.add({
      name,
      email,
      password: hashedPassword
    })

    return await new Promise(resolve => resolve(account))
  }
}
