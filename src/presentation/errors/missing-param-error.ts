export class MissingParamError extends Error {
  constructor (missingParamName: string) {
    super(`Missing param: ${missingParamName}`)
    this.name = 'MissingParamError'
  }
}
