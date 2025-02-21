import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @HostBinding('class.show-menu') showMenu: boolean = false;

  public toggleNavbar(): void {
    this.showMenu = !this.showMenu;
  }
}
