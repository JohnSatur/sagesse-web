import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactLinkComponent } from '../../components/contact-link/contact-link.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [CommonModule, ContactLinkComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {

}
