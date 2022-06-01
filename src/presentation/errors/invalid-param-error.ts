export class InvalidParamError extends Error {
  constructor (invalidParamName: string) {
    super(`Invalid param: ${invalidParamName}`)
    this.name = 'InvalidParamError'
  }
}
