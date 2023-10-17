import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const apiUrl = new InjectionToken<string>('module');
@Injectable({
    providedIn: 'root',
})
export class HttpclientService<T> {
    private _base: string = 'http://localhost:8080';
    private _module: string = '';

    constructor(
        protected httpClient: HttpClient,
        @Inject(apiUrl) module: string
    ) {
        this._module = module;
    }

    private url(path?: string): string {
        return `${this._base}/${this._module}${path ? `/${path}` : ''}`;
    }

    get(
        controller: string,
        id?: string,
        queryString?: string,
        headers?: HttpHeaders
    ): Observable<T> {
        let url = `${this.url(controller)}${id ? `/${id}` : ''}${
            queryString ? `?${queryString}` : ''
        }`;
        return this.httpClient.get<T>(url, { headers });
    }

    post<T>(
        path: string,
        body: Partial<T>,
        queryString?: string,
        headers?: HttpHeaders
    ): Observable<T> {
        let url = `${this.url(path)}${queryString ? `?${queryString}` : ''}`;
        return this.httpClient.post<T>(url, body, { headers });
    }

    put<T>(
        controller: string,
        body: Partial<T>,
        queryString?: string,
        headers?: HttpHeaders
    ): Observable<T> {
        let url = `${this.url(controller)}${
            queryString ? `?${queryString}` : ''
        }`;
        return this.httpClient.put<T>(url, body, { headers });
    }

    delete<T>(
        controller: string,
        id: any,
        queryString?: string,
        headers?: HttpHeaders
    ): Observable<T> {
        let url = `${this.url(controller)}/${id}${
            queryString ? `?${queryString}` : ''
        }`;
        return this.httpClient.delete<T>(url, { headers });
    }
}
