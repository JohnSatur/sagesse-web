import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  @Input() title: string = 'Ventaja competitiva';
  @Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
  @Input() icon: string = 'ri-pencil-ruler-2-fill';
  @Input() orientation: 'left' | 'right' = 'left';
}