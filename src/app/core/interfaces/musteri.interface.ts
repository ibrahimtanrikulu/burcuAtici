import { IBase } from './base.interface';

export interface IMusteri extends IBase {
    musteriAdi: string;
    musteriSoyadi: string;
    musteriCinsiyet: string;
    musteriTelNo: string;
    musteriTelNo2?: string;
    musteriEmail: string;
    musteriDogumGunu: string;
    musteriKaraListe: boolean;
}
