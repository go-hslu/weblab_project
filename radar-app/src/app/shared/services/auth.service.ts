import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserRole } from "@shared/enums/UserRole.enum";
import { User } from "@shared/models/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthService {

    public readonly authenticatedUser: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);

    constructor(
        private _router: Router
    ) { }

    // TODO: Finish login functionality
    public login(email: string, password: string): boolean {
        if (email == "admin@hslu.ch" && password == "1234") {
            this.authenticatedUser.next({ id: "1", email: "admin@hslu.ch", role: UserRole.ADMIN, token: "" });
            return true;
        } else if (email == "user@hslu.ch" && password == "1234") {
            this.authenticatedUser.next({ id: "2", email: "user@hslu.ch", role: UserRole.USER, token: "" });
            return true;
        }

        return false;
    }

    public logout(): void {
        this.authenticatedUser.next(null);
    }
}
