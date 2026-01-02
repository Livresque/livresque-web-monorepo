import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  icon?: string;
  routerLink?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedCurrency = 'XOF';
  currencies = ['XOF', 'EUR', 'USD'];
  showCurrencyDropdown = false;
  isSticky = false;

  menu: MenuItem[] = [
    { label: 'Boutique', icon: 'storefront', routerLink: '/shop' },
    {
      label: 'Sur Nous', icon: 'info', children: [
        { label: 'À propos', icon: 'business', routerLink: '/about' },
        { label: 'FAQ', icon: 'help', routerLink: '/faq' },
        { label: 'Contact', icon: 'contact_mail', routerLink: '/contact' }
      ]
    },
    { label: 'Panier', icon: 'shopping_bag', routerLink: '/cart' }
  ];

  toggleCurrencyDropdown() {
    this.showCurrencyDropdown = !this.showCurrencyDropdown;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.showCurrencyDropdown = false;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isSticky = window.scrollY > 0;
  }
}
