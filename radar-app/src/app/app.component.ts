import { Component, OnInit } from "@angular/core";
import { AuthService } from "@shared/services/auth.service";
import { User } from "@shared/models/user.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent implements OnInit {

    public isUserAuthenticated: boolean = false;
    public authenticatedUserEmail: string = "";

    constructor(
        private _authService: AuthService
    ) { }

    public logout(): void {
        this._authService.logout();
    }

    public ngOnInit(): void {
        this._authService
            .authenticatedUser
            .subscribe((authUser: User|null) => {
                this.isUserAuthenticated = !!authUser;
                if (this.isUserAuthenticated && authUser) {
                    this.authenticatedUserEmail = authUser.email;
                }
            });
    }
}
