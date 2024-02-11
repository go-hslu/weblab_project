import { Component } from "@angular/core";
import { Location } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
    selector: "app-not-found-page",
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatTooltipModule
    ],
    templateUrl: "./not-found.component.html",
    styleUrl: "./not-found.component.scss"
})
export class NotFoundComponent {

    constructor(
        private _location: Location
    ) {
    }

    public returnBack(): void {
        this._location.back();
    }
}
