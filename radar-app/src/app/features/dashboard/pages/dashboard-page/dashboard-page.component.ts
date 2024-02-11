import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Link } from "../../types/Link.module";

@Component({
    selector: "app-dashboard-page",
    templateUrl: "./dashboard-page.component.html",
    styleUrl: "./dashboard-page.component.scss"
})
export class DashboardPageComponent {

    public readonly links: Link[] = [
        { label: "Technologien", path: "tech" },
        { label: "Projekte", path: "project" }
    ];
    public activeLink: Link;

    constructor(
        private _router: Router
    ) {
        this.activeLink = this.links[0];
    }
}
