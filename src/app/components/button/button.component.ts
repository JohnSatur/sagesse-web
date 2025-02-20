import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Click!';
  @Input() url: string = '#';
  @Input() icon: string = '';
  @Input() buttonType: 'fill' | 'outline' = 'fill';
  @Input() buttonColor: 'first' | 'second' = 'first';
}
