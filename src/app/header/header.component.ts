import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navbarOpen: boolean = false;
  navbarfixed: boolean = false;
  techCode: string = 'TechCode';
  // arrayLogo: Array<any> = this.techCode.split('')
  // amount = 0;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 250) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  constructor() {}

  zmienna = false;

  ngOnInit(): void {}

  onBurgerClick() {
    this.zmienna = !this.zmienna;
  }
  onLogoClick() {
    window.scrollTo(0, 0);
  }
  onContactClick() {
    window.scroll({ top: -200, behavior: 'smooth' });
  }
}
