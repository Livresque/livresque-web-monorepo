import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  email = '';
  isSubmitted = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email) {
      this.isSubmitted = true;
      // Simuler l'envoi de l'email
      setTimeout(() => {
        this.router.navigate(['/verify-otp'], { queryParams: { email: this.email } });
      }, 2000);
    }
  }
}
