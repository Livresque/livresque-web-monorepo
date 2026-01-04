import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  otp: string[] = ['', '', '', '', ''];
  email = '';
  isVerifying = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.queryParams['email'] || '';
  }

  onOtpChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Accepter uniquement les chiffres
    if (value && !/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otp[index] = value;

    // Passer au champ suivant automatiquement
    if (value && index < 4) {
      const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }

    // Vérifier si tous les champs sont remplis
    if (this.otp.every(digit => digit !== '')) {
      this.verifyOtp();
    }
  }

  onKeyDown(index: number, event: KeyboardEvent) {
    // Gérer la touche Backspace
    if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
      const prevInput = document.querySelector(`input[name="otp-${index - 1}"]`) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pastedData = event.clipboardData?.getData('text') || '';
    const digits = pastedData.replace(/\D/g, '').slice(0, 5).split('');
    
    digits.forEach((digit, index) => {
      if (index < 5) {
        this.otp[index] = digit;
        const input = document.querySelector(`input[name="otp-${index}"]`) as HTMLInputElement;
        if (input) {
          input.value = digit;
        }
      }
    });

    // Vérifier si tous les champs sont remplis
    if (this.otp.every(digit => digit !== '')) {
      this.verifyOtp();
    }
  }

  verifyOtp() {
    this.isVerifying = true;
    this.errorMessage = '';
    const otpCode = this.otp.join('');

    // Simuler la vérification du code
    setTimeout(() => {
      // Exemple: code correct = "12345"
      if (otpCode === '12345') {
        this.router.navigate(['/change-password'], { queryParams: { email: this.email, token: otpCode } });
      } else {
        this.errorMessage = 'Code incorrect. Veuillez réessayer.';
        this.isVerifying = false;
        this.otp = ['', '', '', '', ''];
        // Réinitialiser les inputs
        this.otp.forEach((_, index) => {
          const input = document.querySelector(`input[name="otp-${index}"]`) as HTMLInputElement;
          if (input) {
            input.value = '';
          }
        });
        // Focus sur le premier champ
        const firstInput = document.querySelector('input[name="otp-0"]') as HTMLInputElement;
        if (firstInput) {
          firstInput.focus();
        }
      }
    }, 1500);
  }

  resendCode() {
    this.errorMessage = '';
    // Logique pour renvoyer le code
    console.log('Renvoi du code à:', this.email);
  }
}
