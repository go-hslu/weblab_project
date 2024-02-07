import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@Component({
    selector: "app-radar",
    standalone: true,
    imports: [ MatSlideToggleModule ],
    templateUrl: "./radar.component.html",
    styleUrl: "./radar.component.css"
})
export class RadarComponent {

}
