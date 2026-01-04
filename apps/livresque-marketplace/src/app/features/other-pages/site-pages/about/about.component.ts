import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
}
