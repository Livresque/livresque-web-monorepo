import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CartService } from '../../shared/services/cart.service';
import { CurrencyService } from '../../shared/services/currency.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  private cartService = inject(CartService);
  private currencyService = inject(CurrencyService);
  private router = inject(Router);
  
  promoCode = '';
  items$ = this.cartService.items$;
  totalPrice$ = this.cartService.totalPrice$;
  subtotal$ = this.totalPrice$;
  tax$ = this.totalPrice$.pipe(map(price => price * 0.2));
  finalTotal$ = this.totalPrice$.pipe(map(price => price * 1.2));
  selectedCurrency$ = this.currencyService.selectedCurrency$;

  formatPrice(price: number, currency: string): string {
    if (currency === 'XOF') {
      return `${price.toLocaleString('fr-FR')} FCFA`;
    }
    // Pour les autres devises, utiliser le format standard
    const formatted = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
    return formatted;
  }

  incrementQuantity(productId: number) {
    this.cartService.incrementQuantity(productId);
  }

  decrementQuantity(productId: number) {
    this.cartService.decrementQuantity(productId);
  }

  removeItem(productId: number) {
    this.cartService.removeItem(productId);
  }

  applyPromoCode() {
    // TODO: Implémenter la logique des codes promo
    console.log('Code promo:', this.promoCode);
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
}
