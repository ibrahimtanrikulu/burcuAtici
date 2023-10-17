import { IBase } from './base.interface';

export interface IYeniHizmet extends IBase {
    hizmetKategoriID: number;
    hizmetID: string;
    ucret: number;
    ortalamaIslemUcreti: number;
    tekrarGunSuresi: number;
}
