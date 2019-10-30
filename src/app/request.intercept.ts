import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { nextContext } from "@angular/core/src/render3";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // console.log("hello interceptor");
   
      if(sessionStorage.length>0){
      //  debugger;
        const headers = new HttpHeaders({
         'Authorization': sessionStorage.getItem('token'),
          'Content-Type': 'application/json',
           'Access-Control-Allow-Credentials': 'true'
        });
        // req = req.clone({
        //   withCredentials: true
        // });
        console.log(headers)
        const changedReq = req.clone({headers})
        return next.handle(changedReq);
      }else{
        const changedReq = req.clone({headers: req.headers.set('Content-Type', 'application/json')});
        //const changedReq = req.clone();
        return next.handle(changedReq);
      }
  }
}
