export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any
}

export interface Controller {
  handle: (httpRequest: HttpRequest) => HttpResponse
}
