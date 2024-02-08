import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Tech } from "@shared/models/tech.model";

@Injectable({
    providedIn: "root"
})
export class TechService {

    private _apiPath: string = "techs";

    constructor(
        private api: ApiService<Tech>
    ) { }

    getTechs(): Observable<Tech[]> {
        return this.api.getEntities(this._apiPath);
    }

    getTechById(id: string): Observable<Tech> {
        return this.api.getEntityById(this._apiPath, id);
    }
}
