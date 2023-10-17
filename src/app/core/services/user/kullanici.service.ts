import { Injectable } from '@angular/core';
import { HttpclientService } from '../base/http-client.service';
import { HttpClient } from '@angular/common/http';
import { IKullanici } from '../../interfaces/kullanici.interface';

@Injectable({
    providedIn: 'root',
})
export class KullaniciService extends HttpclientService<IKullanici> {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'kullanici');
    }
}
