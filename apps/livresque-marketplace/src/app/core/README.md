# Core - Services, Guards, Interceptors & Models

## 📂 Organisation

Le dossier `core/` contient tout le code singleton de l'application.

```
core/
├── services/         # Services injectables
├── guards/           # Guards de routing
├── interceptors/     # HTTP Interceptors
├── models/           # Types & Interfaces
└── index.ts          # Barrel exports
```

## 💉 Services

Les services sont des singletons (`providedIn: 'root'`).

### Exemple: API Service

```typescript
// services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }
}
```

### Exemple: Auth Service

```typescript
// services/auth.service.ts
import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = signal<User | null>(null);

  isAuthenticated(): boolean {
    return this.user() !== null;
  }

  login(email: string, password: string) {
    // Logique de connexion
  }
}
```

## 🛡️ Guards (Functional)

Les guards fonctionnels sont recommandés avec standalone.

```typescript
// guards/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
```

### Utilisation dans les routes

```typescript
// app.routes.ts
{
  path: 'admin',
  loadComponent: () => import('./features/admin/admin.component'),
  canActivate: [authGuard]
}
```

## 🔌 HTTP Interceptors (Functional)

```typescript
// interceptors/jwt.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req);
};
```

### Configuration dans app.config.ts

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([jwtInterceptor])
    )
  ]
};
```

## 📝 Models

Définissez vos interfaces et types ici.

```typescript
// models/user.model.ts
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
```

## 📤 Barrel Export (index.ts)

```typescript
// index.ts
export * from './services/api.service';
export * from './services/auth.service';
export * from './guards/auth.guard';
export * from './interceptors/jwt.interceptor';
export * from './models/user.model';
```

## 🎯 Bonnes Pratiques

1. **Services**: Toujours `providedIn: 'root'`
2. **Guards**: Utiliser des functional guards
3. **Interceptors**: Utiliser des functional interceptors
4. **Models**: Préférer les interfaces aux classes
5. **Signals**: Utiliser les signals pour l'état réactif

## 📚 Génération

```bash
# Service
nx g @nx/angular:service my-service --project=livresque-marketplace --path=livresque-marketplace/src/app/core/services

# Guard
nx g @nx/angular:guard my-guard --project=livresque-marketplace --path=livresque-marketplace/src/app/core/guards --functional

# Interceptor
nx g @nx/angular:interceptor my-interceptor --project=livresque-marketplace --path=livresque-marketplace/src/app/core/interceptors --functional
```
