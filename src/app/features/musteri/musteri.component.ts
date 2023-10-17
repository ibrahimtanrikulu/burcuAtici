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
    ],
    templateUrl: './musteri.component.html',
    styleUrls: ['./musteri.component.scss'],
})
export class MusteriComponent {
    cinsiyetler = [
        { name: 'Kadın', code: 'Women' },
        { name: 'Erkek', code: 'Man' },
    ];
    dialogShow: boolean = false;
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
        musteriKaraListe: new FormControl(''),
    });

    constructor(private musteriServise: MusteriService) {
        this.getAll();
    }
    getAll() {
        this.musteriServise.get('list').subscribe((s: any) => {
            this.customers = s;
        });
    }
    musteriAdd() {
        // this.musteriServise
        //     .post('create', this.musteriForm.value)
        //     .subscribe((s) => {
        //         this.getAll();
        //     });
        console.log(this.musteriForm.value);
    }
}
