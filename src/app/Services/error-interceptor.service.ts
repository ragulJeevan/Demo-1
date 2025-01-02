import {HttpEvent,HttpHandler, HttpRequest,HttpErrorResponse} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, map, switchMap, filter, take } from 'rxjs/operators';
import { CommonService } from './common.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService {

  constructor(
    private commonService: CommonService,
    private toastr : ToastrService
  ) {

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this.commonService.setLoader(true);
    req = req.clone({
      setHeaders: {
        Authorization: 'Modular-X',
      }
    });
    return next.handle(req)
      .pipe(
        retry(0),
        catchError((error: HttpErrorResponse) => {
          let errorMessage : any;
           // CLIENT SIDE ERROR 
           if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
            throw Error(errorMessage);
          }
          // SERVER SIDE ERROR 
          else {
            // BAD REQUEST ERROR 
            if (error instanceof HttpErrorResponse && error?.status === 400) {
              errorMessage = error.error.status_message;
            }
            // UNAUTHORIZED TOKEN ERROR 
            else if (error instanceof HttpErrorResponse && error.status === 401) {
              errorMessage = error.error.status_message;
            }
            // NOT FOUND ERROR
            else if (error instanceof HttpErrorResponse && error?.status === 404) {
              errorMessage = ('Unauthorized Route !!!');
            }
            // NOT ACCEPTABLE
            else if (error instanceof HttpErrorResponse && error?.status === 406) {
              errorMessage = error.error.status_message;
            }
            // SERVER ERROR 
            else if (error instanceof HttpErrorResponse && error?.status === 500) {
              errorMessage = error.error.status_message;
            }
            // API BEARER ERROR 
            else if (error instanceof HttpErrorResponse && error?.status === 0) {
              errorMessage = ("Request Failed.Please Try Again Later!!!");
            }
          }
          this.commonService.setLoader(false);
          this.toastr.error(errorMessage ? errorMessage : error.error.message ? error.error.message : "Something Went Wrong.Please Try Again Later!!!",'');
          return throwError(errorMessage);
        })
      )
  }
}
