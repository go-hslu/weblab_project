import { Routes } from "@angular/router";
import { HomeComponent } from "@core/components/home/home.component";
import { NotFoundComponent } from "@core/components/not-found/not-found.component";
import { LoginComponent } from "@core/components/login/login.component";

export const routes: Routes = [
    { path: "", title: "Radar App", component: HomeComponent },
    { path: "home", redirectTo: "" },
    {
        path: "dashboard", title: "Radar App | Dashboard",
        loadChildren: () => import("@features/dashboard/dashboard.module").then((module) => module.DashboardModule)
    },
    {
        path: "radar", title: "Radar App | Radar",
        loadChildren: () => import("@features/radar/radar.module").then((module) => module.RadarModule)
    },
    { path: "login", title: "Radar App | Login", component: LoginComponent },
    { path: "**", title: "Radar App | 404 Not found", component: NotFoundComponent }
];
