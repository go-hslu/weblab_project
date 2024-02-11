import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ApiService<T> {

    public readonly url: string = "http://localhost:8080/api";

    constructor(
        private _http: HttpClient
    ) { }

    public getEntities(path: string): Observable<T[]> {
        const url: string = `${this.url}/${path}`;
        return this._http.get<T[]>(url);
    }

    public getEntityById(path: string, id: string): Observable<T> {
        const url: string = `${this.url}/${path}/${id}`;
        return this._http.get<T>(url);
    }

    public upsertEntity(path: string, entity: T): Observable<T> {
        const url: string = `${this.url}/${path}`;
        return this._http.post<T>(url, entity);
    }

    public deleteEntityById(path: string, id: string): Observable<T> {
        const url: string = `${this.url}/${path}/${id}`;
        return this._http.delete<T>(url);
    }
}
