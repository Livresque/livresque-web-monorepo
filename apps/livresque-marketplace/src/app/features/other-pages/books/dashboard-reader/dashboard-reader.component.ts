import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Chapter {
  id: number;
  title: string;
  isActive: boolean;
  children?: Chapter[];
}

interface Note {
  id: number;
  type: 'highlight' | 'note';
  chapter: string;
  text: string;
  content?: string;
  color: string;
}

@Component({
  selector: 'app-dashboard-reader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-reader.component.html',
  styleUrls: ['./dashboard-reader.component.scss']
})
export class DashboardReaderComponent {
  book = {
    title: "L'Ombre du Vent",
    author: "Carlos Ruiz Zafón",
    currentChapter: "Chapitre 3",
    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtNbvRcRGQnHEH6A0xazN0k9Yq1JMIcbEBpl_b7whkd9NPGrn57P4fzXnTITCzSU2ktHCcHetuElJLoalPA4UG4vQsmgg-IhfiQv094XHZE0-u3JRrafhC5LoJkYc9kQLMjXMXvJ9cD9_aK9APiz5-wpGOCalXgmJwmsY2XR9JWsOV95xdeR_cka5MikySlI_h-PLv5of4hQJJ4XmJ1a9vSckYrrCjrONP4G2uSdTcyBGMIFdinfWxsyrMkR6YSP47Y7B7PMlW5Ww",
    progress: 24,
    currentPage: 45,
    totalPages: 560
  };

  theme = 'light';
  fontSize = 110;
  lineSpacing = 'normal';
  showSettings = false;
  isBookmarked = true;

  chapters: Chapter[] = [
    { id: 1, title: 'Couverture', isActive: false },
    { id: 2, title: 'Dédicace', isActive: false },
    { 
      id: 3, 
      title: 'Première Partie: Le Cimetière des Livres Oubliés', 
      isActive: false,
      children: [
        { id: 31, title: 'Chapitre 1', isActive: false },
        { id: 32, title: 'Chapitre 2', isActive: false },
        { id: 33, title: 'Chapitre 3', isActive: true },
        { id: 34, title: 'Chapitre 4', isActive: false },
        { id: 35, title: 'Chapitre 5', isActive: false }
      ]
    },
    { id: 4, title: 'Deuxième Partie: La Cité des Ombres', isActive: false },
    { id: 5, title: "Troisième Partie: Le Jeu de l'Ange", isActive: false }
  ];

  notes: Note[] = [
    {
      id: 1,
      type: 'highlight',
      chapter: 'Chap. 1',
      text: '"Barcelone, la ville des prodiges..."',
      color: 'text-primary'
    },
    {
      id: 2,
      type: 'note',
      chapter: 'Chap. 2',
      text: '"Il ne parlait jamais de la guerre..."',
      content: 'Référence importante au passé du père.',
      color: 'text-blue-400'
    },
    {
      id: 3,
      type: 'highlight',
      chapter: 'Chap. 3',
      text: '"Les livres sont des miroirs : on n\'y voit que ce qu\'on porte déjà en soi."',
      color: 'text-primary'
    }
  ];

  setTheme(theme: string): void {
    this.theme = theme;
  }

  adjustFontSize(increase: boolean): void {
    if (increase && this.fontSize < 150) {
      this.fontSize += 10;
    } else if (!increase && this.fontSize > 80) {
      this.fontSize -= 10;
    }
  }

  setLineSpacing(spacing: string): void {
    this.lineSpacing = spacing;
  }

  toggleBookmark(): void {
    this.isBookmarked = !this.isBookmarked;
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(n => n.id !== id);
  }

  goBack(): void {
    // Navigation retour vers la bibliothèque
    console.log('Retour à la bibliothèque');
  }
}
