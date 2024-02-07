import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ApiService<T> {

    private _apiURL: string = "http://localhost:8080/api";
    private _httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" })
    }

    constructor(
        private http: HttpClient
    ) { }

    getEntities(path: string): Observable<T[]> {
        const url: string = `${this._apiURL}/${path}`;
        return this.http.get<T[]>(url);
    }

    getEntityById(path: string, id: string): Observable<T> {
        const url: string = `${this._apiURL}/${path}/${id}`;
        return this.http.get<T>(url);
    }
}
