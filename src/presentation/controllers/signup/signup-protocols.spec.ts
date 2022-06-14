import * as protocols from './signup-protocols'

describe('SignUpProtocols', () => {
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
