import { Routes } from "@angular/router";
import { HomeComponent } from "@core/components/home/home.component";
import { NotFoundComponent } from "@core/components/not-found/not-found.component";
import { LoginComponent } from "@core/components/login/login.component";

export const routes: Routes = [
    {
        path: "tech", title: "Radar App | Tech",
        loadChildren: () =>
            import("@features/dashboard/dashboard.module").then((module) => module.DashboardModule)
    },
    { path: "login", title: "Radar App | Login", component: LoginComponent },
    { path: "", title: "Radar App", component: HomeComponent },
    { path: "home", redirectTo: "" },
    { path: "**", title: "Radar App | 404 Not found", component: NotFoundComponent }
];
