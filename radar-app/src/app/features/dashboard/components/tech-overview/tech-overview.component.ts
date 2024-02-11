import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { catchError, throwError } from "rxjs";

import { MatSnackBar } from "@angular/material/snack-bar";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { AuthService } from "@core/services/auth.service";
import { authUserHasTechRole } from "@core/guards/tech-role.guard";

import { showApiSuccessSnackBar, showApiFailureSnackBar } from "@shared/utils/snackbar.util";
import { Tech } from "@shared/types/tech/Tech.model";
import { TechService } from "@shared/apis/tech.service";

@Component({
    selector: "app-tech-overview",
    templateUrl: "./tech-overview.component.html",
    styleUrl: "./tech-overview.component.scss",
    animations: [
        trigger("showDetails", [
            state("collapsed,void", style({ height: "0px", minHeight: "0" })),
            state("expanded", style({ height: "*" })),
            transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")),
        ]),
    ],
})
export class TechOverviewComponent implements OnInit {

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
        private _router: Router,
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
        this.loadTechs();
        this.hasTechRole = authUserHasTechRole(this._authService);
    }

    public loadTechs(): void {
        this._techService
            .getAll()
            .pipe(
                catchError(err => {
                    const fakeTechs: Tech[] = [
                        {
                            id: "24109fad-ce53-4029-88f7-e92460639e42", name: "Fake", nameIdentifier: "fake", category: "framework", state: "hold",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra pretium dui sit amet rhoncus. Vivamus risus arcu, tincidunt eget ipsum sit amet, lacinia venenatis lacus. Integer volutpat dapibus pellentesque.",
                            createdOn: new Date(), createdBy: "admin@hslu.ch", updatedOn: new Date(), updatedBy: "admin@hslu.ch", publication: new Date()
                        },
                        {
                            id: "e02e841b-4d0d-4392-ab95-2d66dbeeb9c4", name: "Technologies", nameIdentifier: "technologies", category: "language", state: "trial",
                            description: "Vestibulum efficitur mauris eros, quis egestas mauris ullamcorper sodales. Integer consectetur scelerisque magna et vehicula. Suspendisse potenti. Morbi in velit mattis, blandit turpis sed, lacinia erat.",
                            createdOn: new Date(), createdBy: "admin@hslu.ch", updatedOn: new Date(), updatedBy: "admin@hslu.ch", publication: null
                        },
                        {
                            id: "e02e841b-4d0d-4392-ab95-2d66dbeeb9c4", name: "Loaded", nameIdentifier: "loaded",  category: "platform", state: "adopt",
                            description: "Aliquam erat volutpat. Curabitur tempor lorem eu ipsum pellentesque, a tincidunt purus laoreet. Integer sodales auctor sollicitudin. Suspendisse et erat ante. Suspendisse ac tortor id tortor ullamcorper fermentum vitae quis lectus.",
                            createdOn: new Date(), createdBy: "admin@hslu.ch", updatedOn: new Date(), updatedBy: "admin@hslu.ch", publication: new Date()
                        }
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
                this.loadTechs();
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
                this._techs = this._techs.filter((techElement: Tech) => { return techElement != tech; });
                this.dataSource.data = this._techs;
                showApiSuccessSnackBar(this._snackBar, `Tech deleted successfully! (${tech.name})`);
            });
    }
}
