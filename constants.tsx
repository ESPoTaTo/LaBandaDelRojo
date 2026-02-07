
import { Bonus, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Casinos', href: '#' },
  { label: 'Apuestas', href: '#' },
  { label: 'Bonos', href: '#' }
];

export const BONUSES: Bonus[] = [
  {
    id: 'winamax',
    provider: 'Winamax',
    logo: '/logos/winamax-logo.png',
    title: '150€ FREEBETS + 200€ POKER',
    description: 'Consigue hasta 150€ en apuestas gratis y un bono de 200€ para poker con tu primer depósito.',
    image: 'https://images.unsplash.com/photo-1541855956054-934c54094a43?q=80&w=1000&auto=format&fit=crop', // Poker Chips intense
    rollover: 'x1',
    minDeposit: '15€',
    badge: 'Destacado',
    ctaText: '¡JUEGA AHORA!',
    type: 'poker'
  },
  {
    id: 'betfair',
    provider: 'Betfair',
    logo: '/logos/betfair-logo.png',
    title: 'HASTA 200€ BONO',
    description: 'Recibe hasta 200€ en bono de bienvenida para comenzar a apostar.',
    image: 'https://images.unsplash.com/photo-1612051662580-f00072bba08d?q=80&w=1000&auto=format&fit=crop', // Football stadium night
    rollover: 'x3',
    minDeposit: '10€',
    ctaText: '¡JUEGA AHORA!',
    type: 'sports'
  },
  {
    id: 'bwin',
    provider: 'Bwin',
    logo: '/logos/bwin-Logo.png',
    title: '200€ FREEBETS + 50 SPINS',
    description: 'Hasta 200€ en apuestas gratuitas y 50 tiradas gratis para casino.',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1000&auto=format&fit=crop', // Roulette
    rollover: 'x30',
    minDeposit: '10€',
    ctaText: '¡JUEGA AHORA!',
    type: 'casino'
  },
  {
    id: 'pokerstars',
    provider: 'PokerStars',
    logo: '/logos/pokerstars-logo.png',
    title: '100€ APUESTA SEGURA',
    description: 'Igualamos tu primera apuesta deportiva si no resulta ganadora, hasta 100€ en freebets.',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?q=80&w=1000&auto=format&fit=crop', // Card playing dark
    rollover: 'x0',
    minDeposit: '10€',
    ctaText: '¡JUEGA AHORA!',
    type: 'sports'
  },
  {
    id: 'speedybet',
    provider: 'SpeedyBet',
    logo: '/logos/speedybet-logo.svg',
    title: '200€ EN APUESTAS GRATIS',
    description: 'Regístrate y consigue 200€ en apuestas gratuitas para tus deportes favoritos.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop', // Sports Generic action
    rollover: 'x3',
    minDeposit: '20€',
    ctaText: '¡JUEGA AHORA!',
    type: 'sports'
  },
  {
    id: 'sportium',
    provider: 'Sportium',
    logo: '/logos/sportium-logo.png',
    title: '200€ APUESTAS GRATIS',
    description: 'Dobla tu primer depósito hasta 200€ en apuestas gratuitas.',
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1000&auto=format&fit=crop', // Basketball dark
    rollover: 'x4',
    minDeposit: '10€',
    badge: 'Popular',
    ctaText: '¡JUEGA AHORA!',
    type: 'sports'
  },
  {
    id: '888',
    provider: '888',
    logo: '/logos/888-logo.png',
    title: '100€ APUESTAS GRATIS',
    description: 'Consigue hasta 100€ en apuestas gratuitas con tu primer depósito.',
    image: 'https://images.unsplash.com/photo-1518115682977-2f3b7d14e30b?q=80&w=1000&auto=format&fit=crop', // Dice dark
    rollover: 'x3',
    minDeposit: '10€',
    ctaText: '¡JUEGA AHORA!',
    type: 'sports'
  }
];
