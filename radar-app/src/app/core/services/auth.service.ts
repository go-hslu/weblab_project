import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, catchError, throwError } from "rxjs";

import { User } from "@shared/types/user/User.model";
import { Credentials } from "@shared/types/user/Credentials.model";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private _apiURL: string = "http://localhost:8080/api";

    public readonly authenticatedUser: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);

    constructor(
        private _http: HttpClient,
        private _router: Router,
        private _location: Location
    ) {}

    // TODO: Return type
    public login(credentials: Credentials) {

        const url: string = `${this._apiURL}/login`;
        this._http.post<Credentials>(url, credentials)
            .pipe(
                catchError(err => {
                    return throwError(err);
                })
            )
            .subscribe((res: any) => {
                localStorage.setItem("token", res.token);
                localStorage.setItem("email", res.email);
                localStorage.setItem("role", res.role);

                this.authenticatedUser.next({ token: res.token, email: res.email, role: res.role });
                this._location.back();

                return true;
            });
    }

    public logout(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("role");

        this.authenticatedUser.next(null);
    }

    public isAuthenticated(): boolean {
        return !!this.authenticatedUser.getValue();
    }
}
