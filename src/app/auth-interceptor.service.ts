import { Injectable } from '@angular/core';;
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{

  constructor(private env: EnvironmentService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        "x-api-key": this.env.xapikey
      }
    })
    
    return next.handle(request)
  }
}
