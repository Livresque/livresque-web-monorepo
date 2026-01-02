import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedCurrency = 'XOF (FCFA)';
  currencies = ['XOF (FCFA)', 'EUR  (€)', 'USD ($)'];
  showCurrencyDropdown = false;

  toggleCurrencyDropdown() {
    this.showCurrencyDropdown = !this.showCurrencyDropdown;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.showCurrencyDropdown = false;
  }
}
