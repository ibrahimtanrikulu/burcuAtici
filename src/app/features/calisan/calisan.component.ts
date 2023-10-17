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
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CalisanService } from 'src/app/core/services/calisan/calisan.service';

@Component({
    selector: 'app-calisan',
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
    ],
    templateUrl: './calisan.component.html',
    styleUrls: ['./calisan.component.scss'],
})
export class CalisanComponent {
    dialogShow: boolean = false;
    calisan: ICalisan[] = [];
    selectedCalisan: ICalisan[] = [];
    constructor(private calisanService: CalisanService) {
        calisanService.get('list').subscribe((s: any) => {
            this.calisan = s;
        });
    }
}
