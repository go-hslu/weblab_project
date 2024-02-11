import { Component } from "@angular/core";
import { RadarCanvasComponent } from "../../components/radar-canvas/radar-canvas.component";

import { MatCardModule } from "@angular/material/card";

@Component({
    selector: "app-radar-page",
    standalone: true,
    imports: [
        RadarCanvasComponent,
        MatCardModule
    ],
    templateUrl: "./radar-page.component.html",
    styleUrl: "./radar-page.component.scss"
})
export class RadarPageComponent {

}
