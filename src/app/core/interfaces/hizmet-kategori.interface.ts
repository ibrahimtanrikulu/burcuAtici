import { IBase } from './base.interface';
import { IHizmet } from './hizmet.interface';

export interface IHizmetKategori extends IBase {
    hizmetKategoriAdi: string;
    hizmetler?: IHizmet[];
}
