import { SidenavItem } from "app/base/sidenav/sidenav.model";

export const SIDENAV_ITEMS: SidenavItem[] = [
  {
    id: 'Products',
    labels: {
      en: "Products",
      fr: "Products"
    },
    link: 'product-list',
    icon: 'shopping-cart'

  },
  {
    id: 'Admin',
    labels: {
      en: "Admin",
      fr: "Admin"
    },
    link: 'admin',
    icon: 'users'

  }

];
