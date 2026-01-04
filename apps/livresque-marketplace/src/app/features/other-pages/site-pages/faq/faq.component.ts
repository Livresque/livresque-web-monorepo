import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
  popular?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: number;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  activeTab = 'all';
  searchQuery = '';
  filteredFaqs: FaqItem[] = [];
  
  categories: Category[] = [
    {
      id: 'account',
      name: 'Mon Compte',
      icon: 'account_circle',
      description: 'Gérer votre profil, mot de passe, et paramètres de confidentialité.',
      count: 0
    },
    {
      id: 'reading',
      name: 'Lecture & Bibliothèque',
      icon: 'auto_stories',
      description: 'Liseuse web, synchronisation, notes et marque-pages.',
      count: 0
    },
    {
      id: 'billing',
      name: 'Achats & Abonnements',
      icon: 'payments',
      description: 'Facturation, historique des commandes, remboursements.',
      count: 0
    },
    {
      id: 'technical',
      name: 'Support Technique',
      icon: 'devices',
      description: 'Problèmes d\'affichage, compatibilité app mobile, bugs.',
      count: 0
    }
  ];

  faqs: FaqItem[] = [
    {
      id: 'offline-reading',
      question: 'Comment lire mes livres hors connexion ?',
      answer: 'Pour lire sans connexion internet, vous devez utiliser notre application mobile ou télécharger le livre via le lecteur web pour une utilisation locale temporaire.',
      category: 'reading',
      isOpen: false,
      popular: true
    },
    {
      id: 'gift-book',
      question: 'Puis-je offrir un livre numérique à un ami ?',
      answer: 'Oui ! Vous pouvez offrir des livres numériques via notre système de cartes cadeaux. Rendez-vous dans la section "Offrir" de votre compte pour générer une carte cadeau personnalisée.',
      category: 'billing',
      isOpen: false,
      popular: true
    },
    {
      id: 'file-formats',
      question: 'Quels formats de fichiers sont supportés pour l\'import ?',
      answer: 'Nous supportons les formats EPUB, PDF, MOBI et TXT. Les fichiers doivent faire moins de 50MB et respecter les droits d\'auteur.',
      category: 'technical',
      isOpen: false
    },
    {
      id: 'refund',
      question: 'Comment demander un remboursement ?',
      answer: 'Les remboursements sont possibles dans les 14 jours suivant l\'achat si vous n\'avez pas commencé la lecture. Contactez notre support avec votre numéro de commande.',
      category: 'billing',
      isOpen: false,
      popular: true
    },
    {
      id: 'change-email',
      question: 'Comment changer mon adresse email ou mon mot de passe ?',
      answer: 'Allez dans "Mon Compte" > "Paramètres" > "Sécurité". Vous pourrez y modifier vos informations de connexion après vérification de votre mot de passe actuel.',
      category: 'account',
      isOpen: false
    },
    {
      id: 'sync-devices',
      question: 'Comment synchroniser ma bibliothèque entre mes appareils ?',
      answer: 'La synchronisation est automatique une fois connecté à votre compte. Assurez-vous d\'être connecté avec le même email sur tous vos appareils.',
      category: 'reading',
      isOpen: false
    },
    {
      id: 'subscription-cancel',
      question: 'Comment annuler mon abonnement ?',
      answer: 'Rendez-vous dans "Mon Compte" > "Abonnement" > "Gérer". Vous pouvez annuler à tout moment, l\'accès reste actif jusqu\'à la fin de la période payée.',
      category: 'billing',
      isOpen: false
    },
    {
      id: 'app-problems',
      question: 'L\'application mobile ne fonctionne pas correctement',
      answer: 'Essayez de fermer complètement l\'app et la relancer. Si le problème persiste, vérifiez les mises à jour dans votre store d\'applications ou contactez le support.',
      category: 'technical',
      isOpen: false
    }
  ];

  ngOnInit() {
    this.updateCategoryCounts();
    this.filterFaqs();
  }

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
    this.filterFaqs();
    
    // Scroll vers la section FAQ avec un délai pour l'animation
    setTimeout(() => {
      const element = document.getElementById('faq-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  toggleFaq(faqId: string) {
    const faq = this.filteredFaqs.find(f => f.id === faqId);
    if (faq) {
      faq.isOpen = !faq.isOpen;
      // Fermer les autres FAQ ouvertes
      this.filteredFaqs.forEach(f => {
        if (f.id !== faqId) {
          f.isOpen = false;
        }
      });
    }
  }

  onSearch() {
    this.filterFaqs();
  }

  clearSearch() {
    this.searchQuery = '';
    this.filterFaqs();
  }

  private filterFaqs() {
    let filtered = [...this.faqs];

    // Filtrer par catégorie
    if (this.activeTab !== 'all' && this.activeTab !== 'popular') {
      filtered = filtered.filter(faq => faq.category === this.activeTab);
    }

    // Filtrer par popularité
    if (this.activeTab === 'popular') {
      filtered = filtered.filter(faq => faq.popular);
    }

    // Filtrer par recherche
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    this.filteredFaqs = filtered;
  }

  private updateCategoryCounts() {
    this.categories.forEach(category => {
      category.count = this.faqs.filter(faq => faq.category === category.id).length;
    });
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Autre';
  }

  getPopularFaqsCount(): number {
    return this.faqs.filter(faq => faq.popular).length;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  trackByFaqId(index: number, faq: FaqItem): string {
    return faq.id;
  }
}
