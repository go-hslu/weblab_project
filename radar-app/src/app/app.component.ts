import { Component, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";

import { AuthService } from "@core/services/auth.service";
import { User } from "@shared/types/user/User.model";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css"
})
export class AppComponent implements OnInit {

    public isUserAuthenticated: boolean = false;
    public authenticatedUserEmail: string = "";
    public useMobileLayout: boolean = true;

    constructor(
        private _authService: AuthService,
        private _breakpointObserver: BreakpointObserver
    ) { }

    public logout(): void {
        this._authService.logout();
    }

    public ngOnInit(): void {
        this._authService
            .authenticatedUser
            .subscribe((authUser: User|null) => {
                this.isUserAuthenticated = this._authService.isAuthenticated();
                if (this.isUserAuthenticated && authUser) {
                    this.authenticatedUserEmail = authUser.email;
                }
            });

        this._breakpointObserver
            .observe(["(max-width: 600px)"])
            .subscribe((screenSize) => {
                this.useMobileLayout = screenSize.matches;
        });
    }
}
