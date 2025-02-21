import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactLinkComponent } from '../../components/contact-link/contact-link.component';

@Component({
    selector: 'app-student-life',
    imports: [CommonModule, ContactLinkComponent],
    templateUrl: './student-life.component.html',
    styleUrl: './student-life.component.scss'
})
export class StudentLifeComponent {

}
