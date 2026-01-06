import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardHeaderComponent } from "../components/dashboard-header/dashboard-header.component";

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
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
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, DashboardHeaderComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent {
  isSidebarOpen = true;

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

  
  menuItems: MenuItem[] = [
    { label: 'Tableau de bord', icon: 'dashboard', route: '/dashboard' },
    { label: 'Ma Bibliothèque', icon: 'auto_stories', route: '/dashboard/library', badge: 12 },
    { label: 'Mes Favoris', icon: 'favorite', route: '/dashboard/favorites' },
    { label: 'Mes Commandes', icon: 'shopping_bag', route: '/dashboard/orders' },
    { label: 'Mon Profil', icon: 'person', route: '/dashboard/profile' },
    { label: 'Support', icon: 'support_agent', route: '/support' },
  ];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Logique de déconnexion
    console.log('Déconnexion');
  }
}
