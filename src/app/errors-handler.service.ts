import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'; 

@Injectable()
export class ErrorsHandlerService implements ErrorHandler {

  constructor() {     
    alert('Handle Error Method.');
  }

  handleError(error : Error | HttpErrorResponse){
    console.error("Custom Error Handling Started Here================");
    console.error(error);
    console.error("Custom Error Handling Ends Here================");
  }
}
