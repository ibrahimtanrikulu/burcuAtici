import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports: [CommonModule, DialogModule],
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    @Input() header: string = '';
    @Input() show: boolean = false;
}
