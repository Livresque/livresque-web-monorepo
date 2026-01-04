import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  newPassword = '';
  confirmPassword = '';
  showNewPassword = false;
  showConfirmPassword = false;
  email = '';
  token = '';
  isSubmitting = false;
  errorMessage = '';
  passwordStrength = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'] || '';
    this.token = this.route.snapshot.queryParams['token'] || '';
    
    if (!this.email || !this.token) {
      this.router.navigate(['/forgot-password']);
    }
  }

  onPasswordInput() {
    this.calculatePasswordStrength();
  }

  calculatePasswordStrength() {
    let strength = 0;
    if (this.newPassword.length >= 8) strength++;
    if (/[a-z]/.test(this.newPassword)) strength++;
    if (/[A-Z]/.test(this.newPassword)) strength++;
    if (/[0-9]/.test(this.newPassword)) strength++;
    if (/[^a-zA-Z0-9]/.test(this.newPassword)) strength++;
    this.passwordStrength = strength;
  }

  getPasswordStrengthLabel(): string {
    switch (this.passwordStrength) {
      case 0:
      case 1: return 'Très faible';
      case 2: return 'Faible';
      case 3: return 'Moyen';
      case 4: return 'Bon';
      case 5: return 'Excellent';
      default: return '';
    }
  }

  getPasswordStrengthColor(): string {
    switch (this.passwordStrength) {
      case 0:
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-blue-500';
      case 5: return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  }

  onSubmit() {
    this.errorMessage = '';

    if (this.newPassword.length < 8) {
      this.errorMessage = 'Le mot de passe doit contenir au moins 8 caractères.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.isSubmitting = true;

    // Simuler la mise à jour du mot de passe
    setTimeout(() => {
      this.router.navigate(['/login'], { 
        queryParams: { message: 'password-changed' } 
      });
    }, 2000);
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
