# Shared - Composants, Directives & Pipes Réutilisables

## 📂 Organisation

Le dossier `shared/` contient tous les éléments réutilisables.

```
shared/
├── components/       # Composants UI
├── directives/       # Directives personnalisées  
├── pipes/            # Pipes personnalisés
└── index.ts          # Barrel exports
```

## 🧩 Composants Standalone

Tous les composants partagés sont standalone.

### Exemple: Button Component

```typescript
// components/button/button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="buttonClass"
      [disabled]="disabled"
      (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClass() {
    const base = 'px-4 py-2 rounded font-medium transition';
    return this.variant === 'primary'
      ? `${base} bg-blue-500 hover:bg-blue-600 text-white`
      : `${base} bg-gray-200 hover:bg-gray-300 text-gray-800`;
  }
}
```

### Utilisation

```typescript
import { ButtonComponent } from '@app/shared';

@Component({
  imports: [ButtonComponent],
  template: `
    <app-button variant="primary" (onClick)="handleClick()">
      Click me
    </app-button>
  `
})
```

## 🎯 Directives

```typescript
// directives/highlight.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }
}
```

### Utilisation

```html
<p appHighlight="lightblue">Texte surligné</p>
```

## 🔧 Pipes

```typescript
// pipes/truncate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 50, trail = '...'): string {
    return value.length > limit 
      ? value.substring(0, limit) + trail 
      : value;
  }
}
```

### Utilisation

```html
<p>{{ longText | truncate:100 }}</p>
```

## 📤 Barrel Export (index.ts)

```typescript
// index.ts
export * from './components/button/button.component';
export * from './components/card/card.component';
export * from './directives/highlight.directive';
export * from './pipes/truncate.pipe';
```

## 🎨 Composants avec Tailwind

```typescript
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-xl font-bold mb-2">
        <ng-content select="[title]"></ng-content>
      </h3>
      <div class="text-gray-700">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class CardComponent {}
```

## 🎯 Bonnes Pratiques

1. **Toujours standalone**: Tous les composants shared doivent être standalone
2. **Pas de logique métier**: Uniquement de la présentation
3. **Réutilisabilité**: Pensez générique
4. **Inputs/Outputs**: Bien typer les interfaces
5. **Tailwind**: Utiliser les classes utilitaires

## 📚 Génération

```bash
# Composant
nx g @nx/angular:component button --project=livresque-marketplace --path=livresque-marketplace/src/app/shared/components --standalone

# Directive
nx g @nx/angular:directive highlight --project=livresque-marketplace --path=livresque-marketplace/src/app/shared/directives --standalone

# Pipe
nx g @nx/angular:pipe truncate --project=livresque-marketplace --path=livresque-marketplace/src/app/shared/pipes --standalone
```

## 💡 Exemples de Composants

- **Button**: Boutons avec variants
- **Card**: Cartes de contenu
- **Modal**: Fenêtres modales
- **DataTable**: Tables de données
- **Form**: Champs de formulaire
- **Loader**: Indicateurs de chargement
- **Alert**: Messages d'alerte
