import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CurrencyService } from '../../../../shared/services/currency.service';

@Component({
  selector: 'app-subscription-plans',
  standalone: true,
  imports: [CommonModule, RouterLink, HeaderComponent, FooterComponent],
  templateUrl: './subscription-plans.component.html',
  styleUrls: ['./subscription-plans.component.scss']
})
export class SubscriptionPlansComponent {
  isAnnual = true;
  private currencyService = inject(CurrencyService);
  
  plans = [
    {
      id: 'explorer',
      name: 'Explorateur',
      description: 'Pour les lecteurs occasionnels.',
      price: 'Gratuit',
      monthlyPrice: null,
      annualPrice: null,
      recommended: false,
      features: [
        { text: 'Accès aux classiques (1000+ titres)', included: true, bold: false },
        { text: '1 extrait gratuit par mois', included: true, bold: false },
        { text: 'Lecture sur 1 appareil', included: true, bold: false },
        { text: 'Lecture hors connexion', included: false, bold: false }
      ],
      buttonText: 'S\'inscrire gratuitement',
      buttonClass: 'w-full rounded-lg border border-[#2E2419] bg-transparent hover:bg-[#2E2419] py-3 text-sm font-bold text-white transition'
    },
    {
      id: 'passionate',
      name: 'Passionné',
      description: 'L\'expérience complète sans limites.',
      price: '9,99 €',
      monthlyPrice: 9.99,
      annualPrice: 95.90,
      recommended: true,
      features: [
        { text: 'Accès illimité au catalogue', included: true, bold: true },
        { text: 'Lecture hors connexion', included: true, bold: false },
        { text: 'Synchronisation sur 3 appareils', included: true, bold: false },
        { text: 'Sans publicité', included: true, bold: false },
        { text: '1 Livre Audio par mois offert', included: true, bold: false }
      ],
      buttonText: 'Commencer l\'essai de 14 jours',
      buttonClass: 'w-full rounded-lg bg-primary py-3 text-sm font-bold text-background-dark hover:bg-white transition shadow-lg hover:shadow-primary/20'
    },
    {
      id: 'scholar',
      name: 'Érudit',
      description: 'Pour toute la famille et les collectionneurs.',
      price: '19,99 €',
      monthlyPrice: 19.99,
      annualPrice: 191.90,
      recommended: false,
      features: [
        { text: 'Tout du plan Passionné', included: true, bold: false },
        { text: 'Partage Famille (4 comptes)', included: true, bold: true },
        { text: 'Accès illimité aux Livres Audio', included: true, bold: false },
        { text: 'Accès anticipé aux nouveautés', included: true, bold: false },
        { text: 'Contenus exclusifs auteurs', included: true, bold: false }
      ],
      buttonText: 'Choisir le plan Érudit',
      buttonClass: 'w-full rounded-lg border border-[#2E2419] bg-surface-highlight hover:bg-[#2E2419] py-3 text-sm font-bold text-white transition'
    }
  ];

  features = [
    {
      icon: 'offline_bolt',
      title: 'Lecture Hors Connexion',
      description: 'Téléchargez vos livres et lisez n\'importe où, même dans le métro ou en avion.'
    },
    {
      icon: 'devices',
      title: 'Synchronisation Totale',
      description: 'Commencez sur votre tablette, finissez sur votre téléphone. Votre page est sauvegardée.'
    },
    {
      icon: 'auto_stories',
      title: 'Catalogue Illimité',
      description: 'Plus de 500 000 titres disponibles instantanément. Romans, BD, essais, tout y est.'
    },
    {
      icon: 'star',
      title: 'Avantages Exclusifs',
      description: 'Rencontres auteurs, éditions limitées et avant-premières réservées aux membres.'
    }
  ];

  faqs = [
    {
      question: 'Puis-je annuler à tout moment ?',
      answer: 'Absolument. Il n\'y a aucun engagement de durée (sauf si vous optez pour le paiement annuel). Vous pouvez annuler votre abonnement en un clic depuis votre espace personnel.',
      isOpen: true
    },
    {
      question: 'Comment fonctionne l\'essai gratuit ?',
      answer: 'Vous bénéficiez de 14 jours d\'accès complet au plan Premium. Aucune facturation n\'est effectuée avant la fin de cette période.',
      isOpen: false
    },
    {
      question: 'Les livres audio sont-ils inclus ?',
      answer: 'Oui, le plan Passionné inclut 1 crédit audio par mois, et le plan Érudit vous donne un accès illimité à toute notre audiothèque.',
      isOpen: false
    },
    {
      question: 'Puis-je partager mon compte ?',
      answer: 'Le partage de compte est une fonctionnalité exclusive au plan Érudit, qui permet de créer jusqu\'à 4 profils distincts pour les membres de votre famille.',
      isOpen: false
    }
  ];

  togglePeriod() {
    this.isAnnual = !this.isAnnual;
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  getPlanPrice(plan: any): string {
    // Free plan
    if (!plan.monthlyPrice) return plan.price;

    const currency = this.currencyService.getCurrentCurrency();
    const basePrice = this.isAnnual && plan.annualPrice
      ? (plan.annualPrice / 12)
      : plan.monthlyPrice;

    return this.formatPrice(basePrice, currency);
  }

  private formatPrice(price: number, currency: string): string {
    if (currency === 'XOF') {
      return `${price.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} FCFA`;
    }
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  }

  selectPlan(planId: string) {
    console.log(`Plan sélectionné: ${planId}`);
    // Ici on peut ajouter la logique pour rediriger vers la page de paiement
  }
}