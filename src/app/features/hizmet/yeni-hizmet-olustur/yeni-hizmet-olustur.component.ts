import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
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
    ],
    templateUrl: './yeni-hizmet-olustur.component.html',
    styleUrls: ['./yeni-hizmet-olustur.component.scss'],
})
export class YeniHizmetOlusturComponent {
    yeniHizmet!: any[];
    selectedYeniHizmet!: any[];
    dialogShow: boolean = false;
    convertToNumberArray() {
        // const stringArray = this.inputString.split(',');
        // let result = stringArray.map((str) => Number(str));
    }
}
