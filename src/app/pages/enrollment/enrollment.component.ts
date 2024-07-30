import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactLinkComponent } from '../../components/contact-link/contact-link.component';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule, ContactLinkComponent],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.scss'
})
export class EnrollmentComponent {

}
