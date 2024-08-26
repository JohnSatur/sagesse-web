import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-level-card',
  standalone: true,
  imports: [],
  templateUrl: './level-card.component.html',
  styleUrl: './level-card.component.scss'
})
export class LevelCardComponent {
  @Input() title: string = '';
  @Input() imgUrl: string = '';
  @Input() color: string = '';
  @Input() link: string = '';
}
