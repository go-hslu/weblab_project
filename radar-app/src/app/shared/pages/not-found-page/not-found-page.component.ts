import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
    selector: "app-not-found-page",
    standalone: true,
    imports: [
        MatCardModule
    ],
    templateUrl: "./not-found-page.component.html",
    styleUrl: "./not-found-page.component.css"
})
export class NotFoundPageComponent {

}
