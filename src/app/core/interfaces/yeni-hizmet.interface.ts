import { IBase } from './base.interface';

export interface IYeniHizmet extends IBase {
    yeniHizmetAdi?: string;
    hizmetKategoriID: number;
    hizmetID: string;
    ucret: number;
    ortalamaIslemUcreti: number;
    tekrarGunSuresi: number;
    calisanIds: string;
}
