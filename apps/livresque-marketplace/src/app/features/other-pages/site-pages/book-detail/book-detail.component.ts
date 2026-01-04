import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProductCard } from '../../../../shared/components/product-card/product-card.component';
import { CartService } from '../../../../shared/services/cart.service';
import { CurrencyService } from '../../../../shared/services/currency.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  private currencyService = inject(CurrencyService);
  private cartService = inject(CartService);
  private router = inject(Router);
  
  quantity = 1;
  selectedFormat = 'epub';
  activeTab = 'description'; // Changé de 'resume' à 'description'
  
  // Prix des livres en différentes devises
  bookPrices = {
    main: {
      XOF: 13000,
      EUR: 19.90,
      USD: 21.50,
      GBP: 18.90
    },
    original: {
      XOF: 16250,
      EUR: 24.90,
      USD: 26.90,
      GBP: 23.50
    },
    suggestions: [
      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        prices: { XOF: 14300, EUR: 22.00, USD: 23.80, GBP: 20.50 }
      },
      {
        title: 'La Forêt Sombre',
        author: 'Liu Cixin',
        prices: { XOF: 12000, EUR: 18.50, USD: 20.00, GBP: 17.20 }
      },
      {
        title: "L'Art de la Guerre",
        author: 'Sun Tzu',
        prices: { XOF: 6400, EUR: 9.90, USD: 10.70, GBP: 9.20 }
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        prices: { XOF: 9700, EUR: 14.99, USD: 16.20, GBP: 13.90 }
      }
    ]
  };
  
  // Observable pour le prix principal
  currentPrice$: Observable<string> = this.currencyService.selectedCurrency$.pipe(
    map(currency => {
      const price = this.bookPrices.main[currency as keyof typeof this.bookPrices.main] || this.bookPrices.main.EUR;
      return this.formatPrice(price, currency);
    })
  );
  
  // Observable pour le prix original (barré)
  originalPrice$: Observable<string> = this.currencyService.selectedCurrency$.pipe(
    map(currency => {
      const price = this.bookPrices.original[currency as keyof typeof this.bookPrices.original] || this.bookPrices.original.EUR;
      return this.formatPrice(price, currency);
    })
  );
  
  // Book details principal
  book: ProductCard = {
    id: 1,
    title: "L'Ombre du vent",
    author: 'Carlos Ruiz Zafón',
    category: 'Fiction littéraire',
    price: 19.90,
    rating: 4.9,
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
  
  getSuggestionPrice(index: number): Observable<string> {
    return this.currencyService.selectedCurrency$.pipe(
      map(currency => {
        const suggestion = this.bookPrices.suggestions[index];
        if (!suggestion) return '';
        const price = suggestion.prices[currency as keyof typeof suggestion.prices] || suggestion.prices.EUR;
        return this.formatPrice(price, currency);
      })
    );
  }
  
  addToCart(): void {
    const currency = this.currencyService.getCurrentCurrency();
    const price = this.bookPrices.main[currency as keyof typeof this.bookPrices.main] || this.bookPrices.main.EUR;
    this.book.price = price;
    
    this.cartService.addItem(this.book);
  }
  
  // Méthode pour changer d'onglet
  switchTab(tab: string): void {
    this.activeTab = tab;
  }
  
  // Méthode pour naviguer vers la page preview avec l'ID du livre
  goToPreview(): void {
    this.router.navigate(['/book', this.book.id, 'preview']);
  }
  
  // Méthode pour acheter maintenant (ajouter au panier + redirection checkout)
  buyNow(): void {
    // Ajouter au panier d'abord
    this.addToCart();
    // Puis rediriger vers checkout
    this.router.navigate(['/checkout']);
  }
  
  // Méthode pour naviguer vers la page détail de l'auteur
  goToAuthorDetail(): void {
    // Navigation vers la page auteur avec l'ID ou le nom de l'auteur
    this.router.navigate(['/author', 'carlos-ruiz-zafon']);
  }
}
