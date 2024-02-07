import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import {MatListItem, MatNavList} from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { MatToolbar } from "@angular/material/toolbar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatNavList,
        MatIcon,
        MatToolbar,
        RouterOutlet,
        MatListItem
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
