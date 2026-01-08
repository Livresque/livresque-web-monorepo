import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Order {
  id: string;
  date: string;
  status: string;
  statusColor: 'green' | 'gray' | 'blue' | 'red';
  items: string;
  total: string;
  bookCovers: string[];
}

@Component({
  selector: 'app-dashboard-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-orders.component.html',
  styleUrls: ['./dashboard-orders.component.scss']
})
export class DashboardOrdersComponent {
  searchQuery = '';
  selectedStatus = 'all';
  selectedDateFilter = 'all';
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = 0;

  orders: Order[] = [
    { id: '#ORD-2547', date: '15 Déc 2025', items: '3 articles', total: '45.97 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8', 'https://picsum.photos/seed/1984/300/450', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbvRcRGQnHEH6A0xazN0k9Yq1JMIcbEBpl_b7whkd9NPGrn57P4fzXnTITCzSU2ktHCcHetuElJLoalPA4UG4vQsmgg-IhfiQv094XHZE0-u3JRrafhC5LoJkYc9kQLMjXMXvJ9cD9_aK9APiz5-wpGOCalXgmJwmsY2XR9JWsOV95xdeR_cka5MikySlI_h-PLv5of4hQJJ4XmJ1a9vSckYrrCjrONP4G2uSdTcyBGMIFdinfWxsyrMkR6YSP47Y7B7PMlW5Ww'] },
    { id: '#ORD-2546', date: '10 Déc 2025', items: '1 article', total: '19.99 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/fondation/300/450'] },
    { id: '#ORD-2545', date: '5 Déc 2025', items: '2 articles', total: '35.98 €', status: 'En cours', statusColor: 'blue', bookCovers: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA', 'https://picsum.photos/seed/petitprince/300/450'] },
    { id: '#ORD-2544', date: '1 Déc 2025', items: '1 article', total: '15.99 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/harrypotter/300/450'] },
    { id: '#ORD-2543', date: '28 Nov 2025', items: '4 articles', total: '89.96 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/miserables/300/450', 'https://picsum.photos/seed/lotr/300/450', 'https://picsum.photos/seed/atomic/300/450', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q'] },
    { id: '#ORD-2542', date: '20 Nov 2025', items: '2 articles', total: '29.98 €', status: 'Annulée', statusColor: 'red', bookCovers: ['https://picsum.photos/seed/lapeste/300/450', 'https://picsum.photos/seed/stevejobs/300/450'] },
    { id: '#ORD-2541', date: '15 Nov 2025', items: '1 article', total: '24.99 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/thinking/300/450'] },
    { id: '#ORD-2540', date: '10 Nov 2025', items: '3 articles', total: '54.97 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbvRcRGQnHEH6A0xazN0k9Yq1JMIcbEBpl_b7whkd9NPGrn57P4fzXnTITCzSU2ktHCcHetuElJLoalPA4UG4vQsmgg-IhfiQv094XHZE0-u3JRrafhC5LoJkYc9kQLMjXMXvJ9cD9_aK9APiz5-wpGOCalXgmJwmsY2XR9JWsOV95xdeR_cka5MikySlI_h-PLv5of4hQJJ4XmJ1a9vSckYrrCjrONP4G2uSdTcyBGMIFdinfWxsyrMkR6YSP47Y7B7PMlW5Ww', 'https://picsum.photos/seed/1984/300/450', 'https://picsum.photos/seed/fondation/300/450'] },
    { id: '#ORD-2539', date: '5 Nov 2025', items: '2 articles', total: '39.98 €', status: 'En cours', statusColor: 'blue', bookCovers: ['https://picsum.photos/seed/petitprince/300/450', 'https://picsum.photos/seed/harrypotter/300/450'] },
    { id: '#ORD-2538', date: '1 Nov 2025', items: '1 article', total: '12.99 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q'] },
    { id: '#ORD-2537', date: '28 Oct 2025', items: '2 articles', total: '33.98 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA', 'https://picsum.photos/seed/miserables/300/450'] },
    { id: '#ORD-2536', date: '25 Oct 2025', items: '1 article', total: '18.99 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/lotr/300/450'] },
    { id: '#ORD-2535', date: '20 Oct 2025', items: '3 articles', total: '67.97 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/atomic/300/450', 'https://picsum.photos/seed/lapeste/300/450', 'https://picsum.photos/seed/stevejobs/300/450'] },
    { id: '#ORD-2534', date: '15 Oct 2025', items: '1 article', total: '22.99 €', status: 'En cours', statusColor: 'blue', bookCovers: ['https://picsum.photos/seed/thinking/300/450'] },
    { id: '#ORD-2533', date: '10 Oct 2025', items: '2 articles', total: '41.98 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8', 'https://picsum.photos/seed/fondation/300/450'] },
    { id: '#ORD-2532', date: '5 Oct 2025', items: '4 articles', total: '95.96 €', status: 'Livrée', statusColor: 'green', bookCovers: ['https://picsum.photos/seed/petitprince/300/450', 'https://picsum.photos/seed/harrypotter/300/450', 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q', 'https://picsum.photos/seed/1984/300/450'] }
  ]

  get filteredOrders(): Order[] {
    let filtered = [...this.orders];

    // Filter by search query
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(query) || 
        order.items.toLowerCase().includes(query)
      );
    }

    // Filter by status
    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(order => order.status === this.selectedStatus);
    }

    // Filter by date range
    if (this.selectedDateFilter !== 'all') {
      const now = new Date();
      filtered = filtered.filter(order => {
        const orderDate = this.parseDate(order.date);
        if (this.selectedDateFilter === '7days') {
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return orderDate >= sevenDaysAgo;
        } else if (this.selectedDateFilter === '30days') {
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return orderDate >= thirtyDaysAgo;
        } else if (this.selectedDateFilter === '90days') {
          const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
          return orderDate >= ninetyDaysAgo;
        }
        return true;
      });
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  private parseDate(dateStr: string): Date {
    const months: { [key: string]: number } = {
      'Jan': 0, 'Fév': 1, 'Mars': 2, 'Avr': 3, 'Mai': 4, 'Jun': 5,
      'Juil': 6, 'Août': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Déc': 11
    };
    const parts = dateStr.split(' ');
    const day = parseInt(parts[0]);
    const month = months[parts[1]];
    const year = parseInt(parts[2]);
    return new Date(year, month, day);
  }

  get totalFilteredOrders(): number {
    let filtered = [...this.orders];

    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(order => 
        order.id.toLowerCase().includes(query) || 
        order.items.toLowerCase().includes(query)
      );
    }

    if (this.selectedStatus !== 'all') {
      filtered = filtered.filter(order => order.status === this.selectedStatus);
    }

    if (this.selectedDateFilter !== 'all') {
      const now = new Date();
      filtered = filtered.filter(order => {
        const orderDate = this.parseDate(order.date);
        if (this.selectedDateFilter === '7days') {
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return orderDate >= sevenDaysAgo;
        } else if (this.selectedDateFilter === '30days') {
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return orderDate >= thirtyDaysAgo;
        } else if (this.selectedDateFilter === '90days') {
          const ninetyDaysAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
          return orderDate >= ninetyDaysAgo;
        }
        return true;
      });
    }

    return filtered.length;
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
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
}
