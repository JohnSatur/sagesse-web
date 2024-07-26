import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactLinkComponent } from '../../components/contact-link/contact-link.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContactLinkComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
