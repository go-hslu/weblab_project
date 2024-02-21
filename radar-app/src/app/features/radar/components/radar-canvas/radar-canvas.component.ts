import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from "@angular/core";
import { catchError, throwError } from "rxjs";

import { MatSnackBar } from "@angular/material/snack-bar";

import { Tech } from "@shared/types/tech/Tech.model";
import { TechCategory } from "@shared/types/tech/TechCategory.enum";
import { TechState } from "@shared/types/tech/TechState.enum";

import { TechService } from "@shared/apis/tech.service";
import { showApiFailureSnackBar, showApiSuccessSnackBar } from "@shared/utils/snackbar.util";

interface Coordinate { x: number, y: number }

@Component({
    selector: "app-radar-canvas",
    standalone: true,
    imports: [],
    templateUrl: "./radar-canvas.component.html",
    styleUrl: "./radar-canvas.component.scss"
})
export class RadarCanvasComponent implements OnInit, AfterViewInit {

    private _techs: Tech[] = [];
    private _ctx: CanvasRenderingContext2D;
    private readonly _stateColors: string[] = ["#B71C1C", "#D84315", "#689F38", "#0277BD"];
    private readonly _categories: string[] = Object.values(TechCategory);
    private readonly _states: string[] = Object.values(TechState);

    @ViewChild("canvas")
    public canvas: ElementRef<HTMLCanvasElement>;

    @ViewChild("radarImg")
    public radarImg: ElementRef<HTMLImageElement>;

    constructor(
        private _techService: TechService,
        private _snackBar: MatSnackBar
    ) { }

    public ngAfterViewInit(): void {
        const ctx: CanvasRenderingContext2D|null = this.canvas.nativeElement.getContext("2d");

        if (ctx) {
            this._ctx = ctx;
            this.initializeBackground();
        }
    }

    public ngOnInit(): void {
        this.loadTechs();
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
                    showApiFailureSnackBar(this._snackBar, "API not accessible! Loading fake static data.");
                    this.draw();
                    return throwError(err);
                })
            )
            .subscribe((techs: Tech[]) => {
                this._techs = techs;
                this.draw();
                showApiSuccessSnackBar(this._snackBar, `Data loaded successfully! (${techs.length})`);
            });
    }

    private initializeBackground(): void {

        this.radarImg.nativeElement.onload = () => {
            this._ctx.drawImage(this.radarImg.nativeElement, 100, 100, 800, 400);
            this.draw();
        }
    }

    private draw(): void {
        this._ctx.clearRect(0, 0, 1000, 800);
        this._ctx.drawImage(this.radarImg.nativeElement, 100, 100, 800, 400);
        this.drawRadar();
        this.drawLabels();

        this._techs.forEach((tech: Tech) => {
            this.drawTech(
                this._states.indexOf(tech.state as string),
                this._categories.indexOf(tech.category as string),
                tech.name);
        });
    }

    private drawRadar(): void {
        this._ctx.strokeStyle = "#fff";
        this._ctx.lineWidth = 3;
        this._ctx.textAlign = "center";
        this._ctx.font = "16px Arial";

        const radarLinesStep = 400 / (this._states.length + 1);

        this._ctx.beginPath();
        for (let i = 1; i < this._states.length; i++) {
            this._ctx.arc(500, 500, 400 - i * radarLinesStep, Math.PI, 0);
        }

        const circleSectorRange = Math.PI / this._categories.length;

        for (let i = 1; i < this._categories.length; i++) {
            this._ctx.moveTo(500, 500);
            const coords: Coordinate = this.calculateCircleOuterPoint(Math.PI + circleSectorRange * i);
            this._ctx.lineTo(coords.x, coords.y);
        }
        this._ctx.stroke();
    }

    private drawLabels(): void {

        const circleSectorRange = Math.PI / this._categories.length;

        for (let i = 0; i < this._categories.length; i++) {
            const category: string = this._categories[i];
            const angle: number = Math.PI + circleSectorRange * i + circleSectorRange / 2;

            const x = 450 * Math.cos(angle) + 500;
            const y = 450 * Math.sin(angle) + 500;

            this._ctx.fillStyle = "#000";
            this._ctx.fillText(category, x, y);
        }

        const radarStatesStep = 400 / (this._states.length + 1);

        for (let i = 0; i < this._states.length; i++) {
            const state: string = this._states[i];

            const x = 100 + radarStatesStep * i + radarStatesStep / 2;
            const x2 = 900 - radarStatesStep * i - radarStatesStep / 2;

            this._ctx.fillStyle =  this._stateColors[i];
            this._ctx.fillText(state, x, 530);
            this._ctx.fillText(state, x2, 530);
        }
    }

    private drawTech(state: number, category: number, techName: string): void {

        const circleSectorRange = Math.PI / this._categories.length;
        const startAngle = Math.PI + circleSectorRange * category;
        const endAngle = startAngle + circleSectorRange;

        const randomAngle = this.randomBetween(startAngle + 0.07, endAngle - 0.07);

        const radarLinesStep = 400 / (this._states.length + 1);
        const outerRadius = 400 - radarLinesStep * state;
        const innerRadius = 400 - radarLinesStep * (state + 1);

        const randomLineRadius = this.randomBetween(innerRadius + 25, outerRadius - 25);

        const x = randomLineRadius * Math.cos(randomAngle) + 500;
        const y = randomLineRadius * Math.sin(randomAngle) + 500;

        this._ctx.fillStyle = this._stateColors[state];

        this._ctx.beginPath();
        this._ctx.arc(x, y, 10, 0, 2 * Math.PI);
        this._ctx.fill();

        this._ctx.fillStyle = "#000";
        this._ctx.fillText(techName, x, y + 25);
    }

    private calculateCircleOuterPoint(rad: number): Coordinate {
        const circleRadius = 400;
        const circleCenterX = 500;
        const circleCenterY = 500;

        const x = circleRadius * Math.cos(rad) + circleCenterX;
        const y = circleRadius * Math.sin(rad) + circleCenterY;

        return { x: x, y: y }
    }

    private randomBetween(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

}
