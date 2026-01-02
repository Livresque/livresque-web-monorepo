import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CartService } from '../../shared/services/cart.service';
import { CurrencyService } from '../../shared/services/currency.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private currencyService = inject(CurrencyService);
  
  email = '';
  firstName = '';
  lastName = '';
  address = '';
  city = '';
  postalCode = '';
  country = 'France';
  phone = '';
  mobileMoneyNumber = '';
  cardNumber = '';
  expiryDate = '';
  cvc = '';
  paymentMethod = 'card';
  promoCode = '';
  
  countries = [
    { code: 'FR', name: 'France' },
    { code: 'SN', name: 'Sénégal' },
    { code: 'CI', name: "Côte d'Ivoire" },
    { code: 'ML', name: 'Mali' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'NE', name: 'Niger' },
    { code: 'GN', name: 'Guinée' },
    { code: 'BJ', name: 'Bénin' },
    { code: 'TG', name: 'Togo' },
    { code: 'GH', name: 'Ghana' },
    { code: 'NG', name: 'Nigéria' },
    { code: 'CM', name: 'Cameroun' },
    { code: 'GA', name: 'Gabon' },
    { code: 'CG', name: 'Congo' },
    { code: 'CD', name: 'République Démocratique du Congo' },
    { code: 'CF', name: 'République Centrafricaine' },
    { code: 'TD', name: 'Tchad' },
    { code: 'MA', name: 'Maroc' },
    { code: 'TN', name: 'Tunisie' },
    { code: 'DZ', name: 'Algérie' },
    { code: 'EG', name: 'Égypte' },
    { code: 'KE', name: 'Kenya' },
    { code: 'TZ', name: 'Tanzanie' },
    { code: 'UG', name: 'Ouganda' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'ZA', name: 'Afrique du Sud' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'BE', name: 'Belgique' },
    { code: 'CH', name: 'Suisse' },
    { code: 'CA', name: 'Canada' },
    { code: 'LU', name: 'Luxembourg' }
  ];
  
  items$ = this.cartService.items$;
  totalPrice$ = this.cartService.totalPrice$;
  selectedCurrency$ = this.currencyService.selectedCurrency$;
  
  formatPrice(price: number, currency: string): string {
    if (currency === 'XOF') {
      return `${price.toLocaleString('fr-FR')} FCFA`;
    }
    const formatted = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
    return formatted;
  }
  
  onPaymentMethodChange(method: string) {
    this.paymentMethod = method;
  }
}
