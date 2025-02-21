import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactLinkComponent } from '../../components/contact-link/contact-link.component';
import { LevelSectionComponent } from '../../components/level-section/level-section.component';

@Component({
    selector: 'app-offer',
    imports: [CommonModule, ContactLinkComponent, LevelSectionComponent],
    templateUrl: './offer.component.html',
    styleUrl: './offer.component.scss'
})
export class OfferComponent {

}
