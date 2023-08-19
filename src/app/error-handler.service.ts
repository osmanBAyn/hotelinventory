import { ErrorHandler } from "@angular/core";


export class ErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
      console.log(error);
  }
}
