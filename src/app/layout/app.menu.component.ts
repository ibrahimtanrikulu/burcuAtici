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
                label: 'Randevu işlemleri',
                items: [
                    {
                        label: 'Randevu',
                        icon: 'pi pi-fw pi-home',
                    },
                ],
            },
            {
                label: 'Müsteri işlemleri',
                items: [
                    {
                        label: 'Müsteri',
                        icon: 'pi pi-fw pi-id-card',
                    },
                ],
            },
            {
                label: 'çalışan işlemleri',
                items: [
                    {
                        label: 'çalışan',
                        icon: 'pi pi-fw pi-eye',
                    },
                ],
            },
            {
                label: 'Hizmet işlemleri',
                items: [
                    {
                        label: 'Yeni Hizmet',
                        icon: 'pi pi-fw pi-prime',
                    },
                    {
                        label: 'Yeni Hizmet Kategorisi',
                        icon: 'pi pi-fw pi-prime',
                    },
                    {
                        label: 'Yeni Hizmet Adı',
                        icon: 'pi pi-fw pi-prime',
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
            // {
            //     label: 'Pages',
            //     icon: 'pi pi-fw pi-briefcase',
            //     items: [
            //         {
            //             label: 'Auth',
            //             icon: 'pi pi-fw pi-user',
            //             items: [
            //                 {
            //                     label: 'Login',
            //                     icon: 'pi pi-fw pi-sign-in',
            //                     routerLink: ['/auth/login'],
            //                 },
            //                 {
            //                     label: 'Error',
            //                     icon: 'pi pi-fw pi-times-circle',
            //                     routerLink: ['/auth/error'],
            //                 },
            //                 {
            //                     label: 'Access Denied',
            //                     icon: 'pi pi-fw pi-lock',
            //                     routerLink: ['/auth/access'],
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ];
    }
}
