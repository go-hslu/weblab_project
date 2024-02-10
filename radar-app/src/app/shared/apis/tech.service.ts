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

    public getTechs(): Observable<Tech[]> {
        return this._api.getEntities(this._apiPath);
    }

    public getTechById(id: string): Observable<Tech> {
        return this._api.getEntityById(this._apiPath, id);
    }
}
