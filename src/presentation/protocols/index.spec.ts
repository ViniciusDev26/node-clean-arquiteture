import * as protocols from './index'

describe('Presentation/Protocols', () => {
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
