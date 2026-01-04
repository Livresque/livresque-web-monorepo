import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./features/other-pages/site-pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/other-pages/site-pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/other-pages/site-pages/shop/shop.component').then(m => m.ShopComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/other-pages/site-pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/other-pages/site-pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./features/other-pages/site-pages/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/other-pages/site-pages/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'terms',
    loadComponent: () => import('./features/other-pages/site-pages/terms/terms.component').then(m => m.TermsComponent)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./features/other-pages/site-pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)
  },
  {
    path: 'book/:id',
    loadComponent: () => import('./features/other-pages/site-pages/book-detail/book-detail.component').then(m => m.BookDetailComponent)
  },
  {
    path: 'book/:id/preview',
    loadComponent: () => import('./features/other-pages/site-pages/book-preview/book-preview.component').then(m => m.BookPreviewComponent)
  },
  {
    path: 'author/:id',
    loadComponent: () => import('./features/other-pages/site-pages/author-profile/author-profile.component').then(m => m.AuthorProfileComponent)
  },
  {
    path: 'subscription-plans',
    loadComponent: () => import('./features/other-pages/site-pages/subscription-plans/subscription-plans.component').then(m => m.SubscriptionPlansComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'verify-otp',
    loadComponent: () => import('./features/auth/verify-otp/verify-otp.component').then(m => m.VerifyOtpComponent)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./features/auth/change-password/change-password.component').then(m => m.ChangePasswordComponent)
  }
];

