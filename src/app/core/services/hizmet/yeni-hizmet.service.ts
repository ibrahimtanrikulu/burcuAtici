import { Injectable } from '@angular/core';
import { HttpclientService } from '../base/http-client.service';
import { IYeniHizmet } from '../../interfaces/yeni-hizmet.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class YeniHizmetService extends HttpclientService<IYeniHizmet> {
    constructor(httpClient: HttpClient) {
        super(httpClient, 'yenihizmet');
    }
}
