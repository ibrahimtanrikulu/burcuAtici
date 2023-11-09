import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IMusteri } from 'src/app/core/interfaces/musteri.interface';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { MusteriService } from 'src/app/core/services/musteri/musteri.service';
import { DropdownModule } from 'primeng/dropdown';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
@Component({
    selector: 'app-musteri',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        InputTextModule,
        CardModule,
        ButtonModule,
        DialogComponent,
        InputMaskModule,
        CalendarModule,
        CheckboxModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
        DialogModule,
    ],
    templateUrl: './musteri.component.html',
    styleUrls: ['./musteri.component.scss'],
})
export class MusteriComponent {
    cinsiyetler = [
        { name: 'Kadın', code: 'Kadın' },
        { name: 'Erkek', code: 'Erkek' },
    ];
    dialogShow: boolean = false;
    musteriEdit: boolean = false;
    customers: IMusteri[] = [];
    selectedCustomers: IMusteri[] = [];
    musteriForm = new FormGroup({
        id: new FormControl(),
        musteriAdi: new FormControl(''),
        musteriSoyadi: new FormControl(''),
        musteriCinsiyet: new FormControl(''),
        musteriTelNo: new FormControl(''),
        musteriTelNo2: new FormControl(''),
        musteriEmail: new FormControl(''),
        musteriDogumGunu: new FormControl(''),
        musteriKaraListe: new FormControl(false),
    });

    constructor(private musteriServise: MusteriService) {
        this.getAll();
    }
    getAll() {
        this.musteriServise.get('list').subscribe((s: any) => {
            this.customers = s;
        });
    }

    dialogOpen() {
        this.dialogShow = true;
        this.musteriForm.reset();
    }
    musteriAdd() {
        if (this.musteriEdit) {
            console.log('girdi');
            this.musteriServise
                .put(
                    'update/' + this.musteriForm.value.id,
                    this.musteriForm.value
                )
                .subscribe((s) => {
                    this.getAll();
                    this.musteriForm.reset();
                    this.dialogShow = false;
                });
        } else {
            this.musteriServise
                .post('create', this.musteriForm.value)
                .subscribe((s) => {
                    this.getAll();
                    this.musteriForm.reset();
                    this.dialogShow = false;
                });
        }
    }

    musteriEditMethod(c: IMusteri) {
        this.musteriEdit = true;
        this.musteriForm.patchValue({
            id: c.id,
            musteriAdi: c.musteriAdi,
            musteriSoyadi: c.musteriSoyadi,
            musteriCinsiyet: c.musteriCinsiyet,
            musteriDogumGunu: c.musteriDogumGunu,
            musteriEmail: c.musteriEmail,
            musteriTelNo: c.musteriTelNo,
            musteriTelNo2: c.musteriTelNo2,
        });
        this.dialogShow = true;
    }
}
