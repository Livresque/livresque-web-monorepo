import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book!: Book;

  addToCart() {
    console.log('Add to cart:', this.book.id);
  }

  addToWishlist() {
    console.log('Add to wishlist:', this.book.id);
  }

  getBadgeLabel(): string {
    switch (this.book.badge) {
      case 'new': return 'Nouveau';
      case 'bestseller': return 'Best-seller';
      case 'promo': return `-${this.book.discount}%`;
      default: return '';
    }
  }

  getBadgeColor(): string {
    switch (this.book.badge) {
      case 'new': return 'bg-blue-500';
      case 'bestseller': return 'bg-primary';
      case 'promo': return 'bg-red-500';
      default: return '';
    }
  }

  getStars(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }
}
