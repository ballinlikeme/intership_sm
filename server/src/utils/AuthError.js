export class AuthError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.name = "Authentication Error";
    this.statusCode = statusCode;
  }
}
