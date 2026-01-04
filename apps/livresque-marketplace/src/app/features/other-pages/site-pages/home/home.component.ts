import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ProductCard, ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { Book } from '../../../../shared/models/book.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = [
    'Romans', 'Science-fiction', 'Fantasy', 'Thriller', 'Romance', 
    'Biographies', 'Histoire', 'Développement personnel', 'Sciences', 'Jeunesse'
  ];

  constructor(private router: Router) {}

  // Navigation vers la boutique avec filtre de catégorie
  navigateToShopByCategory(category: string) {
    this.router.navigate(['/shop'], { queryParams: { category } });
  }

  // Navigation vers la boutique avec filtre de section spéciale
  navigateToShopBySection(section: string) {
    this.router.navigate(['/shop'], { queryParams: { section } });
  }

  // Produits en promotion
  promoProducts: ProductCard[] = [
    {
      id: 1,
      title: 'L\'Art de la Guerre',
      author: 'Sun Tzu',
      category: 'Stratégie',
      price: 6.90,
      originalPrice: 9.90,
      discountPercent: 30,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q'
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Dév. Personnel',
      price: 14.40,
      originalPrice: 18.00,
      discountPercent: 20,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8wE18Evj2UwxZkW8TWQueqGUaz4znQ0osxB68WOm3GRkzK-1uZeKNA6OaKrlb1GrGroHOH8afF8vy0yFUpjxvpiKxySWl4NKi1W5G772uBBLYDSABqMwVYAag8d2O1C45_agSE7XptG7sbE-AooxYrKsvm5aIStAqDAk0pOkIc1dhLBerabOozIgVk6N8w5YJs0OqO_dW8nnNhp1GK844Y3UU-YhV78425Q_EtC4-qDxAMWD4MgtLVyA-jeK-Y3L9ZFruAghmGLk'
    },
    {
      id: 3,
      title: 'Classique SF',
      category: 'Science-Fiction',
      price: 9.25,
      originalPrice: 18.50,
      discountPercent: 50,
      rating: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8'
    },
    {
      id: 4,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Histoire',
      price: 18.70,
      originalPrice: 22.00,
      discountPercent: 15,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA'
    },
    {
      id: 5,
      title: 'Design Systems',
      author: 'Alla Kholmatova',
      category: 'Design',
      price: 26.25,
      originalPrice: 35.00,
      discountPercent: 25,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzTdUmw0YB9UlRuUcwKC-Qo8NqH_4laoM7qX6eTLMgyKkbhBqVQ5M8q8Y49iWMnl_HENwzI2s1tqORTAk9yeT7SBicu22jP0zCVB5TrB0__cDQUu0_RFA0Kl2ZHi4exeYGDlBHXUE91YSyehHSVrOin51AkamrNCSAuL43qcLIqDGNjBgBIL_G-F-qedUKC80i1cUs3lmdQ9vO85nuqEBJ8Gs5NBWnT84Bns9R9KN6GXzSz8oVp8GUZgmUdxFjCD8Vk3CRrKBrTuU'
    }
  ];

  // Produits tendances
  trendingProducts: ProductCard[] = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Dév. Personnel',
      price: 14.99,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8wE18Evj2UwxZkW8TWQueqGUaz4znQ0osxB68WOm3GRkzK-1uZeKNA6OaKrlb1GrGroHOH8afF8vy0yFUpjxvpiKxySWl4NKi1W5G772uBBLYDSABqMwVYAag8d2O1C45_agSE7XptG7sbE-AooxYrKsvm5aIStAqDAk0pOkIc1dhLBerabOozIgVk6N8w5YJs0OqO_dW8nnNhp1GK844Y3UU-YhV78425Q_EtC4-qDxAMWD4MgtLVyA-jeK-Y3L9ZFruAghmGLk'
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Histoire',
      price: 22.00,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA',
      format: 'Broché'
    },
    {
      id: 3,
      title: 'La Forêt Sombre',
      author: 'Liu Cixin',
      category: 'Science-Fiction',
      price: 18.50,
      rating: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8'
    },
    {
      id: 4,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      category: 'Psychologie',
      price: 16.90,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzTdUmw0YB9UlRuUcwKC-Qo8NqH_4laoM7qX6eTLMgyKkbhBqVQ5M8q8Y49iWMnl_HENwzI2s1tqORTAk9yeT7SBicu22jP0zCVB5TrB0__cDQUu0_RFA0Kl2ZHi4exeYGDlBHXUE91YSyehHSVrOin51AkamrNCSAuL43qcLIqDGNjBgBIL_G-F-qedUKC80i1cUs3lmdQ9vO85nuqEBJ8Gs5NBWnT84Bns9R9KN6GXzSz8oVp8GUZgmUdxFjCD8Vk3CRrKBrTuU'
    },
    {
      id: 5,
      title: 'The 48 Laws of Power',
      author: 'Robert Greene',
      category: 'Stratégie',
      price: 19.99,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q',
      format: 'Ebook'
    },
    {
      id: 6,
      title: 'Deep Work',
      author: 'Cal Newport',
      category: 'Productivité',
      price: 15.50,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8wE18Evj2UwxZkW8TWQueqGUaz4znQ0osxB68WOm3GRkzK-1uZeKNA6OaKrlb1GrGroHOH8afF8vy0yFUpjxvpiKxySWl4NKi1W5G772uBBLYDSABqMwVYAag8d2O1C45_agSE7XptG7sbE-AooxYrKsvm5aIStAqDAk0pOkIc1dhLBerabOozIgVk6N8w5YJs0OqO_dW8nnNhp1GK844Y3UU-YhV78425Q_EtC4-qDxAMWD4MgtLVyA-jeK-Y3L9ZFruAghmGLk'
    },
    {
      id: 7,
      title: 'The Lean Startup',
      author: 'Eric Ries',
      category: 'Business',
      price: 17.99,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8'
    },
    {
      id: 8,
      title: 'Zero to One',
      author: 'Peter Thiel',
      category: 'Entrepreneuriat',
      price: 16.50,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzTdUmw0YB9UlRuUcwKC-Qo8NqH_4laoM7qX6eTLMgyKkbhBqVQ5M8q8Y49iWMnl_HENwzI2s1tqORTAk9yeT7SBicu22jP0zCVB5TrB0__cDQUu0_RFA0Kl2ZHi4exeYGDlBHXUE91YSyehHSVrOin51AkamrNCSAuL43qcLIqDGNjBgBIL_G-F-qedUKC80i1cUs3lmdQ9vO85nuqEBJ8Gs5NBWnT84Bns9R9KN6GXzSz8oVp8GUZgmUdxFjCD8Vk3CRrKBrTuU',
      format: 'Audio'
    }
  ];

  // Nouveautés
  newProducts: ProductCard[] = [
    {
      id: 9,
      title: 'Build',
      author: 'Tony Fadell',
      category: 'Design',
      price: 24.99,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q',
      badge: 'NOUVEAU'
    },
    {
      id: 10,
      title: 'Homo Deus',
      author: 'Yuval Noah Harari',
      category: 'Histoire',
      price: 21.50,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA',
      badge: 'NOUVEAU'
    },
    {
      id: 11,
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      category: 'UX Design',
      price: 18.99,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8',
      badge: 'NOUVEAU'
    },
    {
      id: 12,
      title: 'Can\'t Hurt Me',
      author: 'David Goggins',
      category: 'Motivation',
      price: 16.99,
      rating: 5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzTdUmw0YB9UlRuUcwKC-Qo8NqH_4laoM7qX6eTLMgyKkbhBqVQ5M8q8Y49iWMnl_HENwzI2s1tqORTAk9yeT7SBicu22jP0zCVB5TrB0__cDQUu0_RFA0Kl2ZHi4exeYGDlBHXUE91YSyehHSVrOin51AkamrNCSAuL43qcLIqDGNjBgBIL_G-F-qedUKC80i1cUs3lmdQ9vO85nuqEBJ8Gs5NBWnT84Bns9R9KN6GXzSz8oVp8GUZgmUdxFjCD8Vk3CRrKBrTuU',
      badge: 'NOUVEAU'
    }
  ];

  trendingBooks: Book[] = [
    {
      id: '1',
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      price: 12500,
      image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=400',
      rating: 5,
      reviewCount: 1250,
      badge: 'bestseller',
      inStock: true
    },
    {
      id: '2',
      title: 'Harry Potter à l\'école des sorciers',
      author: 'J.K. Rowling',
      price: 8500,
      image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400',
      rating: 5,
      reviewCount: 980,
      badge: 'bestseller',
      inStock: true
    },
    {
      id: '3',
      title: '1984',
      author: 'George Orwell',
      price: 7500,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      rating: 4,
      reviewCount: 756,
      inStock: true
    },
    {
      id: '4',
      title: 'Orgueil et Préjugés',
      author: 'Jane Austen',
      price: 6800,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
      rating: 5,
      reviewCount: 645,
      inStock: true
    }
  ];

  newBooks: Book[] = [
    {
      id: '5',
      title: 'La Stratégie du Colibri',
      author: 'Sophie Martin',
      price: 9500,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400',
      rating: 4,
      reviewCount: 89,
      badge: 'new',
      inStock: true
    },
    {
      id: '6',
      title: 'Les Ombres de Minuit',
      author: 'Alexandre Dubois',
      price: 11200,
      image: 'https://images.unsplash.com/photo-1580193483135-1781b667c9f7?w=400',
      rating: 5,
      reviewCount: 124,
      badge: 'new',
      inStock: true
    },
    {
      id: '7',
      title: 'Le Dernier Voyage',
      author: 'Marie Lefebvre',
      price: 8900,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      rating: 4,
      reviewCount: 67,
      badge: 'new',
      inStock: true
    },
    {
      id: '8',
      title: 'Chroniques du Futur',
      author: 'Thomas Bernard',
      price: 10500,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
      rating: 5,
      reviewCount: 156,
      badge: 'new',
      inStock: true
    }
  ];

  promoBooks: Book[] = [
    {
      id: '9',
      title: 'Guide du Développeur Python',
      author: 'Jean Dupont',
      price: 15000,
      originalPrice: 25000,
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400',
      rating: 5,
      reviewCount: 342,
      badge: 'promo',
      discount: 40,
      inStock: true
    },
    {
      id: '10',
      title: 'L\'Art de la Négociation',
      author: 'Claire Rousseau',
      price: 9000,
      originalPrice: 15000,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400',
      rating: 4,
      reviewCount: 187,
      badge: 'promo',
      discount: 40,
      inStock: true
    },
    {
      id: '11',
      title: 'Cuisine du Monde',
      author: 'Pierre Laurent',
      price: 12000,
      originalPrice: 20000,
      image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400',
      rating: 5,
      reviewCount: 234,
      badge: 'promo',
      discount: 40,
      inStock: true
    },
    {
      id: '12',
      title: 'Histoire de l\'Art Moderne',
      author: 'Sophie Moreau',
      price: 18000,
      originalPrice: 30000,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400',
      rating: 5,
      reviewCount: 298,
      badge: 'promo',
      discount: 40,
      inStock: true
    }
  ];

  features = [
    {
      icon: 'local_shipping',
      title: 'Livraison gratuite',
      description: 'À partir de 50 000 FCFA d\'achat'
    },
    {
      icon: 'verified_user',
      title: 'Paiement sécurisé',
      description: 'Transactions 100% sécurisées'
    },
    {
      icon: 'autorenew',
      title: 'Retours faciles',
      description: '14 jours pour changer d\'avis'
    },
    {
      icon: 'support_agent',
      title: 'Support 24/7',
      description: 'Assistance à tout moment'
    }
  ];

  testimonials = [
    {
      name: 'Aminata Diallo',
      rating: 5,
      comment: 'Excellent service ! Les livres sont arrivés rapidement et en parfait état. Je recommande vivement.',
      avatar: 'https://ui-avatars.com/api/?name=Aminata+Diallo&background=FF9F1C&color=fff'
    },
    {
      name: 'Mamadou Sow',
      rating: 5,
      comment: 'Large choix de livres et prix compétitifs. La plateforme est très facile à utiliser.',
      avatar: 'https://ui-avatars.com/api/?name=Mamadou+Sow&background=FF9F1C&color=fff'
    },
    {
      name: 'Fatoumata Traoré',
      rating: 4,
      comment: 'Très satisfaite de mon achat. Le service client est réactif et professionnel.',
      avatar: 'https://ui-avatars.com/api/?name=Fatoumata+Traore&background=FF9F1C&color=fff'
    }
  ];

  blogPosts = [
    {
      id: '1',
      title: 'Les 10 livres à lire absolument en 2024',
      excerpt: 'Découvrez notre sélection des romans incontournables de l\'année qui ont marqué la littérature...',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600',
      date: new Date('2024-01-15'),
      category: 'Littérature'
    },
    {
      id: '2',
      title: 'Comment créer sa bibliothèque idéale',
      excerpt: 'Nos conseils d\'experts pour organiser et développer votre collection de livres personnelle...',
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600',
      date: new Date('2024-01-10'),
      category: 'Conseils'
    },
    {
      id: '3',
      title: 'Interview : Rencontre avec Mariama Bâ',
      excerpt: 'Plongez dans l\'univers de cette auteure emblématique de la littérature africaine...',
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600',
      date: new Date('2024-01-05'),
      category: 'Interview'
    }
  ];
}
