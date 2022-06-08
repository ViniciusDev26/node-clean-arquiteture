import { Controller, EmailValidator, HttpRequest, HttpResponse, AddAccount } from './signup-protocols'
import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'
export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount
  ) {}

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        const hasValue = httpRequest.body[field]
        if (hasValue) continue

        return badRequest(new MissingParamError(field))
      }
      const { name, email, password, passwordConfirmation } = httpRequest.body

      if (password !== passwordConfirmation) return badRequest(new InvalidParamError('passwordConfirmation'))

      const emailIsValid = this.emailValidator.isValid(email)
      if (!emailIsValid) return badRequest(new InvalidParamError('email'))

      this.addAccount.add({
        name,
        email,
        password
      })
      return {
        statusCode: 200,
        body: {}
      }
    } catch (error) {
      return serverError()
    }
  }
}
