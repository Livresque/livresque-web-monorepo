import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
}
