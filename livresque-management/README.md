# Livresque Management - Architecture Standalone

## ✨ Architecture Moderne

Cette application utilise **Standalone Components** - l'approche moderne d'Angular sans NgModules.

## 📁 Structure

```
src/app/
├── core/                      # Services, Guards, Interceptors, Models
│   ├── services/              # Services API, Auth
│   ├── guards/                # Route Guards (auth, role)
│   ├── interceptors/          # HTTP Interceptors
│   ├── models/                # Interfaces & Types
│   └── index.ts               # Barrel exports
│
├── shared/                    # Composants réutilisables
│   ├── components/            # DataTable, Forms, Charts
│   ├── directives/            # Directives personnalisées
│   ├── pipes/                 # Pipes personnalisés
│   └── index.ts               # Barrel exports
│
├── features/                  # Modules fonctionnels
│   ├── dashboard/             # Tableau de bord
│   ├── users/                 # Gestion utilisateurs
│   └── orders/                # Gestion commandes
│
├── app.ts                     # Root Component (standalone)
├── app.config.ts              # Configuration de l'application
├── app.routes.ts              # Routes de l'application
└── app.html                   # Template principal
```

## 🎯 Principes des Standalone Components

### Composant Standalone

```typescript
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  @Input() data: any[] = [];
  @Input() columns: Column[] = [];
}
```

### Routes avec Lazy Loading

```typescript
export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent),
    canActivate: [authGuard]
  }
];
```

## 🏗️ Génération de Code

```bash
# Composant
nx g @nx/angular:component data-table --project=livresque-management --standalone

# Service
nx g @nx/angular:service api --project=livresque-management

# Guard
nx g @nx/angular:guard role --project=livresque-management --functional
```

## 🚀 Commandes

```bash
nx serve livresque-management          # Dev
nx build livresque-management          # Build
nx build livresque-management --configuration=production  # Prod
```

## 🎨 Tailwind CSS

```html
<div class="bg-white shadow-md rounded-lg p-6">
  <h2 class="text-2xl font-bold mb-4">Dashboard</h2>
  <div class="grid grid-cols-3 gap-4">
    <!-- Cards -->
  </div>
</div>
```

## 📊 Fonctionnalités Backoffice

- ✅ Dashboard avec analytics
- ✅ Gestion des utilisateurs (CRUD)
- ✅ Gestion des commandes
- ✅ Authentification et autorisation
- ✅ Tables de données réutilisables
