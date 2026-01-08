import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private location: Location,
    private router: Router
  ) {}

  goBack(): void {
    // Vérifier s'il y a un historique de navigation
    if (window.history.length > 1) {
      this.location.back();
    } else {
      // Rediriger vers la page d'accueil si pas d'historique
      this.router.navigate(['/']);
    }
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
