import { Injectable } from '@angular/core';
import { HttpclientService } from '../base/http-client.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HizmetKategoriService extends HttpclientService<any> {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'hizmetKategori');
    }
}
