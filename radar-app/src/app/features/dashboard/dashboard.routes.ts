import { Routes } from "@angular/router";

import { techRoleGuard } from "@core/guards/tech-role.guard";

import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { TechOverviewComponent } from "./components/tech-overview/tech-overview.component";
import { TechDetailsComponent } from "./components/tech-details/tech-details.component";
import { ProjectOverviewComponent } from "./components/project-overview/project-overview.component";

export const routes: Routes = [
    {
        path: "", redirectTo: "tech", pathMatch: "full"
    },
    {
        path: "", component: DashboardPageComponent,
        children: [
            { path: "tech", component: TechOverviewComponent },
            { path: "tech/add", component: TechDetailsComponent, canActivate: [techRoleGuard] },
            { path: "tech/edit/:id", component: TechDetailsComponent, canActivate: [techRoleGuard] },
            { path: "project", component: ProjectOverviewComponent },
        ]
    }
]
