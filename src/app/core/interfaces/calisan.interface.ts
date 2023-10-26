import { IBase } from './base.interface';

export interface ICalisan extends IBase {
    calisanAdi: string;
    calisanSoyad: string;
    calisanCinsiyet: string;
    calisanUnvan: string;
    calisanTelNo: string;
    calisanEmail: string;
    hizmetIds: any[];
}
