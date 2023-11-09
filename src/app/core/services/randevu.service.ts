import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRandevu } from '../interfaces/randevu.interface';
import { HttpclientService } from './base/http-client.service';

@Injectable({
    providedIn: 'root',
})
export class RandevuService extends HttpclientService<IRandevu> {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'randevu');
    }
}
