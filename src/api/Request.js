import { Tokens } from '../common/const';

export default class Request {
  constructor() {
    this.method;
    this.parameters;
    this.endpoint;
  }

  static get() {
    this.method = 'GET';
    return this;
  }

  static post() {
    this.method = 'POST';
    return this;
  }

  static delete() {
    this.method = 'DELETE';
    return this;
  }

  static put() {
    this.method = 'PUT';
    return this;
  }

  static to(endpoint) {
    this.endpoint = endpoint;
    return this;
  };

  static payload(parameters) {
    this.parameters = parameters;
    return this;
  }

  static setHeaders(headers) {
    this.headers = headers;
    return this;
  }

  static async send() {
    this.headers = {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${Tokens.ACCESS_TOKEN}`
    };

    try {
      const request = await fetch(this.endpoint, {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.parameters)
      });

      return await this.formatResponse(request);
    } catch(err) {
      throw err;
    }
  }

  static async formatResponse(request) {
    let response;

    try {
      response = await(request.json());
    } catch(err) {
      throw err;
    } // AVOID WARNING IF RESPONSE HAS NO CONTENT

    if (request.status >= 200 && request.status < 300) {
      return response;
    } else {
      throw ({
        statusCode: response.status,
        message: response.message
      });
    }
  }
}