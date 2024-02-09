import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Tech } from "@shared/models/tech.model";
import { TechService } from "@shared/services/tech.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { catchError, throwError } from "rxjs";
import { showApiSuccessSnackBar, showApiFailureSnackBar } from "@shared/utils/snackbar.util";

@Component({
  selector: "app-techs-overview-page",
  templateUrl: "./techs-overview-page.component.html",
  styleUrl: "./techs-overview-page.component.css"
})
export class TechsOverviewPageComponent implements OnInit {

    private _techs: Tech[] = [];

    public dataSource = new MatTableDataSource<Tech>([]);
    public displayedColumns: string[] = ["name", "category", "state"];

    constructor(
        private techService: TechService,
        private _snackBar: MatSnackBar
    ) {}

    @ViewChild(MatSort) sort: MatSort;

    public ngOnInit(): void {
        this.techService
            .getTechs()
            .pipe(
                catchError(err => {
                    console.error("Error on API request occurred!", err);
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
    }
}
