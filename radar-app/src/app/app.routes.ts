import { Routes } from "@angular/router";
import { HomePageComponent } from "@shared/pages/home-page/home-page.component";
import { NotFoundPageComponent } from "@shared/pages/not-found-page/not-found-page.component";
import { LoginPageComponent } from "@shared/pages/login-page/login-page.component";

export const routes: Routes = [
    {
        path: "tech", title: "Radar App | Tech",
        loadChildren: () =>
            import("./features/tech/tech.module").then((module) => module.TechModule)
    },
    { path: "login", title: "Radar App | Login", component: LoginPageComponent },
    { path: "", title: "Radar App", component: HomePageComponent },
    { path: "home", redirectTo: "" },
    { path: "**", title: "Radar App | 404 Not found", component: NotFoundPageComponent }
];
