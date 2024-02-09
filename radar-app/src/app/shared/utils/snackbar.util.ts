import { MatSnackBar } from "@angular/material/snack-bar";

export function showApiSuccessSnackBar(snackBar: MatSnackBar, message: string): void {
    showApiResponseSnackBar(snackBar, message, 2000, "success-snackbar");
}

export function showApiFailureSnackBar(snackBar: MatSnackBar, message: string): void {
    showApiResponseSnackBar(snackBar, message, 2000, "failure-snackbar");
}

export function showApiResponseSnackBar(snackBar: MatSnackBar, message: string, duration: number, cssClass: string): void {
    snackBar.open(message,  "Close", {
        duration: duration,
        panelClass: [cssClass]
    });
}
