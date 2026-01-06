import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardHeaderComponent } from '../components/dashboard-header/dashboard-header.component';

interface StatCard {
  label: string;
  value: string | number;
  icon: string;
  description: string;
}

interface ReadingBook {
  title: string;
  author: string;
  cover: string;
  progress: number;
  lastRead: string;
}

interface Order {
  id: string;
  date: string;
  items: string;
  total: string;
  status: string;
  statusColor: string;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  registeredDate: string;
  lastLogin: string;
  clientId: string;
  preferences: string[];
  avatar: string;
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterLink, DashboardHeaderComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {
  userProfile: UserProfile = {
    name: 'Sophie Martin',
    email: 'sophie.martin@example.com',
    phone: '+33 6 12 34 56 78',
    address: '15 Rue de la Paix<br/>75002 Paris, France',
    registeredDate: '12 Jan 2023',
    lastLogin: 'Hier, 14:30',
    clientId: '#C-8921',
    preferences: ['Science-Fiction', 'Polar', 'Audiobooks'],
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCatPHavQC0yAzGjVKAriE297bCwC40Dw2Wnn9e20DAxA2jwog8SnQiZveWBYrU8i2W_F8xiqcDkPwZ_Xlssd6zr5CecEKVGMwWzSSGcV_ZvqCtjLo7YWBcWRe-qvHtwsFc1Ng2XjPFGPKprTxIqOx_KtyOqW0d1b8kOKzru2R5fOQx2cyYJM0WXcB8DUz2Cg6GVR209t6VE3zMh-eA9FwuxYZ3xVvdRkfTISa9spkQi0WClJOOxYs6bpr_D2WFzYWjYlBUSlgScEk'
  };

  stats: StatCard[] = [
    {
      label: 'Commandes Totales',
      value: 24,
      icon: 'shopping_bag',
      description: '+2 ce mois'
    },
    {
      label: 'Montant Total',
      value: '482,50 €',
      icon: 'payments',
      description: 'Panier moyen: 20,10 €'
    },
    {
      label: 'Bibliothèque',
      value: '31 Livres',
      icon: 'library_books',
      description: '3 en cours de lecture'
    }
  ];

  readingBooks: ReadingBook[] = [
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrZPkWSt4Jp8DoxCZo_0aHdPGLTI4tf2m71NzHMfBfVMwtpdECkoCGIgrc27gnjHimUnIiLEfspu2o_39xiOyEJeRF0kP78X2Zg6L8PYw-ZQDHS2pHdxnTvo7UKepwgsJWaARyTitKWWwIea-iK74YhL6GgQg3HVasbkwPjEn4LIYvRrPAN0rfawMnJ1OEwzr2bZYQqcTktLnWS7y2G7UQFu-uzDG2Aa28TY7tZwqGBwWvqsvJPYQ2beS41-IZW2dWVNYmoZcWgCA',
      progress: 65,
      lastRead: 'Hier'
    },
    {
      title: 'La Forêt Sombre',
      author: 'Liu Cixin',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTGG4qb_3KpOrGAdSxl7IBZjlp8e3jIwFrH4TFqP16ECt6_cXWdhsu3FspRxLDoul0PagphMx0vKlu82wNvH3Xsj36j2xnPZ4t3TUNfB7G1mKXDSruG8nL3Jzdw6hT1VPpuVOHcT1kKS3S9471nvavvXdOTJyr0KCwIWoKgA4jJh4WFVzlrpGKeQIJdVwrtT-FK6ms2vQGAtSJUf6KpWisOsD40DTxRZWQ5auFKhWK1uDxnCZmYu3cYHMWvvTZX4PhNS44yAAYVI8',
      progress: 12,
      lastRead: 'Il y a 3 jours'
    },
    {
      title: "L'Art de la Guerre",
      author: 'Sun Tzu',
      cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9FzgYfG1yvTrQaWLfxbmZYPNOThk5ZN3c0FpqU-EDKS4D6E-z_HmKvUrxH_hgtqAG66ldXlIdGgE9GFoWTzsBbNzTMXCl9UeYfx8QUVXkdxzMvR-qhHIqtKVk0j7vENVyE-kAEb3eReNSwLZ0-RvfbA4JcZZ0O2yI_XOiDEKIbXdBSLUZK_toDUe7g494WzcLlruGudLFSB1q6DXYF0E6Nkl3vIHl1uxyp1SdHjnnO3LPw0jYg7z8RId2nO3ukE0l5IfV9CN67_Q',
      progress: 0,
      lastRead: 'Acheté le 10 Oct'
    }
  ];

  recentOrders: Order[] = [
    {
      id: '#ORD-7829',
      date: '15 Oct 2023',
      items: '2 livres (Sapiens...)',
      total: '42,50 €',
      status: 'Livrée',
      statusColor: 'green'
    },
    {
      id: '#ORD-7650',
      date: '28 Sept 2023',
      items: '1 livre (Design...)',
      total: '35,00 €',
      status: 'Livrée',
      statusColor: 'green'
    },
    {
      id: '#ORD-7112',
      date: '10 Août 2023',
      items: '3 livres (Pack SF)',
      total: '55,90 €',
      status: 'Terminée',
      statusColor: 'gray'
    }
  ];
}
