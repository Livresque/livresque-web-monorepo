import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-[1600px] mx-auto">
      <h1 class="text-2xl sm:text-3xl font-bold text-white mb-8">Mes Favoris</h1>
      <div class="text-center py-16">
        <span class="material-symbols-outlined text-[64px] text-gray-600 empty mb-4">favorite</span>
        <p class="text-gray-400 mb-4">Vos livres favoris apparaîtront ici</p>
        <a routerLink="/shop" class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-background-dark font-bold hover:bg-white transition">
          <span class="material-symbols-outlined text-[20px] empty">shopping_bag</span>
          Découvrir des livres
        </a>
      </div>
    </div>
  `
})
export class DashboardFavoritesComponent {}
