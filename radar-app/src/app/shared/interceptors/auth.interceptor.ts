import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem("token");

        if (token) {
            const modifiedReq = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token}`)
            });

            return next.handle(modifiedReq);
        }

        return next.handle(req);
    }
}
