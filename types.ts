
export interface Bonus {
  id: string;
  provider: string;
  logo: string;
  title: string;
  description: string;
  image: string;
  rollover: string;
  minDeposit: string;
  badge?: string;
  ctaText: string;
  type: 'poker' | 'sports' | 'casino';
  isExclusive?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
