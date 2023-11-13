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
    hours: number[] = Array.from({ length: 24 }, (_, i) => i);
    selectedDate: Date = new Date();
    selectedClock: string[] = [
        '00:00:00',
        '00:30:00',
        '01:00:00',
        '01:30:00',
        '02:00:00',
        '02:30:00',
        '03:00:00',
        '03:30:00',
        '04:00:00',
        '04:30:00',
        '05:00:00',
        '05:30:00',
        '06:00:00',
        '06:30:00',
        '07:00:00',
        '07:30:00',
        '08:00:00',
        '08:30:00',
        '09:00:00',
        '09:30:00',
        '10:00:00',
        '10:30:00',
        '11:00:00',
        '11:30:00',
        '12:00:00',
        '12:30:00',
        '13:00:00',
        '13:30:00',
        '14:00:00',
        '14:30:00',
        '15:00:00',
        '15:30:00',
        '16:00:00',
        '16:30:00',
        '17:00:00',
        '17:30:00',
        '18:00:00',
        '18:30:00',
        '19:00:00',
        '19:30:00',
        '20:00:00',
        '20:30:00',
        '21:00:00',
        '21:30:00',
        '22:00:00',
        '22:30:00',
        '23:00:00',
        '23:30:00',
    ];
    dialogShow: boolean = false;

    randevuList: IRandevu[] = [];
    hizmetList: IYeniHizmet[] = [];
    musteriList: IMusteri[] = [];
    calisanList: ICalisan[] = [];

    selectCalisanRandevu: any[] = [];
    selectWorkerValue: any;

    selectCalisanIDs: number;
    calisanIDList: any[] = [];
    selectCalisan: any;
    selectMusteri: any;
    selectDate: any;
    selectClock: string;
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

    selectOclok(hour: any) {
        console.log('test', hour);
    }
    selectWorker() {
        if (this.selectWorkerValue != undefined) {
            console.log(this.selectWorkerValue);
            
            this.selectCalisanRandevu = [];
            this.randevuList.map((randevu) => {
                if (randevu.calisan == this.selectWorkerValue) {
                    this.selectCalisanRandevu.push(randevu);
                    console.log(randevu.randevuTarih.getHours());
                }
            });
        }
    }
    //tarih
    getSelectedDayHours(): number[] {
        return Array.from({ length: 24 }, (_, i) => i);
    }
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
    //veritabanı
    selectHizmetMethod() {
        let data;
        this.hizmetList.map((m) => {
            if (m.id == this.selectCalisanIDs) {
                data = m;
            }
        });
        this.calisanIDList = [];
        if (this.selectCalisanIDs != undefined) {
            let result = JSON.parse(data.calisanIds);
            result.map((r) => {
                this.calisanList.map((c: any) => {
                    if (c.calisanId == r) {
                        this.calisanIDList.push(c);
                    }
                });
            });
        }
    }
    getAll() {
        this.yenihizmetService.get('list').subscribe((s: any) => {
            this.hizmetList = s;
        });
        this.musteriService.get('list').subscribe((s: any) => {
            s.map((ss) => {
                if (ss.musteriKaraListe != true) {
                    this.musteriList.push(ss);
                }
            });
        });

        this.calisanSerice.get('list').subscribe((s: any) => {
            this.calisanList = s;
        });
        this.randevuService.get('list').subscribe((s: any) => {
            this.randevuList = s;
            this.randevuList.map((rl) => {
                let tarih = new Date(rl.randevuTarih);
                rl.randevuTarih = tarih;
            });
        });
    }
    save() {
        var saatParcalari = this.selectClock.split(':');
        this.selectDate.setHours(parseInt(saatParcalari[0], 10));
        this.selectDate.setMinutes(parseInt(saatParcalari[1], 10));
        this.selectDate.setSeconds(parseInt(saatParcalari[2], 10));

        let data: IRandevu = {
            calisan: this.selectCalisan,
            hizmet: this.selectCalisanIDs,
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
