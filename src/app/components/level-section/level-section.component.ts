import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level-section',
  imports: [CommonModule],
  templateUrl: './level-section.component.html',
  styleUrl: './level-section.component.scss'
})
export class LevelSectionComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() imagePosition: 'left' | 'right' = 'left';
  @Input() buttonText: string = 'Ver más';
  @Input() link: string = '';
}
