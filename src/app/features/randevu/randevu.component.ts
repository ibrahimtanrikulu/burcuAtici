import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { YeniHizmetService } from 'src/app/core/services/hizmet/yeni-hizmet.service';
import { MusteriService } from 'src/app/core/services/musteri/musteri.service';
import { CalisanService } from 'src/app/core/services/calisan/calisan.service';
import { IYeniHizmet } from 'src/app/core/interfaces/yeni-hizmet.interface';
import { IMusteri } from 'src/app/core/interfaces/musteri.interface';
import { ICalisan } from 'src/app/core/interfaces/calisan.interface';
import { IRandevu } from 'src/app/core/interfaces/randevu.interface';
import { RandevuService } from 'src/app/core/services/randevu.service';

@Component({
    selector: 'app-randevu',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        CalendarModule,
        DropdownModule,
        DialogComponent,
        DialogModule,
        FormsModule,
    ],
    templateUrl: './randevu.component.html',
    styleUrls: ['./randevu.component.scss'],
})
export class RandevuComponent {
    selectedDate: Date = new Date();
    dialogShow: boolean = false;

    randevuList: IRandevu[] = [];
    hizmetList: IYeniHizmet[] = [];
    musteriList: IMusteri[] = [];
    calisanList: ICalisan[] = [];

    selectCalisanIDs: string;
    calisanIDList: any[] = [];
    selectCalisan: any;
    selectMusteri: any;
    selectDate: any;
    constructor(
        private yenihizmetService: YeniHizmetService,
        private musteriService: MusteriService,
        private calisanSerice: CalisanService,
        private randevuService: RandevuService
    ) {
        this.getAll();
    }
    dialogOpen() {
        this.dialogShow = true;
    }

    getAll() {
        this.yenihizmetService.get('list').subscribe((s: any) => {
            this.hizmetList = s;
        });
        this.musteriService.get('list').subscribe((s: any) => {
            this.musteriList = s;
        });

        this.calisanSerice.get('list').subscribe((s: any) => {
            this.calisanList = s;
            console.log(s);
            
        });
        this.randevuService.get('list').subscribe((s: any) => {
            this.randevuList = s;
            this.randevuList.map((rl) => {
                let tarih = new Date(rl.randevuTarih);
                rl.randevuTarih = tarih;
            });
        });
    }

    selectHizmetMethod() {
        this.calisanIDList = [];
        if (this.selectCalisanIDs != undefined) {
            let result = JSON.parse(this.selectCalisanIDs);
            result.map((r) => {
                this.calisanList.map((c: any) => {
                    if (c.calisanId == r) {
                        this.calisanIDList.push(c);
                    }
                });
            });
        }
    }

    //tarih
    previousMonth() {
        const daysInPreviousMonth = new Date(
            this.selectedDate.getFullYear(),
            this.selectedDate.getMonth(),
            0
        ).getDate();

        this.selectedDate = new Date(
            this.selectedDate.getTime() -
                daysInPreviousMonth * 24 * 60 * 60 * 1000
        );
    }

    previousDay() {
        this.selectedDate = new Date(
            this.selectedDate.getTime() - 24 * 60 * 60 * 1000
        );
    }
    nextDay() {
        this.selectedDate = new Date(
            this.selectedDate.getTime() + 24 * 60 * 60 * 1000
        );
    }
    nextMonth() {
        const daysInMonth = new Date(
            this.selectedDate.getFullYear(),
            this.selectedDate.getMonth() + 1,
            0
        ).getDate();

        this.selectedDate = new Date(
            this.selectedDate.getTime() + daysInMonth * 24 * 60 * 60 * 1000
        );
    }
    save() {
        let data: IRandevu = {
            calisan: this.selectCalisan,
            hizmet: 1,
            id: null,
            musteri: this.selectMusteri,
            randevuTarih: this.selectDate,
        };

        this.randevuService.post('create', data).subscribe((s) => {
            this.getAll();
            this.dialogShow = false;
        });
    }
}
