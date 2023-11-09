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

import { DialogModule } from 'primeng/dialog';
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
        DialogModule,
    ],
    templateUrl: './hizmet-kategori.component.html',
    styleUrls: ['./hizmet-kategori.component.scss'],
})
export class HizmetKategoriComponent {
    hizmetkategoriShow: boolean = false;
    hizmetShow: boolean = false;

    hizmetkategoriStatus: boolean = false;
    hizmetEditStatus: boolean = false;
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

    dialogHizmet() {
        this.hizmetShow = true;
        this.HizmetForm.reset();
    }
    dialogHizmetKategori() {
        this.hizmetkategoriShow = true;
        this.HizmetKategoriForm.reset();
    }

    hizmetKategoriAdd() {
        if (this.hizmetkategoriStatus == true) {
            this.hizmetKategoriService
                .put(
                    'update/' + this.HizmetKategoriForm.value.id,
                    this.HizmetKategoriForm.value
                )
                .subscribe((s) => {
                    this.getAll();
                    this.HizmetForm.reset();
                    this.HizmetKategoriForm.reset();
                    this.hizmetkategoriShow = false;
                    this.hizmetShow = false;
                });
            this.hizmetkategoriStatus = false;
        } else {
            this.hizmetKategoriService
                .post('create', this.HizmetKategoriForm.value)
                .subscribe((s) => {
                    this.getAll();
                    this.HizmetForm.reset();
                    this.HizmetKategoriForm.reset();
                    this.hizmetkategoriShow = false;
                    this.hizmetShow = false;
                });
        }
        this.hizmetkategoriShow = false;
    }
    hizmetAdd() {
        if (this.hizmetEditStatus) {
            this.hizmetService
                .put(
                    'update/' + this.HizmetForm.value.id,
                    this.HizmetForm.value
                )
                .subscribe((s) => {
                    this.getAll();
                    this.HizmetForm.reset();
                    this.HizmetKategoriForm.reset();
                    this.hizmetkategoriShow = false;
                    this.hizmetShow = false;
                });
            this.hizmetEditStatus = false;
        } else {
            this.hizmetService
                .post(
                    'create' + '/' + this.kategoriID,
                    this.HizmetForm.value.hizmetAdi
                )
                .subscribe((s) => {
                    this.getAll();
                    this.HizmetForm.reset();
                    this.HizmetKategoriForm.reset();
                    this.hizmetkategoriShow = false;
                    this.hizmetShow = false;
                });
        }
        this.hizmetShow = false;
    }
    hizmetKategoriEdit(hizmetKategori: IHizmetKategori) {
        this.hizmetkategoriStatus = true;
        this.HizmetKategoriForm.patchValue({
            id: hizmetKategori.id,
            hizmetKategoriAdi: hizmetKategori.hizmetKategoriAdi,
        });
        this.hizmetkategoriShow = true;
    }
    hizmetEdit(hizmet: IHizmet) {
        this.hizmetEditStatus = true;
        this.HizmetForm.patchValue({
            id: hizmet.id,
            hizmetAdi: hizmet.hizmetAdi,
        });
        this.hizmetShow = true;
    }
    hizmetKategoridelete() {}
    hizmetDelete() {}
}
