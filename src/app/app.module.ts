import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import {
    HashLocationStrategy,
    LocationStrategy,
    registerLocaleData,
} from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppLayoutModule } from './core/layout/app.layout.module';
import { apiUrl } from './core/services/base/http-client.service';
import { LoginComponent } from './features/login/login.component';
import { CalisanComponent } from './features/calisan/calisan.component';
import { HizmetKategoriComponent } from './features/hizmet/hizmet-kategori/hizmet-kategori.component';
import { YeniHizmetOlusturComponent } from './features/hizmet/yeni-hizmet-olustur/yeni-hizmet-olustur.component';
import { HomeComponent } from './features/home/home.component';
import { MusteriComponent } from './features/musteri/musteri.component';
import { UserComponent } from './features/user/user.component';
import { JwtModule } from '@auth0/angular-jwt';
import localeTr from '@angular/common/locales/tr';
export function tokenGetter() {
    return localStorage.getItem('t');
}
registerLocaleData(localeTr);
@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        LoginComponent,
        CalisanComponent,
        HizmetKategoriComponent,
        YeniHizmetOlusturComponent,
        HomeComponent,
        MusteriComponent,
        UserComponent,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000',
        }),
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['localhost:8080'],
            },
        }),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: apiUrl, useValue: '' },
        { provide: LOCALE_ID, useValue: 'tr' },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
