import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: (null as unknown) as MongoClient,

  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getConnection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id: id, ...collectionWithoutId } = collection

    return Object.assign({}, collectionWithoutId, { id: id.toHexString() })
  }
}
