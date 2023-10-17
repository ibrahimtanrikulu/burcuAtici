import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { IHizmetKategori } from 'src/app/core/interfaces/hizmet-kategori.interface';
import { IHizmet } from 'src/app/core/interfaces/hizmet.interface';
import { HizmetKategoriService } from 'src/app/core/services/hizmet/hizmet-kategori.service';
import { HizmetService } from 'src/app/core/services/hizmet/hizmet.service';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';

@Component({
    selector: 'app-hizmet-kategori',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        DialogComponent,
        ReactiveFormsModule,
    ],
    templateUrl: './hizmet-kategori.component.html',
    styleUrls: ['./hizmet-kategori.component.scss'],
})
export class HizmetKategoriComponent {
    hizmetkategoriShow: boolean = false;
    hizmetShow: boolean = false;
    hizmetKategori: IHizmetKategori[] = [];
    kategoriID: number = 0;
    HizmetKategoriForm = new FormGroup({
        id: new FormControl(),
        hizmetKategoriAdi: new FormControl(''),
    });
    HizmetForm = new FormGroup({
        id: new FormControl(),
        hizmetAdi: new FormControl(''),
    });
    constructor(
        private hizmetKategoriService: HizmetKategoriService,
        private hizmetService: HizmetService
    ) {
        this.getAll();
    }

    getAll() {
        this.hizmetKategoriService.get('list').subscribe((s: any) => {
            this.hizmetKategori = s;
        });
    }
    hizmetKategoriAdd() {
        this.hizmetKategoriService
            .post('create', this.HizmetKategoriForm.value)
            .subscribe((s) => {
                this.getAll();
            });
    }
    hizmetAdd() {
        this.hizmetService
            .post('create' + '/' + this.kategoriID, this.HizmetForm.value.hizmetAdi)
            .subscribe((s) => {
                this.getAll();
            });
    }
    hizmetKategoriEdit(hizmetKategori: IHizmetKategori) {
        console.log(hizmetKategori, 'hizmetKategori');
    }
    hizmetEdit(hizmet: IHizmet) {
        console.log(hizmet, 'hizmet');
    }
    hizmetKategoridelete() {}
    hizmetDelete() {}
}
