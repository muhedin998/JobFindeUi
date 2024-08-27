import {inject, Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent, HttpErrorResponse,
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {RemoveUser} from "../core/store/actions/user.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../core/store/state/app.state";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    private store = inject(Store<AppState>);
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
        return next.handle(modifiedRequest).pipe(
            catchError((error: HttpErrorResponse) => {
                // Check if the error is due to token expiration (status code 401)
                if (error.status === 401 || error.status === 403) {
                    console.log('Token expired, handle refresh logic here');
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    this.store.dispatch(new RemoveUser())
                }
                return throwError(error);
            })
        );
    }
}