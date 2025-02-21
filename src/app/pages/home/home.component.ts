import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LevelCardComponent } from '../../components/level-card/level-card.component';

import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { ContactLinkComponent } from '../../components/contact-link/contact-link.component';
register();

@Component({
    selector: 'app-home',
    imports: [CommonModule, ButtonComponent, LevelCardComponent, ContactLinkComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  swiperElement = signal<SwiperContainer | null>(null);

  ngOnInit(): void {
    const swiperElementConstructor = document.querySelector('swiper-container');
    
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      spaceBetween: 8,
      loop: true,
      autoplay: {
        delay: 1500, // Tiempo en milisegundos entre cada slide (3 segundos en este ejemplo)
        disableOnInteraction: false // Permite que el autoplay continúe incluso si el usuario interactúa
    },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 16
        },
        1536: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    };
  
    Object.assign(swiperElementConstructor!, swiperOptions);
    this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    this.swiperElement()?.initialize();
  }
}
