import { Routes } from "@angular/router";
import { TechsOverviewPageComponent } from "./pages/techs-overview-page/techs-overview-page.component";
import { TechDetailsPageComponent } from "./pages/tech-details-page/tech-details-page.component";

export const routes: Routes = [
    { path: "", component: TechsOverviewPageComponent },
    { path: ":id", component: TechDetailsPageComponent }
]