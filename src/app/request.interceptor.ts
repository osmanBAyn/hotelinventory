import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const header = new HttpHeaders({token:"122334asd"}); // <-- added HttpHeaders
    const newRequest = request.clone({headers:header}); // <-- added clone method
    return next.handle(newRequest);
  }
}
