# 🎉 Livresque - Monorepo NX avec Standalone Components

Monorepo NX moderne pour le projet Livresque avec deux applications Angular utilisant l'architecture **Standalone Components**.

## 🚀 Applications

### 🛒 livresque-marketplace
Application publique de marketplace avec **SSR** (Server-Side Rendering).

- ✅ **Standalone Components**
- ✅ **SSR** pour le SEO
- ✅ **Tailwind CSS** + SCSS
- ✅ **Angular 21**
- 🎯 Features: Home, Products

### 🔧 livresque-management  
Application de gestion backoffice.

- ✅ **Standalone Components**
- ✅ **Tailwind CSS** + SCSS
- ✅ **Angular 21**
- 🎯 Features: Dashboard, Users, Orders

## ✨ Architecture Standalone

### Pourquoi Standalone ?

- 🚀 **Plus simple**: Pas de NgModules, moins de boilerplate
- ⚡ **Plus performant**: Tree-shaking optimisé
- 🎯 **Moderne**: Approche recommandée par Angular
- 📦 **Modulaire**: Dépendances explicites

### Structure

```
app/
├── core/              # Services, Guards, Interceptors (providedIn: 'root')
├── shared/            # Composants, Directives, Pipes réutilisables
├── features/          # Features avec lazy-loading
├── app.ts             # Root component (standalone)
├── app.config.ts      # Configuration providers
└── app.routes.ts      # Routes avec lazy loading
```

## 🏗️ Démarrage Rapide

### Installation

```bash
cd livresque
npm install
```

### Lancer les applications

```bash
# Marketplace (SSR) - http://localhost:4200
npm run start:marketplace

# Management - http://localhost:4201
npm run start:management

# Les deux en parallèle
npm run start:all
```

### Build de production

```bash
npm run build:prod
```

## 📦 Scripts NPM

| Commande | Description |
|----------|-------------|
| `npm run start:marketplace` | Lance marketplace en dev |
| `npm run start:management` | Lance management en dev |
| `npm run start:all` | Lance les deux apps |
| `npm run build:prod` | Build production |
| `npm run test:all` | Lance tous les tests |
| `npm run lint:all` | Lint toutes les apps |
| `npm run graph` | Visualise le graphe NX |

## 🧩 Créer des Composants

### Composant Standalone

```bash
nx g @nx/angular:component my-component \
  --project=livresque-marketplace \
  --path=livresque-marketplace/src/app/shared/components \
  --standalone
```

### Service

```bash
nx g @nx/angular:service my-service \
  --project=livresque-marketplace \
  --path=livresque-marketplace/src/app/core/services
```

### Guard Fonctionnel

```bash
nx g @nx/angular:guard auth \
  --project=livresque-marketplace \
  --path=livresque-marketplace/src/app/core/guards \
  --functional
```

## 📝 Exemple de Code

### Composant Standalone

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white rounded-lg shadow-md p-4">
      <h3 class="text-xl font-bold">{{ product.name }}</h3>
      <p class="text-gray-600">{{ product.price | currency }}</p>
      <a [routerLink]="['/products', product.id]" 
         class="text-blue-500">
        Voir détails
      </a>
    </div>
  `
})
export class ProductCardComponent {
  @Input() product!: Product;
}
```

### Routes avec Lazy Loading

```typescript
// app.routes.ts
export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component')
      .then(m => m.ProductsComponent)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routes')
      .then(m => m.HOME_ROUTES)
  }
];
```

### Service avec Signals

```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);
  
  addItem(item: CartItem) {
    this.items.update(items => [...items, item]);
  }
  
  get total() {
    return this.items().reduce((sum, item) => sum + item.price, 0);
  }
}
```

### Guard Fonctionnel

```typescript
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@app/core';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.isAuthenticated();
};
```

## 🎨 Tailwind CSS

Configuration centralisée dans `tailwind.config.js`.

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Ajouter au panier
</button>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-4">Bienvenue</h1>
</div>
```

## 🛠️ Technologies

- **Framework**: Angular 21
- **Architecture**: Standalone Components
- **Monorepo**: NX 22
- **Styles**: Tailwind CSS 3 + SCSS
- **TypeScript**: 5.9
- **Bundler**: esbuild
- **SSR**: Angular SSR (marketplace uniquement)

## 📚 Documentation

- [Marketplace README](livresque-marketplace/README.md)
- [Management README](livresque-management/README.md)
- [Core (Services/Guards)](livresque-marketplace/src/app/core/README.md)
- [Shared (Components)](livresque-marketplace/src/app/shared/README.md)

## 🎯 Comparaison des Applications

| Caractéristique | Marketplace | Management |
|----------------|-------------|------------|
| **SSR** | ✅ Oui | ❌ Non |
| **Usage** | Public | Backoffice |
| **Features** | Home, Products | Dashboard, Users, Orders |
| **SEO** | ✅ Optimisé | ❌ N/A |

## 🔥 Avantages des Standalone Components

### Avant (NgModules)

```typescript
@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule, FormsModule],
  exports: [MyComponent]
})
export class SharedModule {}
```

### Maintenant (Standalone)

```typescript
@Component({
  selector: 'app-my',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class MyComponent {}
```

✅ **Plus simple, plus clair, plus maintenable!**

## 🚀 Commandes NX

```bash
# Visualiser le graphe
nx graph

# Lister les projets
nx show projects

# Voir les détails d'un projet
nx show project livresque-marketplace

# Linter
nx lint livresque-marketplace

# Tests
nx test livresque-marketplace

# Build ciblé
nx build livresque-marketplace --configuration=production
```

## 📖 Ressources

- [Angular Standalone](https://angular.dev/guide/components/importing)
- [Angular SSR](https://angular.dev/guide/ssr)
- [NX Documentation](https://nx.dev)
- [Tailwind CSS](https://tailwindcss.com)

## ✅ Statut du Projet

- ✅ Workspace NX configuré
- ✅ Applications en Standalone Components
- ✅ Tailwind CSS intégré
- ✅ SSR configuré (marketplace)
- ✅ Architecture modulaire (core/shared/features)
- ✅ Builds de production fonctionnels

---

**🎉 Projet prêt pour le développement avec l'architecture moderne d'Angular!**

*Créé avec NX 22.3.3, Angular 21.0.0, Tailwind CSS 3.4.0 et Standalone Components*
