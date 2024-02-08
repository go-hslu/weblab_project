import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { routes } from "./tech.routes";

import { TechsOverviewPageComponent } from "./pages/techs-overview-page/techs-overview-page.component";
import { TechDetailsPageComponent } from "./pages/tech-details-page/tech-details-page.component";

@NgModule({
    declarations: [
        TechsOverviewPageComponent,
        TechDetailsPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class TechModule { }
