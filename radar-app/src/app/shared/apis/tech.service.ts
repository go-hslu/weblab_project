import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ApiService } from "@core/services/api.service";
import { Tech } from "@shared/types/tech/Tech.model";

@Injectable({
    providedIn: "root"
})
export class TechService {

    private _apiPath: string = "techs";

    constructor(
        private _api: ApiService<Tech>,
        private _http: HttpClient
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

    public publish(id: string): Observable<Tech> {
        const url: string = `${this._api.url}/${this._apiPath}/${id}/publish`;
        return this._http.post<Tech>(url, {});
    }

    public delete(id: string): Observable<Tech> {
        return this._api.deleteEntityById(this._apiPath, id);
    }
}
