import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ProductCard, ProductCardComponent } from '../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ProductCardComponent, FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  selectedCategories: string[] = [];
  selectedFormats: string[] = [];
  selectedLanguages: string[] = [];
  selectedRating: number = 0;
  priceRange = { min: 0, max: 100 };
  sortBy = 'popularite';
  
  // Titre dynamique de la page
  pageTitle = 'La Boutique';
  
  // Données pour les filtres
  categories = [
    { id: 'romans', name: 'Roman & Fiction', icon: 'menu_book' },
    { id: 'education', name: 'Éducation', icon: 'school' },
    { id: 'business', name: 'Business', icon: 'trending_up' },
    { id: 'dev-personnel', name: 'Dév. Personnel', icon: 'psychology' },
    { id: 'jeunesse', name: 'Jeunesse', icon: 'child_care' },
    { id: 'science-fiction', name: 'Science-Fiction', icon: 'science' },
    { id: 'thriller', name: 'Thriller & Policier', icon: 'detective' },
    { id: 'histoire', name: 'Histoire', icon: 'history_edu' },
    { id: 'strategie', name: 'Stratégie', icon: 'military_tech' }
  ];
  
  formats = [
    { id: 'ebook', name: 'Ebook (EPUB/PDF)' },
    { id: 'audio', name: 'Livre Audio' },
    { id: 'broche', name: 'Papier (Broché)' }
  ];

  allProducts: ProductCard[] = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'dev-personnel',
      price: 14.99,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8wE18Evj2UwxZkW8TWQueqGUaz4znQ0osxB68WOm3GRkzK-1uZeKNA6OaKrlb1GrGroHOH8afF8vy0yFUpjxvpiKxySWl4NKi1W5G772uBBLYDSABqMwVYAag8d2O1C45_agSE7XptG7sbE-AooxYrKsvm5aIStAqDAk0pOkIc1dhLBerabOozIgVk6N8w5YJs0OqO_dW8nnNhp1GK844Y3UU-YhV78425Q_EtC4-qDxAMWD4MgtLVyA-jeK-Y3L9ZFruAghmGLk',
      format: 'Ebook',
      badge: 'NOUVEAU'
    },
    {
      id: 2,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'histoire',
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
      category: 'science-fiction',
      price: 18.50,
      rating: 4,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8',
      format: 'Audio'
    },
    {
      id: 4,
      title: 'L\'Art de la Guerre',
      author: 'Sun Tzu',
      category: 'strategie',
      price: 6.90,
      originalPrice: 9.90,
      discountPercent: 30,
      rating: 4.5,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q',
      format: 'Ebook'
    },
    {
      id: 5,
      title: 'L\'Ombre du Vent',
      author: 'Carlos Ruiz Zafón',
      category: 'romans',
      price: 19.90,
      originalPrice: 24.90,
      discountPercent: 20,
      rating: 4.9,
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbvRcRGQnHEH6A0xazN0k9Yq1JMIcbEBpl_b7whkd9NPGrn57P4fzXnTITCzSU2ktHCcHetuElJLoalPA4UG4vQsmgg-IhfiQv094XHZE0-u3JRrafhC5LoJkYc9kQLMjXMXvJ9cD9_aK9APiz5-wpGOCalXgmJwmsY2XR9JWsOV95xdeR_cka5MikySlI_h-PLv5of4hQJJ4XmJ1a9vSckYrrCjrONP4G2uSdTcyBGMIFdinfWxsyrMkR6YSP47Y7B7PMlW5Ww',
      format: 'Broché',
      badge: 'Best-seller'
    }
  ];
  
  // Produits filtrés
  products: ProductCard[] = [];
  
  ngOnInit() {
    // Lire les paramètres de navigation
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        // Normaliser le paramètre de catégorie pour correspondre aux IDs
        const categoryParam = params['category'].toLowerCase();
        
        // Trouver la catégorie correspondante
        const categoryInfo = this.categories.find(cat => cat.id === categoryParam);
        
        if (categoryInfo) {
          this.selectedCategories = [categoryInfo.id];
          this.pageTitle = `La Boutique - ${categoryInfo.name}`;
        } else {
          // Fallback: essayer de mapper les noms communs
          const categoryMapping: {[key: string]: string} = {
            'education': 'education',
            'éducation': 'education',
            'romans': 'romans',
            'roman': 'romans',
            'business': 'business',
            'dev-personnel': 'dev-personnel',
            'développement personnel': 'dev-personnel',
            'jeunesse': 'jeunesse',
            'science-fiction': 'science-fiction',
            'thriller': 'thriller',
            'histoire': 'histoire',
            'strategie': 'strategie',
            'stratégie': 'strategie'
          };
          
          const mappedCategory = categoryMapping[categoryParam];
          if (mappedCategory) {
            const foundCategory = this.categories.find(cat => cat.id === mappedCategory);
            if (foundCategory) {
              this.selectedCategories = [foundCategory.id];
              this.pageTitle = `La Boutique - ${foundCategory.name}`;
            }
          }
        }
      } else if (params['section']) {
        this.pageTitle = `La Boutique - ${this.getSectionTitle(params['section'])}`;
        this.applySpecialFilter(params['section']);
      } else {
        this.pageTitle = 'La Boutique';
        // Réinitialiser les filtres si pas de paramètres
        this.selectedCategories = [];
        this.selectedFormats = [];
        this.selectedRating = 0;
      }
      
      if (params['minPrice']) this.priceRange.min = +params['minPrice'];
      if (params['maxPrice']) this.priceRange.max = +params['maxPrice'];
      if (params['rating']) this.selectedRating = +params['rating'];
      if (params['format']) this.selectedFormats = [params['format']];
      
      this.applyFilters();
    });
  }
  
  getSectionTitle(section: string): string {
    switch(section) {
      case 'tendances': return 'Tendances du moment';
      case 'nouveautes': return 'Nouveautés';
      case 'promotions': return 'Promotions';
      default: return 'La Boutique';
    }
  }
  
  applySpecialFilter(section: string) {
    // Réinitialiser les filtres pour les sections spéciales
    this.selectedCategories = [];
    this.selectedFormats = [];
    this.selectedRating = 0;
  }
  
  toggleCategory(categoryId: string) {
    const index = this.selectedCategories.indexOf(categoryId);
    if (index > -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(categoryId);
    }
    this.applyFilters();
  }
  
  toggleFormat(formatId: string) {
    const index = this.selectedFormats.indexOf(formatId);
    if (index > -1) {
      this.selectedFormats.splice(index, 1);
    } else {
      this.selectedFormats.push(formatId);
    }
    this.applyFilters();
  }
  
  setRatingFilter(rating: number) {
    this.selectedRating = rating;
    this.applyFilters();
  }
  
  applyPriceFilter() {
    this.applyFilters();
  }
  
  
  applyFilters() {
    let filtered = [...this.allProducts];
    
    // Vérifier si c'est une section spéciale
    const currentSection = this.route.snapshot.queryParams['section'];
    
    if (currentSection) {
      // Filtrer par section spéciale
      switch(currentSection) {
        case 'tendances':
          // Produits avec badge "Best-seller" ou note élevée
          filtered = filtered.filter(product => 
            product.badge === 'Best-seller' || product.rating >= 4.5
          );
          break;
        case 'nouveautes':
          // Produits avec badge "NOUVEAU" ou récents (fictif : id élevé)
          filtered = filtered.filter(product => 
            product.badge === 'NOUVEAU' || product.id >= 3
          );
          break;
        case 'promotions':
          // Produits avec réduction
          filtered = filtered.filter(product => 
            product.originalPrice && product.originalPrice > product.price
          );
          break;
      }
    } else {
      // Filtre par catégorie (uniquement si pas de section spéciale)
      if (this.selectedCategories.length > 0) {
        filtered = filtered.filter(product => 
          this.selectedCategories.includes(product.category)
        );
      }
    }
    
    // Filtre par format
    if (this.selectedFormats.length > 0) {
      filtered = filtered.filter(product => {
        const productFormat = product.format?.toLowerCase();
        return this.selectedFormats.some(format => {
          if (format === 'ebook') return productFormat === 'ebook';
          if (format === 'audio') return productFormat === 'audio';
          if (format === 'broche') return productFormat === 'broché';
          return false;
        });
      });
    }
    
    // Filtre par prix
    filtered = filtered.filter(product => 
      product.price >= this.priceRange.min && product.price <= this.priceRange.max
    );
    
    // Filtre par note
    if (this.selectedRating > 0) {
      filtered = filtered.filter(product => product.rating >= this.selectedRating);
    }
    
    // Tri
    filtered = this.sortProducts(filtered);
    
    this.products = filtered;
  }
  
  sortProducts(products: ProductCard[]): ProductCard[] {
    switch(this.sortBy) {
      case 'prix-croissant':
        return products.sort((a, b) => a.price - b.price);
      case 'prix-decroissant':
        return products.sort((a, b) => b.price - a.price);
      case 'note':
        return products.sort((a, b) => b.rating - a.rating);
      case 'nouveautes':
        return products.sort((a, b) => (b.badge === 'NOUVEAU' ? 1 : 0) - (a.badge === 'NOUVEAU' ? 1 : 0));
      default: // popularité
        return products.sort((a, b) => b.rating - a.rating);
    }
  }
  
  onSortChange() {
    this.applyFilters();
  }
  
  isCategorySelected(categoryId: string): boolean {
    return this.selectedCategories.includes(categoryId);
  }
  
  isFormatSelected(formatId: string): boolean {
    return this.selectedFormats.includes(formatId);
  }
  
  hasActiveFilters(): boolean {
    return this.selectedCategories.length > 0 || 
           this.selectedFormats.length > 0 || 
           this.selectedRating > 0 || 
           this.priceRange.min > 0 || 
           this.priceRange.max < 100;
  }
  
  clearAllFilters(): void {
    this.selectedCategories = [];
    this.selectedFormats = [];
    this.selectedRating = 0;
    this.priceRange = { min: 0, max: 100 };
    this.pageTitle = 'La Boutique';
    
    // Supprimer les paramètres de l'URL et appliquer les filtres
    this.router.navigate(['/shop'], { queryParams: {} }).then(() => {
      this.applyFilters();
    });
  }
}
