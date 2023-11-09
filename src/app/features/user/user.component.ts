import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { IKullanici } from 'src/app/core/interfaces/kullanici.interface';
import { KullaniciService } from 'src/app/core/services/user/kullanici.service';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [
        CommonModule,
        CardModule,
        InputMaskModule,
        InputTextModule,
        ButtonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    userForm = new FormGroup({
        id: new FormControl(),
        kullaniciAdi: new FormControl(''),
        kullaniciSoyadi: new FormControl(''),
        kullaniciTelNo: new FormControl(''),
        kullaniciEmail: new FormControl(''),
        kullaniciSifre: new FormControl(''),
    });
    constructor(private kullaniciService: KullaniciService) {}
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.kullaniciService.get('list').subscribe((users: any) => {
            users.map((user) => {
                this.userForm.patchValue({
                    id: user.id,
                    kullaniciAdi: user.kullaniciAdi,
                    kullaniciSoyadi: user.kullaniciSoyadi,
                    kullaniciTelNo: user.kullaniciTelNo,
                    kullaniciEmail: user.kullaniciEmail,
                    kullaniciSifre: user.kullaniciSifre,
                });
            });
        });
    }

    userSave() {
        this.kullaniciService
            .put('update/' + this.userForm.value.id, this.userForm.value)
            .subscribe((s) => {
                this.getAll();
            });
    }
}
