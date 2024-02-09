import { Component, OnInit, ViewChild } from "@angular/core";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { catchError, throwError } from "rxjs";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { Tech } from "@shared/models/tech.model";
import { TechService } from "@shared/services/tech.service";
import { AuthService } from "@shared/services/auth.service";
import { authUserHasTechRole } from "@shared/guards/tech-role.guard";
import { showApiSuccessSnackBar, showApiFailureSnackBar } from "@shared/utils/snackbar.util";

@Component({
    selector: "app-techs-overview-page",
    templateUrl: "./techs-overview-page.component.html",
    styleUrl: "./techs-overview-page.component.css",
    animations: [
        trigger("showDetails", [
            state("collapsed,void", style({ height: "0px", minHeight: "0" })),
            state("expanded", style({ height: "*" })),
            transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
        ]),
    ],
})
export class TechsOverviewPageComponent implements OnInit {

    private _techs: Tech[] = [];

    public searchTerm: string = "";
    public selectedTech: Tech | null = null;
    public dataSource = new MatTableDataSource<Tech>([]);
    public displayedColumns: string[]  = ["name", "category", "state"];
    public displayedColumnsWithActions: string[]  = [...this.displayedColumns, "actions"];
    public hasTechRole: boolean = false;

    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private _techService: TechService,
        private _authService: AuthService,
        private _snackBar: MatSnackBar
    ) {}

    public applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    public clearSearchTerm() {
        this.searchTerm = "";
        this.dataSource.filter = "";
    }

    public ngOnInit(): void {
        this._techService
            .getTechs()
            .pipe(
                catchError(err => {
                    const fakeTechs: Tech[] = [
                        { id: "1", name: "Fake", category: "framework", state: "hold" }
                    ];
                    this._techs = fakeTechs;
                    this.dataSource = new MatTableDataSource<Tech>(fakeTechs);
                    this.dataSource.sort = this.sort;
                    showApiFailureSnackBar(this._snackBar, "API not accessible! Loading fake static data.");
                    return throwError(err);
                })
            )
            .subscribe((techs: Tech[]) => {
                this._techs = techs;
                this.dataSource = new MatTableDataSource<Tech>(techs);
                this.dataSource.sort = this.sort;
                showApiSuccessSnackBar(this._snackBar, `Data loaded successfully! (${techs.length})`);
            });

        this.hasTechRole = authUserHasTechRole(this._authService);
    }
}
