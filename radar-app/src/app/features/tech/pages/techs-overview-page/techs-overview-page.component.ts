import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Tech } from "@shared/models/tech.model";
import { TechService } from "@shared/services/tech.service";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-techs-overview-page",
  templateUrl: "./techs-overview-page.component.html",
  styleUrl: "./techs-overview-page.component.css"
})
export class TechsOverviewPageComponent implements OnInit {

    displayedColumns: string[] = ["name", "category", "state"];
    techs = new MatTableDataSource<Tech>([]);

    constructor(
        private techService: TechService,
        private _snackBar: MatSnackBar
    ) {}

    @ViewChild(MatSort) sort: MatSort;

    ngOnInit(): void {
        this.techService
            .getTechs()
            .subscribe((techs: Tech[]) => {
                this.techs = new MatTableDataSource<Tech>(techs);
                this.techs.sort = this.sort;
                this.showApiResponseSnackBar(`Data loaded successfully! (${techs.length})`);
            });
    }

    showApiResponseSnackBar(message: string): void {
        this._snackBar.open(message,  "Close", {
            duration: 1200
        });
    }
}
