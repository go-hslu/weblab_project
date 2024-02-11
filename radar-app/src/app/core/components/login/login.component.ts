import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { FormsModule } from "@angular/forms"
import { catchError, throwError } from "rxjs";;

import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatSnackBar } from "@angular/material/snack-bar";

import { AuthService } from "@core/services/auth.service";
import { showApiFailureSnackBar } from "@shared/utils/snackbar.util";

@Component({
    selector: "app-login-page",
    standalone: true,
    imports: [
        FormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIcon
    ],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css"
})
export class LoginComponent {

    public email: string = "";
    public password: string = "";

    public obscurePassword: boolean = true;

    constructor(
        private _location: Location,
        private _authService: AuthService,
        private _snackBar: MatSnackBar
    ) {}

    public async login(): Promise<void> {
        this._authService.login({ email: this.email, password: this.password})
            .pipe(
                catchError(err => {
                    showApiFailureSnackBar(this._snackBar, "Login failed!");
                    return throwError(err);
                })
            )
            .subscribe((res: any) => {
                this._location.back();
            });
    }
}
