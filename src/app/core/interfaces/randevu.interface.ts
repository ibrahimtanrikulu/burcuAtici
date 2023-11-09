import { IBase } from './base.interface';

export interface IRandevu extends IBase {
    hizmet: number;
    calisan: number;
    musteri: number;
    randevuTarih: Date;
}
