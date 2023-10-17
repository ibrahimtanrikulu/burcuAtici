import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './core/layout/app.layout.component';
import { LoginComponent } from './features/login/login.component';
import { MusteriComponent } from './features/musteri/musteri.component';
import { UserComponent } from './features/user/user.component';
import { HomeComponent } from './features/home/home.component';
import { HizmetKategoriComponent } from './features/hizmet/hizmet-kategori/hizmet-kategori.component';
import { YeniHizmetOlusturComponent } from './features/hizmet/yeni-hizmet-olustur/yeni-hizmet-olustur.component';
import { CalisanComponent } from './features/calisan/calisan.component';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: 'login',
                    component: LoginComponent,
                },
                {
                    path: '',
                    component: AppLayoutComponent,
                    children: [
                        {
                            path: 'musteri',
                            component: MusteriComponent,
                        },
                        {
                            path: 'user',
                            component: UserComponent,
                        },
                        {
                            path: 'home',
                            component: HomeComponent,
                        },
                        {
                            path: 'hizmet',
                            component: HizmetKategoriComponent,
                        },
                        {
                            path: 'yeni-hizmet',
                            component: YeniHizmetOlusturComponent,
                        },
                        {
                            path: 'calisan',
                            component: CalisanComponent,
                        },
                    ],
                },
            ],
            {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
            }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
