import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Home',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/home']
                    },
                ],
            },
            {
                label: 'Randevu işlemleri',
                items: [
                    {
                        label: 'Randevu',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/randevu']
                    },
                ],
            },
            {
                label: 'Müsteri işlemleri',
                items: [
                    {
                        label: 'Müsteri',
                        icon: 'pi pi-fw pi-id-card',
                        routerLink: ['/musteri']
                    },
                ],
            },
            {
                label: 'çalışan işlemleri',
                items: [
                    {
                        label: 'çalışan',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/calisan']
                    },
                ],
            },
            {
                label: 'Hizmet işlemleri',
                items: [
                    {
                        label: 'Yeni Hizmet',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['/yeni-hizmet']
                    },
                    {
                        label: 'Hizmet Kategorisi',
                        icon: 'pi pi-fw pi-prime',
                        routerLink: ['/hizmet']
                    },
                ],
            },
            {
                label: 'SMS ayarları',
                items: [
                    {
                        label: 'Sms',
                        icon: 'pi pi-fw pi-eye',
                    },
                ],
            },
            {
                label: 'Kullanıcı ayarları',
                items: [
                    {
                        label: 'Kulanıcı',
                        icon: 'pi pi-fw pi-eye',
                        routerLink: ['/user']
                    },
                ],
            },
        ];
    }
}
