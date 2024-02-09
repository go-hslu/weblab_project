import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";

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
        FormsModule,
        MatTableModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatButtonModule,
        MatDividerModule,
        RouterModule.forChild(routes)
    ]
})
export class TechModule { }
