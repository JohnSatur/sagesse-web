import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FeatureComponent } from '../../components/feature/feature.component';
import { LevelCardComponent } from '../../components/level-card/level-card.component';

import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FeatureComponent, LevelCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('swiper-container');
    
    const swiperOptions: SwiperOptions = {
      slidesPerView: 3,
      spaceBetween: 24
    };
  
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
