import { AddAccountRepository } from '../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../domain/models/account'
import { AddAccountModel } from '../../../domain/usecases/add-account'
import { MongoHelper } from '../../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountConnection = MongoHelper.getConnection('accounts')

    const { insertedId } = await accountConnection.insertOne(accountData)
    const result = await accountConnection.findOne(insertedId)

    if (!result) return {} as unknown as AccountModel

    const { _id: id, ...account } = result

    return Object.assign({}, account, { id: id.toHexString() }) as AccountModel
  }
}
