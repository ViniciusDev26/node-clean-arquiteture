import * as protocols from './db-add-account-protocols'

describe('DbAddAccountProtocols', () => {
  it('should have exports', () => {
    expect(typeof protocols).toBe('object')
  })

  it('should not have undefined exports', () => {
    const protocolsKeys = Object.keys(protocols)
    for (const protocol of protocolsKeys) {
      expect(!!protocol).toBe(true)
    }
  })
})
