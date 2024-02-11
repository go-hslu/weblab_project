import { Component, OnInit } from "@angular/core";
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
    selector: "app-tech-details",
    templateUrl: "./tech-details.component.html",
    styleUrl: "./tech-details.component.scss"
})
export class TechDetailsComponent implements OnInit {


    public tech: Tech;

    public readonly techCategories = Object.values(TechCategory);
    public readonly techStates = Object.values(TechState);

    public edited: boolean = false;
    public isAddMode: boolean = false;

    constructor(
        private _route: ActivatedRoute,
        private _techService: TechService,
        private _location: Location,
        private _snackBar: MatSnackBar
    ) {}

    public ngOnInit(): void {
        const id: string|null = this._route.snapshot.paramMap.get("id");
        if (id) {
            this._techService
                .getById(id)
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
        } else {
            this.isAddMode = true;
            this.tech = {
                id: null,
                name: "",
                nameIdentifier: "",
                category: TechCategory.FRAMEWORK,
                state: TechState.HOLD,
                description: "",
                createdOn: null,
                createdBy: null,
                updatedOn: null,
                updatedBy: null,
                publication: null
            };
        }
    }

    public onChange(): void {
        this.edited = true;
    }

    public returnToOverview(): void {
        this._location.back();
    }

    public saveTech(tech: Tech): void {
        this.edited = false;

        this._techService
            .upsert(tech)
            .pipe(
                catchError(err => {
                    showApiFailureSnackBar(this._snackBar, `Error occurred! Couldn't save Tech (${tech.name})`);
                    return throwError(err);
                })
            )
            .subscribe((tech: Tech) => {
                this.tech = tech;
                this._location.replaceState(`/dashboard/tech/${tech.nameIdentifier}`);
                this.isAddMode = false;
                showApiSuccessSnackBar(this._snackBar, `Tech saved successfully! (${tech.name})`);
            });
    }

    public publishTech(tech: Tech): void {
        this._techService
            .publish(tech.nameIdentifier)
            .pipe(
                catchError(err => {
                    showApiFailureSnackBar(this._snackBar, `Error occurred! Couldn't publish Tech (${tech.name})`);
                    return throwError(err);
                })
            )
            .subscribe((tech: Tech) => {
                showApiSuccessSnackBar(this._snackBar, `Tech published successfully! (${tech.name})`);
                this.tech.publication = new Date();
            });
    }

    public deleteTech(tech: Tech): void {
        this._techService
            .delete(tech.nameIdentifier)
            .pipe(
                catchError(err => {
                    showApiFailureSnackBar(this._snackBar, `Error occurred! Couldn't delete Tech (${tech.name})`);
                    return throwError(err);
                })
            )
            .subscribe((res: any) => {
                this._location.back();
                showApiSuccessSnackBar(this._snackBar, `Tech deleted successfully! (${tech.name})`);
            });
    }
}
