import { Component, Input, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { catchError, throwError } from "rxjs";

import { MatSnackBar } from "@angular/material/snack-bar";

import { showApiFailureSnackBar, showApiSuccessSnackBar } from "@shared/utils/snackbar.util";
import { Tech } from "@shared/types/tech/Tech.model";
import { TechCategory } from "@shared/types/tech/TechCategory.enum";
import { TechState } from "@shared/types/tech/TechState.enum";
import { TechService } from "@shared/apis/tech.service";

@Component({
  selector: "app-tech-details-page",
  templateUrl: "./tech-details-page.component.html",
  styleUrl: "./tech-details-page.component.css"
})
export class TechDetailsPageComponent implements OnInit {

    @Input({ required: true })
    public tech!: Tech;

    public readonly techCategories = Object.values(TechCategory);
    public readonly techStates = Object.values(TechState);

    constructor(
        private _route: ActivatedRoute,
        private _techService: TechService,
        private _location: Location,
        private _snackBar: MatSnackBar
    ) {}

    public ngOnInit(): void {
        const id: string | null = this._route.snapshot.paramMap.get("id");
        if (id != null) {
            this._techService
                .getTechById(id)
                .pipe(
                    catchError(err => {
                        showApiFailureSnackBar(this._snackBar, "API not accessible!");
                        this._location.back();
                        return throwError(err);
                    })
                )
                .subscribe((tech: Tech) => {
                    this.tech = tech;
                    showApiSuccessSnackBar(this._snackBar, `Data loaded successfully! (${tech.name})`);
                });
        }
    }

    public returnToOverview(): void {
        this._location.back();
    }
}
