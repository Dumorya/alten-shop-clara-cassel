import { SidenavItem } from 'app/base/sidenav/sidenav.model';

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'products',
    labels: {
      en: 'Products',
      fr: 'Products'
    },
    link: 'products',
    icon: 'shopping-cart'

  },
  {
    id: 'admin',
    labels: {
      en: 'Admin',
      fr: 'Admin'
    },
    link: 'admin',
    icon: 'users'

  }

];
