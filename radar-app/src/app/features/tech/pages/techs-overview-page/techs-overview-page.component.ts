import { Component, OnInit } from "@angular/core";
import { Tech } from "@shared/models/tech.model";
import { TechService } from "@shared/services/tech.service";

@Component({
  selector: "app-techs-overview-page",
  templateUrl: "./techs-overview-page.component.html",
  styleUrl: "./techs-overview-page.component.css"
})
export class TechsOverviewPageComponent implements OnInit {

    techs: Tech[] = [];
    selectedTech: Tech | null = null

    constructor(
        private techService: TechService
    ) {}

    ngOnInit(): void {
        this.techService
            .getTechs()
            .subscribe((techs: Tech[]) => {
                this.techs = techs;
            });
    }
}
