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
        private _api: ApiService<Tech>
    ) { }

    public getTechs(): Observable<Tech[]> {
        return this._api.getEntities(this._apiPath);
    }

    public getTechById(id: string): Observable<Tech> {
        return this._api.getEntityById(this._apiPath, id);
    }
}
