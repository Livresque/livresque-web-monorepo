import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ProductCard } from '../../shared/components/product-card/product-card.component';
import { CartService } from '../../shared/services/cart.service';
import { CurrencyService } from '../../shared/services/currency.service';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  private currencyService = inject(CurrencyService);
  private cartService = inject(CartService);
  
  currentPage = 1;
  totalPages = 25;
  fontSize = 16;
  theme = 'dark';
  
  // Prix du livre en différentes devises
  bookPrice = {
    XOF: 13000,
    EUR: 19.90,
    USD: 21.50,
    GBP: 18.90
  };
  
  // Observable pour le prix réactif
  currentPrice$: Observable<string> = this.currencyService.selectedCurrency$.pipe(
    map(currency => {
      const price = this.bookPrice[currency as keyof typeof this.bookPrice] || this.bookPrice.EUR;
      this.book.price = price; // Mettre à jour le prix dans l'objet book
      return this.formatPrice(price, currency);
    })
  );
  
  // Book details
  book: ProductCard = {
    id: 1,
    title: "L'Ombre du vent",
    author: 'Carlos Ruiz Zafón',
    category: 'Fiction littéraire',
    price: 19.90, // Prix en EUR par défaut
    rating: 4.5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbvRcRGQnHEH6A0xazN0k9Yq1JMIcbEBpl_b7whkd9NPGrn57P4fzXnTITCzSU2ktHCcHetuElJLoalPA4UG4vQsmgg-IhfiQv094XHZE0-u3JRrafhC5LoJkYc9kQLMjXMXvJ9cD9_aK9APiz5-wpGOCalXgmJwmsY2XR9JWsOV95xdeR_cka5MikySlI_h-PLv5of4hQJJ4XmJ1a9vSckYrrCjrONP4G2uSdTcyBGMIFdinfWxsyrMkR6YSP47Y7B7PMlW5Ww',
    format: 'Broché' as const,
    badge: 'Best-seller' as const,
    isFavorite: false
  };

  constructor(private route: ActivatedRoute) {
  }
  
  formatPrice(price: number, currency: string): string {
    if (currency === 'XOF') {
      return `${price.toLocaleString('fr-FR')} FCFA`;
    } else if (currency === 'EUR') {
      return `${price.toFixed(2)} €`;
    } else if (currency === 'USD') {
      return `$${price.toFixed(2)}`;
    } else if (currency === 'GBP') {
      return `£${price.toFixed(2)}`;
    }
    return `${price} ${currency}`;
  }
  
  addToCart(): void {
    // Mettre à jour le prix selon la devise actuelle avant d'ajouter au panier
    const currency = this.currencyService.getCurrentCurrency();
    const price = this.bookPrice[currency as keyof typeof this.bookPrice] || this.bookPrice.EUR;
    this.book.price = price;
    
    this.cartService.addItem(this.book);
  }
}
