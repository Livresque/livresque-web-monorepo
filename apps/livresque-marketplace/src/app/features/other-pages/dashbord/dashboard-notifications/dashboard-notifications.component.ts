import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Notification {
  id: number;
  type: 'order' | 'book' | 'system' | 'promo';
  icon: string;
  title: string;
  message: string;
  time: string;
  isRead: boolean;
  iconColor: string;
}

@Component({
  selector: 'app-dashboard-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-notifications.component.html',
  styleUrls: ['./dashboard-notifications.component.scss']
})
export class DashboardNotificationsComponent {
  selectedFilter = 'all';
  currentPage = 1;
  itemsPerPage = 5;
  totalPages = 0;

  notifications: Notification[] = [
    {
      id: 1,
      type: 'order',
      icon: 'local_shipping',
      title: 'Commande livrée',
      message: 'Votre commande #ORD-2547 a été livrée avec succès',
      time: 'Il y a 2 heures',
      isRead: false,
      iconColor: 'text-green-400'
    },
    {
      id: 2,
      type: 'book',
      icon: 'auto_stories',
      title: 'Nouveau livre disponible',
      message: 'Le livre "Dune: Part Two" est maintenant disponible dans votre bibliothèque',
      time: 'Il y a 5 heures',
      isRead: false,
      iconColor: 'text-primary'
    },
    {
      id: 3,
      type: 'promo',
      icon: 'local_offer',
      title: 'Promotion spéciale',
      message: '-30% sur tous les livres de science-fiction ce week-end',
      time: 'Il y a 1 jour',
      isRead: true,
      iconColor: 'text-purple-400'
    },
    {
      id: 4,
      type: 'order',
      icon: 'shopping_bag',
      title: 'Commande confirmée',
      message: 'Votre commande #ORD-2546 a été confirmée et est en préparation',
      time: 'Il y a 2 jours',
      isRead: true,
      iconColor: 'text-blue-400'
    },
    {
      id: 5,
      type: 'system',
      icon: 'info',
      title: 'Mise à jour du système',
      message: 'Une nouvelle version de l\'application est disponible',
      time: 'Il y a 3 jours',
      isRead: true,
      iconColor: 'text-gray-400'
    },
    {
      id: 6,
      type: 'book',
      icon: 'bookmark',
      title: 'Liste de souhaits',
      message: 'Un livre de votre liste de souhaits est maintenant en promotion',
      time: 'Il y a 4 jours',
      isRead: true,
      iconColor: 'text-primary'
    },
    {
      id: 7,
      type: 'order',
      icon: 'receipt_long',
      title: 'Facture disponible',
      message: 'La facture de votre commande #ORD-2545 est disponible',
      time: 'Il y a 5 jours',
      isRead: true,
      iconColor: 'text-blue-400'
    },
    {
      id: 8,
      type: 'promo',
      icon: 'celebration',
      title: 'Offre exclusive',
      message: 'Profitez de la livraison gratuite sur votre prochaine commande',
      time: 'Il y a 1 semaine',
      isRead: true,
      iconColor: 'text-purple-400'
    }
  ];

  get filteredNotifications(): Notification[] {
    let filtered = [...this.notifications];

    if (this.selectedFilter === 'unread') {
      filtered = filtered.filter(n => !n.isRead);
    } else if (this.selectedFilter === 'read') {
      filtered = filtered.filter(n => n.isRead);
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return filtered.slice(startIndex, endIndex);
  }

  get unreadCount(): number {
    return this.notifications.filter(n => !n.isRead).length;
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

  markAsRead(notification: Notification): void {
    notification.isRead = true;
  }

  markAllAsRead(): void {
    this.notifications.forEach(n => n.isRead = true);
  }

  deleteNotification(id: number): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    // Adjust page if necessary
    if (this.filteredNotifications.length === 0 && this.currentPage > 1) {
      this.currentPage--;
    }
  }

  setFilter(filter: string): void {
    this.selectedFilter = filter;
    this.currentPage = 1;
  }
}
