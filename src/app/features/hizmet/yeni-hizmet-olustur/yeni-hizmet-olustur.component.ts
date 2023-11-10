import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { YeniHizmetService } from 'src/app/core/services/hizmet/yeni-hizmet.service';
import { HizmetKategoriService } from 'src/app/core/services/hizmet/hizmet-kategori.service';
import { CalisanService } from 'src/app/core/services/calisan/calisan.service';
import { IHizmetKategori } from 'src/app/core/interfaces/hizmet-kategori.interface';
import { IYeniHizmet } from 'src/app/core/interfaces/yeni-hizmet.interface';
import { ICalisan } from 'src/app/core/interfaces/calisan.interface';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@Component({
    selector: 'app-yeni-hizmet-olustur',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        DialogComponent,
        InputMaskModule,
        DropdownModule,
        MultiSelectModule,
        FormsModule,
        DialogModule,
    ],
    templateUrl: './yeni-hizmet-olustur.component.html',
    styleUrls: ['./yeni-hizmet-olustur.component.scss'],
})
export class YeniHizmetOlusturComponent {
    yeniHizmet: IYeniHizmet[] = [];
    hizmetKategori: IHizmetKategori[] = [];
    calisan: ICalisan[] = [];
    selectHizmetList: any[] = [];

    dialogShow: boolean = false;
    //ng-model
    id: number;
    selectHizmetKategori: any;
    selectHizmet: any;
    hizmetSelectCalisanList: any[] = [];
    selectCalisanList: any[] = [];
    ucret: number = 0;
    ortalamaIslemSuresi: number = 0;
    tekrarGunSuresi: number = 0;
    yeniHizmetAdi: string = '';

    constructor(
        private yeniHizmetService: YeniHizmetService,
        private hizmetKategoriService: HizmetKategoriService,
        private calisanService: CalisanService
    ) {
        this.getAll();
    }
    getAll() {
        this.yeniHizmetService.get('list').subscribe((s: any) => {
            this.yeniHizmet = s;
        });
        this.hizmetKategoriService.get('list').subscribe((s) => {
            this.hizmetKategori = s;
        });
        this.calisanService.get('list').subscribe((s: any) => {
            this.calisan = s;
        });
    }

    dialogOpen() {
        this.dialogShow = true;
    }

    stringToNumberArray(inputString: string): number[] {
        return JSON.parse(inputString);
    }

    selectHizmetKategoriMethod() {
        if (this.selectHizmetKategori != undefined) {
            this.hizmetKategori.map((hk) => {
                if (hk.id == this.selectHizmetKategori) {
                    console.log(hk, 'hk');

                    this.selectHizmetList = hk.hizmetler;
                }
            });
        }
    }
    selectHizmetMethod() {
        this.hizmetSelectCalisanList = [];
        if (this.selectHizmet != undefined) {
            this.calisan.map((c: any) => {
                c.hizmetler.map((h) => {
                    if (h.id == this.selectHizmet) {
                        this.hizmetSelectCalisanList.push(c);
                    }
                });
            });
        }
    }

    edit(e: any) {
        this.ucret = e.ucret;
        this.ortalamaIslemSuresi = e.ortalamaIslemSuresi;
        this.tekrarGunSuresi = e.tekrarGunSuresi;
        this.id = e.id;
        this.selectHizmetKategori = e.hizmetKategoriID;
        this.selectHizmet = e.hizmetID;
        this.selectCalisanList = this.stringToNumberArray(e.calisanIds);

        this.selectHizmetKategoriMethod();
        this.selectHizmetMethod();
        this.dialogShow = true;
    }

    save() {
        let stringCalisan = '[' + this.selectCalisanList.join(',') + ']';
        console.log(stringCalisan);

        let data: IYeniHizmet = {
            calisanIds: stringCalisan,
            hizmetID: this.selectHizmet,
            hizmetKategoriID: this.selectHizmetKategori,
            ortalamaIslemUcreti: this.ortalamaIslemSuresi,
            tekrarGunSuresi: this.tekrarGunSuresi,
            ucret: this.ucret,
            yeniHizmetAdi: this.yeniHizmetAdi,
            id: null,
            isPasive: false,
        };

        this.yeniHizmetService.post('create', data).subscribe((s) => {
            this.getAll();
            this.dialogShow = false;
        });
    }
}
