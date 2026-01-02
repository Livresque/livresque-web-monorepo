import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCard } from '../components/product-card/product-card.component';

export interface CartItem extends ProductCard {
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  readonly items$ = this.itemsSubject.asObservable();
  readonly totalPrice$ = this.items$.pipe(
    map(items => items.reduce((total, item) => total + (item.price * item.quantity), 0))
  );
  readonly totalItems$ = this.items$.pipe(
    map(items => items.reduce((total, item) => total + item.quantity, 0))
  );

  addItem(product: ProductCard) {
    const current = this.itemsSubject.value;
    const existingItem = current.find(item => item.id === product.id);
    
    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      const cartItem: CartItem = { ...product, quantity: 1 };
      this.itemsSubject.next([...current, cartItem]);
    }
    console.log('Cart add:', product.title);
  }

  updateQuantity(productId: number, quantity: number) {
    const current = this.itemsSubject.value;
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    const updated = current.map(item => 
      item.id === productId ? { ...item, quantity } : item
    );
    this.itemsSubject.next(updated);
  }

  removeItem(productId: number) {
    const current = this.itemsSubject.value;
    const filtered = current.filter(item => item.id !== productId);
    this.itemsSubject.next(filtered);
  }

  incrementQuantity(productId: number) {
    const current = this.itemsSubject.value;
    const item = current.find(item => item.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity + 1);
    }
  }

  decrementQuantity(productId: number) {
    const current = this.itemsSubject.value;
    const item = current.find(item => item.id === productId);
    if (item) {
      this.updateQuantity(productId, item.quantity - 1);
    }
  }

  getItems(): CartItem[] {
    return this.itemsSubject.value;
  }

  clear() {
    this.itemsSubject.next([]);
  }
}
