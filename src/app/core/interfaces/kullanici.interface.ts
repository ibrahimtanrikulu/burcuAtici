import { IBase } from './base.interface';

export interface IKullanici extends IBase {
    kullaniciAdi: string;
    kullaniciSoyadi: string;
    kullaniciTelNo: string;
    kullaniciEmail: string;
    kullaniciSifre: string;
}
