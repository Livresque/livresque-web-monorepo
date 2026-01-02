import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface ProductCard {
  id: number;
  title: string;
  author?: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  imageUrl: string;
  format?: 'Ebook' | 'Audio' | 'Broché';
  badge?: 'NOUVEAU' | 'Best-seller';
  isFavorite?: boolean;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: ProductCard;
  @Input() variant: 'default' | 'compact' = 'default';
  @Input() showAddToCart: boolean = true;
  @Input() showQuickView: boolean = true;

  getStarArray(): number[] {
    const fullStars = Math.floor(this.product.rating);
    const hasHalfStar = this.product.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return [
      ...Array(fullStars).fill(1),
      ...(hasHalfStar ? [0.5] : []),
      ...Array(emptyStars).fill(0)
    ];
  }

  getStarIcon(value: number): string {
    if (value === 1) return 'star';
    if (value === 0.5) return 'star_half';
    return 'star_border';
  }

  getStarClass(value: number): string {
    return value > 0 ? 'fill-current' : '';
  }

  toggleFavorite(): void {
    this.product.isFavorite = !this.product.isFavorite;
    // TODO: Implement favorite logic
  }

  addToCart(): void {
    // TODO: Implement add to cart logic
    console.log('Add to cart:', this.product);
  }

  quickView(): void {
    // TODO: Implement quick view logic
    console.log('Quick view:', this.product);
  }
}
