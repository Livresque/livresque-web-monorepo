import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface SupportCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  supportForm = {
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  };

  categories: SupportCategory[] = [
    {
      id: 'order',
      title: 'Commandes',
      icon: 'shopping_bag',
      description: 'Questions sur vos commandes et livraisons'
    },
    {
      id: 'account',
      title: 'Compte',
      icon: 'person',
      description: 'Gestion de votre compte et profil'
    },
    {
      id: 'payment',
      title: 'Paiement',
      icon: 'credit_card',
      description: 'Problèmes de paiement ou facturation'
    },
    {
      id: 'technical',
      title: 'Technique',
      icon: 'bug_report',
      description: 'Problèmes techniques ou bugs'
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'Comment suivre ma commande ?',
      answer: 'Vous pouvez suivre votre commande depuis votre tableau de bord dans la section "Mes Commandes". Vous recevrez également un email avec le lien de suivi lors de l\'expédition.',
      isOpen: false
    },
    {
      question: 'Quels sont les délais de livraison ?',
      answer: 'Les délais de livraison varient entre 2 et 5 jours ouvrables pour la France métropolitaine. Pour les livres numériques, l\'accès est immédiat après le paiement.',
      isOpen: false
    },
    {
      question: 'Comment puis-je retourner un livre ?',
      answer: 'Vous disposez de 14 jours pour retourner un livre non ouvert. Contactez-nous via ce formulaire en sélectionnant la catégorie "Commandes" pour obtenir une étiquette de retour.',
      isOpen: false
    },
    {
      question: 'Comment modifier mes informations de compte ?',
      answer: 'Rendez-vous dans votre tableau de bord, section "Mon Profil" pour modifier vos informations personnelles, adresse de livraison et préférences.',
      isOpen: false
    },
    {
      question: 'Les livres numériques sont-ils téléchargeables ?',
      answer: 'Oui, tous nos livres numériques peuvent être téléchargés au format PDF ou EPUB depuis votre bibliothèque. Vous pouvez les lire hors ligne sur tous vos appareils.',
      isOpen: false
    }
  ];

  toggleFaq(faq: FAQ): void {
    faq.isOpen = !faq.isOpen;
  }

  submitForm(): void {
    if (this.isFormValid()) {
      console.log('Support form submitted:', this.supportForm);
      // Logique d'envoi du formulaire
      alert('Votre demande a été envoyée avec succès. Notre équipe vous répondra dans les plus brefs délais.');
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return !!(
      this.supportForm.name &&
      this.supportForm.email &&
      this.supportForm.category &&
      this.supportForm.subject &&
      this.supportForm.message
    );
  }

  resetForm(): void {
    this.supportForm = {
      name: '',
      email: '',
      category: '',
      subject: '',
      message: ''
    };
  }
}
