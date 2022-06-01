import type { Controller, HttpRequest, HttpResponse } from '../protocols/http'
import type { EmailValidator } from '../protocols/email-validator'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest, serverError } from '../helpers/http-helper'
import { InvalidParamError } from '../errors/invalid-param-error'
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
