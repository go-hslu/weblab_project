import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { AuthService } from "@shared/services/auth.service";

@Component({
    selector: "app-login-page",
    standalone: true,
    imports: [
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    templateUrl: "./login-page.component.html",
    styleUrl: "./login-page.component.css"
})
export class LoginPageComponent {

    public email = "";
    public password = "";

    constructor(
        private _location: Location,
        private _authService: AuthService
    ) {}

    public login(): void {
        if (this._authService.login(this.email, this.password)) {
            this._location.back();
        }
    }
}
