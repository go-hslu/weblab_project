import { NgModule } from "@angular/core"
import { NoPreloading, RouterModule } from "@angular/router"

import { routes } from "./app.routes";

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
