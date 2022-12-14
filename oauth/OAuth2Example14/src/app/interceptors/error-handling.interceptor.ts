import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { ErrorNotificationService } from '../services/error-notification.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private serv: ErrorNotificationService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      retry(1),
      catchError((err) => this.handleError(err)),
      tap(
        (event) => {
          console.log(event);
        },
        (error) => {
          console.log(error);
        }
      )
    );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.serv.notify(error.error.message);
    } else {
      if (error.status == 401) {
        this.router.navigate(['/login']);
      } else {
        this.serv.notify(error.error);
      }
    }

    return throwError(error);
  }
}
