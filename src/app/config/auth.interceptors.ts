import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../core/store/state/app.state";
import { RemoveUser } from "../core/store/actions/user.actions";

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("token") ?? "";
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(modifiedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 || error.status === 403) {
          sessionStorage.removeItem("token");
          this.store.dispatch(new RemoveUser());
        }
        return throwError(error) as Observable<HttpEvent<any>>;
      }),
    );
  }
}
