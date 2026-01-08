import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Book {
  id?: number;
  title: string;
  author: string;
  cover: string;
  progress?: number;
  rating?: number;
  format: string;
  status?: string;
  purchaseDate?: string;
  category?: string;
}

@Component({
  selector: 'app-dashboard-library',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard-library.component.html',
  styleUrls: ['./dashboard-library.component.scss']
})
export class DashboardLibraryComponent {
  totalBooks = 34;
  readingGoal = 25;
  booksRead = 18;
  readingProgress = Math.round((this.booksRead / this.readingGoal) * 100);

  searchQuery = '';
  selectedFilter = 'all';
  selectedFormatFilter = 'all';
  selectedCategoryFilter = 'all';
  selectedSort = 'recent';
  viewMode: 'grid' | 'list' = 'grid';
  
  // Pagination
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 0;

  collections = [
    { label: 'Tous les livres', icon: 'grid_view', count: 34, active: true },
    { label: 'Favoris', icon: 'favorite', count: 8, active: false },
    { label: 'À lire plus tard', icon: 'bookmark', count: 12, active: false },
    { label: 'Terminés', icon: 'check_circle', count: 14, active: false }
  ];

  formats = [
    { label: 'Physiques', icon: 'book', value: 'book' },
    { label: 'Ebooks (PDF)', icon: 'tablet_mac', value: 'tablet_mac' },
    { label: 'Audiobooks', icon: 'headphones', value: 'headphones' }
  ];

  categories = [
    'Science-Fiction',
    'Fantasy',
    'Polar',
    'Romance',
    'Histoire',
    'Philosophie',
    'Développement personnel',
    'Biographie'
  ];

  readingBooks: Book[] = [
    {
      id: 1,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA',
      progress: 65,
      format: 'tablet_mac',
      category: 'Histoire',
      purchaseDate: '15 Oct 2023'
    },
    {
      id: 2,
      title: 'La Forêt Sombre',
      author: 'Liu Cixin',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8',
      progress: 12,
      format: 'book',
      category: 'Science-Fiction',
      purchaseDate: '28 Sept 2023'
    }
  ];

  allBooks: Book[] = [
    {
      id: 3,
      title: "L'Art de la Guerre",
      author: 'Sun Tzu',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q',
      rating: 4.5,
      format: 'book',
      category: 'Philosophie',
      purchaseDate: '10 Août 2023'
    },
    {
      id: 4,
      title: 'Dune',
      author: 'Frank Herbert',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbvRcRGQnHEH6A0xazN0k9Yq1JMIcbEBpl_b7whkd9NPGrn57P4fzXnTITCzSU2ktHCcHetuElJLoalPA4UG4vQsmgg-IhfiQv094XHZE0-u3JRrafhC5LoJkYc9kQLMjXMXvJ9cD9_aK9APiz5-wpGOCalXgmJwmsY2XR9JWsOV95xdeR_cka5MikySlI_h-PLv5of4hQJJ4XmJ1a9vSckYrrCjrONP4G2uSdTcyBGMIFdinfWxsyrMkR6YSP47Y7B7PMlW5Ww',
      format: 'tablet_mac',
      category: 'Science-Fiction',
      status: 'Nouveau',
      purchaseDate: '25 Déc 2023'
    },
    {
      id: 5,
      title: 'Fondation',
      author: 'Isaac Asimov',
      cover: 'https://picsum.photos/seed/fondation/300/450',
      rating: 4,
      format: 'book',
      category: 'Science-Fiction',
      status: 'Terminé',
      purchaseDate: '5 Mai 2023'
    },
    {
      id: 6,
      title: '1984',
      author: 'George Orwell',
      cover: 'https://picsum.photos/seed/1984/300/450',
      format: 'tablet_mac',
      category: 'Science-Fiction',
      status: 'À lire',
      purchaseDate: '12 Jan 2023'
    },
    {
      id: 7,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      cover: 'https://picsum.photos/seed/thinking/300/450',
      format: 'book',
      category: 'Développement personnel',
      status: 'Nouveau',
      purchaseDate: '1 Jan 2024'
    },
    {
      id: 8,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      cover: 'https://picsum.photos/seed/petitprince/300/450',
      format: 'book',
      category: 'Fantasy',
      rating: 5,
      status: 'Terminé',
      purchaseDate: '3 Mars 2023'
    },
    {
      id: 9,
      title: 'Harry Potter à l\'école des sorciers',
      author: 'J.K. Rowling',
      cover: 'https://picsum.photos/seed/harrypotter/300/450',
      format: 'tablet_mac',
      category: 'Fantasy',
      progress: 45,
      purchaseDate: '15 Avr 2023'
    },
    {
      id: 10,
      title: 'Les Misérables',
      author: 'Victor Hugo',
      cover: 'https://picsum.photos/seed/miserables/300/450',
      format: 'book',
      category: 'Histoire',
      rating: 4.8,
      status: 'Terminé',
      purchaseDate: '20 Fév 2023'
    },
    {
      id: 11,
      title: 'Le Seigneur des Anneaux',
      author: 'J.R.R. Tolkien',
      cover: 'https://picsum.photos/seed/lotr/300/450',
      format: 'headphones',
      category: 'Fantasy',
      progress: 30,
      purchaseDate: '8 Jun 2023'
    },
    {
      id: 12,
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: 'https://picsum.photos/seed/atomic/300/450',
      format: 'tablet_mac',
      category: 'Développement personnel',
      progress: 80,
      purchaseDate: '12 Nov 2023'
    },
    {
      id: 13,
      title: 'La Peste',
      author: 'Albert Camus',
      cover: 'https://picsum.photos/seed/lapeste/300/450',
      format: 'book',
      category: 'Philosophie',
      rating: 4.3,
      status: 'Terminé',
      purchaseDate: '5 Sep 2023'
    },
    {
      id: 14,
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      cover: 'https://picsum.photos/seed/stevejobs/300/450',
      format: 'headphones',
      category: 'Biographie',
      status: 'À lire',
      purchaseDate: '18 Déc 2023'
    }
  ];

  // Alias for template compatibility
  get books(): Book[] {
    return this.allBooks;
  }

  get filteredBooks(): Book[] {
    let filtered = [...this.allBooks];

    // Filter by search query
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
      );
    }

    // Filter by format
    if (this.selectedFormatFilter !== 'all') {
      filtered = filtered.filter(book => book.format === this.selectedFormatFilter);
    }

    // Filter by category
    if (this.selectedCategoryFilter !== 'all') {
      filtered = filtered.filter(book => book.category === this.selectedCategoryFilter);
    }

    // Sort
    if (this.selectedSort === 'title') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.selectedSort === 'author') {
      filtered.sort((a, b) => a.author.localeCompare(b.author));
    }

    // Calculate total pages
    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);

    // Paginate
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    return filtered.slice(startIndex, endIndex);
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  readBook(bookId?: number): void {
    console.log('Opening book for reading:', bookId);
    // Implement book reading logic
  }

  downloadBook(bookId?: number): void {
    console.log('Downloading book:', bookId);
    // Implement book download logic
  }
}

