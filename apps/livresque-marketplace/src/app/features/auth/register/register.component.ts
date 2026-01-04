import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;
  newsletter = false;
  showPassword = false;
  showConfirmPassword = false;
}
