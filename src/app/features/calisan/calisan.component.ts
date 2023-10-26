import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ICalisan } from 'src/app/core/interfaces/calisan.interface';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CalisanService } from 'src/app/core/services/calisan/calisan.service';
import { HizmetKategoriService } from 'src/app/core/services/hizmet/hizmet-kategori.service';
import { IHizmetKategori } from 'src/app/core/interfaces/hizmet-kategori.interface';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
@Component({
    selector: 'app-calisan',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        FormsModule,
        DialogComponent,
        InputMaskModule,
        CalendarModule,
        DropdownModule,
        ReactiveFormsModule,
        MultiSelectModule,
    ],
    templateUrl: './calisan.component.html',
    styleUrls: ['./calisan.component.scss'],
})
export class CalisanComponent {
    cinsiyetler = [
        { name: 'Kadın', code: 'Kadın' },
        { name: 'Erkek', code: 'Erkek' },
    ];
    dialogShow: boolean = false;
    calisan: ICalisan[] = [];
    selectedCalisan: ICalisan[] = [];
    hizmetKategori: IHizmetKategori[] = [];
    selectionHizmet: any[] = [];
    hizmetKategoriAnyType: any[] = [];
    editStatus: boolean = false;
    calisanForm = new FormGroup({
        id: new FormControl(),
        calisanAdi: new FormControl(''),
        calisanSoyadi: new FormControl(''),
        calisanCinsiyet: new FormControl(''),
        calisanTelNo: new FormControl(''),
        calisanEmail: new FormControl(''),
        calisanUnvan: new FormControl(''),
    });
    constructor(
        private calisanService: CalisanService,
        private hizmetKategoriService: HizmetKategoriService
    ) {
        this.getAll();
        this.getAllHizmet();
    }
    getAll() {
        this.calisanService.get('list').subscribe((s: any) => {
            this.calisan = s;
        });
    }
    getAllHizmet() {
        this.hizmetKategoriService.get('list').subscribe((s: any) => {
            this.hizmetKategori = s;
            this.hizmetKategoriAnyType = [];
            s.map((s) => {
                let ss = {
                    hizmetAdi: s.hizmetKategoriAdi,
                    id: s.id,
                    items: s.hizmetler,
                };
                this.hizmetKategoriAnyType.push(ss);
            });
        });
    }

    // calisanEditMethod(e: any) {
    //     e.hizmetler.map((s) => {
    //         let ss = {
    //             id: s.id,
    //             items: s.hizmetler,
    //         };
    //         this.selectionHizmet.push(ss);
    //     });
    //     this.dialogShow = true;

    //     console.log(e);
    // }
    save() {
        if (this.editStatus) {
        } else {
            let data: ICalisan = {
                hizmetIds: this.selectionHizmet,
                calisanAdi: this.calisanForm.value.calisanAdi,
                calisanCinsiyet: this.calisanForm.value.calisanCinsiyet,
                calisanSoyad: this.calisanForm.value.calisanSoyadi,
                calisanEmail: this.calisanForm.value.calisanEmail,
                calisanTelNo: this.calisanForm.value.calisanTelNo,
                calisanUnvan: this.calisanForm.value.calisanUnvan,
                id: null,
            };

            this.calisanService.post('create', data).subscribe((s) => {
                this.getAll();
            });
        }
    }
}
