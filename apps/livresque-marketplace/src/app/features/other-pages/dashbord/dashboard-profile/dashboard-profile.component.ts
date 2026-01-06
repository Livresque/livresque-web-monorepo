import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent {
  user = {
    fullName: 'Sophie Martin',
    email: 'sophie.martin@example.com',
    phone: '+33 6 12 34 56 78',
    address: '15 Rue de la Paix',
    city: 'Paris',
    postalCode: '75002',
    country: 'France'
  };

  password = {
    current: '',
    new: '',
    confirm: ''
  };

  saveProfile() {
    console.log('Saving profile:', this.user);
  }

  changePassword() {
    console.log('Changing password');
  }
}
