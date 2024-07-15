import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-link.component.html',
  styleUrl: './contact-link.component.scss'
})
export class ContactLinkComponent {

}
