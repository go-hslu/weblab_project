import { Component } from "@angular/core";

import { MatCardModule } from "@angular/material/card";

@Component({
    selector: "app-project-overview",
    standalone: true,
    imports: [
        MatCardModule
    ],
    templateUrl: "./project-overview.component.html",
    styleUrl: "./project-overview.component.css"
})
export class ProjectOverviewComponent {

}
