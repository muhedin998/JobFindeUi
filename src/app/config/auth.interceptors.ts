import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // You can perform actions before the request is sent
        console.log('Interceptor: Before sending request');
        const token = sessionStorage.getItem('token') ?? '';
        // Modify the request if needed
        const modifiedRequest = request.clone({
            setHeaders: {
                'Authorization':`Bearer ${token}`,
            }
        });

        // Continue with the modified request
        return next.handle(modifiedRequest);
    }
}