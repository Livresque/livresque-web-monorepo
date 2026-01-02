# Livresque Marketplace - Architecture Standalone

## ✨ Architecture Moderne

Cette application utilise **Standalone Components** - l'approche moderne d'Angular sans NgModules.

## 📁 Structure

```
src/app/
├── core/                      # Services, Guards, Interceptors, Models
│   ├── services/              # Services API (ex: api.service.ts)
│   ├── guards/                # Route Guards (ex: auth.guard.ts)
│   ├── interceptors/          # HTTP Interceptors (ex: jwt.interceptor.ts)
│   ├── models/                # Interfaces & Types
│   └── index.ts               # Barrel exports
│
├── shared/                    # Composants réutilisables
│   ├── components/            # UI Components (Button, Card, etc.)
│   ├── directives/            # Directives personnalisées
│   ├── pipes/                 # Pipes personnalisés
│   └── index.ts               # Barrel exports
│
├── features/                  # Modules fonctionnels
│   ├── home/                  # Page d'accueil
│   └── products/              # Catalogue produits
│
├── app.ts                     # Root Component (standalone)
├── app.config.ts              # Configuration de l'application
├── app.config.server.ts       # Configuration SSR
├── app.routes.ts              # Routes de l'application
└── app.html                   # Template principal
```

## 🎯 Principes des Standalone Components

### Composant Standalone

```typescript
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MyOtherComponent],
  templateUrl: './my-component.html'
})
export class MyComponent {}
```

### Routes avec Lazy Loading

```typescript
export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component')
      .then(m => m.HomeComponent)
  }
];
```

## 🏗️ Génération de Code

```bash
# Composant
nx g @nx/angular:component my-component --project=livresque-marketplace --standalone

# Service
nx g @nx/angular:service my-service --project=livresque-marketplace

# Guard
nx g @nx/angular:guard auth --project=livresque-marketplace --functional
```

## 🌐 Server-Side Rendering (SSR)

✅ SSR activé pour le SEO et la performance

## 🚀 Commandes

```bash
nx serve livresque-marketplace         # Dev
nx build livresque-marketplace         # Build
nx build livresque-marketplace --configuration=production  # Prod
```

## 🎨 Tailwind CSS

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Ajouter au panier
</button>
```
