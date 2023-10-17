import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
    selector: 'app-yeni-hizmet-olustur',
    standalone: true,
    imports: [CommonModule, TableModule],
    templateUrl: './yeni-hizmet-olustur.component.html',
    styleUrls: ['./yeni-hizmet-olustur.component.scss'],
})
export class YeniHizmetOlusturComponent {
    customers!: any[];
    selectedCustomers!: any[];
}
