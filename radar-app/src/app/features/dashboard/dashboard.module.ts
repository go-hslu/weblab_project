import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatIcon } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";

import { routes } from "./dashboard.routes";

import { TrainCasePipe } from "@shared/pipes/train-case.pipe";

import { DashboardComponent } from "./dashboard.component";
import { TechOverviewComponent } from "./components/tech-overview/tech-overview.component";
import { TechDetailsComponent } from "./components/tech-details/tech-details.component";

@NgModule({
    declarations: [
        DashboardComponent,
        TechOverviewComponent,
        TechDetailsComponent
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
        MatMenuModule,
        MatButtonModule,
        MatDividerModule,
        MatTabsModule,
        MatTooltipModule,
        MatIcon,
        TrainCasePipe,
        RouterModule.forChild(routes)
    ]
})
export class DashboardModule { }
