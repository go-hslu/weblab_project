import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: "app-not-found-page",
    standalone: true,
    imports: [
        MatCardModule
    ],
    templateUrl: "./not-found.component.html",
    styleUrl: "./not-found.component.css"
})
export class NotFoundComponent {

}
