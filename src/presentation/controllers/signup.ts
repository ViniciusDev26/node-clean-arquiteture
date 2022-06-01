import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../protocols'
import { InvalidParamError, MissingParamError } from '../errors'
import { badRequest, serverError } from '../helpers/http-helper'
export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator
  ) {}

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const { email } = httpRequest.body
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        const hasValue = httpRequest.body[field]
        if (hasValue) continue

        return badRequest(new MissingParamError(field))
      }

      const emailIsValid = this.emailValidator.isValid(email)

      if (!emailIsValid) return badRequest(new InvalidParamError('email'))

      return {
        statusCode: 200,
        body: {}
      }
    } catch (error) {
      return serverError()
    }
  }
}
