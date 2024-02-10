import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "@core/services/api.service";
import { Tech } from "@shared/types/tech/Tech.model";

@Injectable({
    providedIn: "root"
})
export class TechService {

    private _apiPath: string = "techs";

    constructor(
        private _api: ApiService<Tech>
    ) { }

    public getAll(): Observable<Tech[]> {
        return this._api.getEntities(this._apiPath);
    }

    public getById(id: string): Observable<Tech> {
        return this._api.getEntityById(this._apiPath, id);
    }

    public upsert(tech: Tech): Observable<Tech> {
        return this._api.upsertEntity(this._apiPath, tech);
    }

    public delete(id: string): Observable<Tech> {
        return this._api.deleteEntityById(this._apiPath, id);
    }
}
