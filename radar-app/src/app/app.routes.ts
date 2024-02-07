import { Routes } from "@angular/router";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { RadarComponent } from "./shared/components/radar/radar.component";

export const routes: Routes = [
    { path: "", title: "Radar App", component: RadarComponent },
    { path: "radar", redirectTo: "", pathMatch: "full" },
    { path: "**", title: "Radar App | 404 Not found", component: NotFoundComponent }
];
