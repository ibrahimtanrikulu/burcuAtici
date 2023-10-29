import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { KullaniciService } from 'src/app/core/services/user/kullanici.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        ButtonModule,
        InputTextModule,
        InputMaskModule,
        FormsModule,
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    userPhoneNumber: string = '';
    userPassword: string = '';

    constructor(
        private userService: KullaniciService,
        private router: Router
    ) {}
    login() {
        let data = {
            kullaniciTelNo: this.userPhoneNumber,
            kullaniciSifre: this.userPassword,
        };

        this.userService.post('login', data).subscribe((s: any) => {
            console.log(s, 's');
            localStorage.setItem('t', s.token);
            this.router.navigate(['/']);
        });
    }
}
