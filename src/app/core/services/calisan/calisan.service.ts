import { Injectable } from '@angular/core';
import { HttpclientService } from '../base/http-client.service';
import { HttpClient } from '@angular/common/http';
import { IMusteri } from '../../interfaces/musteri.interface';

@Injectable({
    providedIn: 'root',
})
export class CalisanService extends HttpclientService<IMusteri> {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'calisan');
    }
}
