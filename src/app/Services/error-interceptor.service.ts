import {HttpEvent,HttpHandler, HttpRequest,HttpErrorResponse} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map, switchMap, filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    


    req = req.clone({
      // SET HEADERS AS WE NEED AND PUT TOKEN IN IT 
      setHeaders: {
        Authorization: 'Trackzit'
      }
    });
    return next.handle(req)
      // to catch error 
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          let errorMessage: any;
          // CLIENT SIDE ERROR 
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
            throw Error(errorMessage);
          }
          // SERVER SIDE ERROR 
          else {
            // BAD REQUEST ERROR 
            if (error instanceof HttpErrorResponse && error?.status === 400) {
              errorMessage = error.error.message;
            }
            // UNAUTHORIZED TOKEN ERROR 
            else if (error instanceof HttpErrorResponse && error.status === 401) {
              // return this.handle401Error(req, next);
              errorMessage = "Your session has expired! Please login to continue";
            }
            // NOT FOUND ERROR
            else if (error instanceof HttpErrorResponse && error?.status === 404) {
              errorMessage = ('Unauthorized Action!!!');
            }
            // NOT ACCEPTABLE
            else if (error instanceof HttpErrorResponse && error?.status === 406) {
              errorMessage = error.error.message;
            }
            // SERVER ERROR 
            else if (error instanceof HttpErrorResponse && error?.status === 500) {
              errorMessage = ("An internal server error occurred. Please try again later.");
            }
            // API BEARER ERROR 
            else if (error instanceof HttpErrorResponse && error?.status === 0) {
              errorMessage = ("Request Failed.Please Try Again Later!!!");
            }
            // this.p40LayoutService.showmsg(errorMessage ? errorMessage : error.error.message ? error.error.message : "Something Went Wrong.Please Try Again Later!!!");
          }
          return throwError(errorMessage);
        })
      )
  }
}
