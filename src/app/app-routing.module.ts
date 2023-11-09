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
import { AuthGuard } from './core/guards/auth.guard';
import { RandevuComponent } from './features/randevu/randevu.component';

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
                    canActivate: [AuthGuard],
                    children: [
                        {
                            path: 'randevu',
                            component: RandevuComponent,
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'musteri',
                            component: MusteriComponent,
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'user',
                            component: UserComponent,
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'home',
                            component: HomeComponent,
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'hizmet',
                            component: HizmetKategoriComponent,
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'yeni-hizmet',
                            component: YeniHizmetOlusturComponent,
                            canActivate: [AuthGuard],
                        },
                        {
                            path: 'calisan',
                            component: CalisanComponent,
                            canActivate: [AuthGuard],
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
