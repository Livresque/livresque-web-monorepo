import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ProductCard, ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  selectedCategories: string[] = [];
  selectedFormats: string[] = [];
  selectedLanguages: string[] = [];
  priceRange = { min: 0, max: 100 };
  sortBy = 'pertinence';

  products: ProductCard[] = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Dév. Personnel',
      price: 14.99,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8wE18Evj2UwxZkW8TWQueqGUaz4znQ0osxB68WOm3GRkzK-1uZeKNA6OaKrlb1GrGroHOH8afF8vy0yFUpjxvpiKxySWl4NKi1W5G772uBBLYDSABqMwVYAag8d2O1C45_agSE7XptG7sbE-AooxYrKsvm5aIStAqDAk0pOkIc1dhLBerabOozIgVk6N8w5YJs0OqO_dW8nnNhp1GK844Y3UU-YhV78425Q_EtC4-qDxAMWD4MgtLVyA-jeK-Y3L9ZFruAghmGLk',
      format: 'Ebook'
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Histoire',
      price: 22.00,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA',
      format: 'Broché',
      badge: 'Best-seller'
    },
    {
      id: 3,
      title: 'La Forêt Sombre',
      author: 'Liu Cixin',
      category: 'Science-Fiction',
      price: 18.50,
      rating: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8',
      format: 'Audio'
    },
    {
      id: 4,
      title: 'L\'Art de la Guerre',
      author: 'Sun Tzu',
      category: 'Stratégie',
      price: 6.90,
      originalPrice: 9.90,
      discountPercent: 30,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q',
      format: 'Ebook'
    }
  ];
}
