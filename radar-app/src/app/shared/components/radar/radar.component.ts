import { Component } from "@angular/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TechService } from "../../services/tech.service";
import { Tech } from "../../models/tech.model";

@Component({
    selector: "app-radar",
    standalone: true,
    imports: [ MatSlideToggleModule ],
    templateUrl: "./radar.component.html",
    styleUrl: "./radar.component.css"
})
export class RadarComponent {

    private _techs: Tech[] = [];
    private _selectedTech: Tech | null = null

    constructor(
        private techService: TechService
    ) {}

    ngOnInit(): void {
        this.techService.getTechs().subscribe((techs: Tech[]) => {
            this._techs = techs;
            console.log(techs);
        });
    }
}
