import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Tech } from "@shared/models/tech.model";
import { TechService } from "@shared/services/tech.service";

@Component({
  selector: "app-tech-details-page",
  templateUrl: "./tech-details-page.component.html",
  styleUrl: "./tech-details-page.component.css"
})
export class TechDetailsPageComponent implements OnInit {

    @Input({ required: true })
    public tech!: Tech

    constructor(
        private route: ActivatedRoute,
        private techService: TechService,
        private location: Location
    ) {}

    ngOnInit(): void {
        const id: string | null = this.route.snapshot.paramMap.get("id");
        if (id != null) {
            this.techService
                .getTechById(id)
                .subscribe((tech: Tech) => {
                    this.tech = tech;
                });
        }
    }

    returnToOverview(): void {
        this.location.back();
    }
}
