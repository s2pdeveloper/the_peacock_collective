import { Injectable } from "@angular/core";

export interface NavigationItem {
  id: string;
  title: string;
  type: "item" | "collapse" | "group";
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  // {
  //   id: "dashboard",
  //   title: "Dashboard",
  //   type: "group",
  //   icon: "icon-navigation",
  //   children: [
  //     {
  //       id: "default",
  //       title: "Dashboard",
  //       type: "item",
  //       classes: "nav-item",
  //       url: "/default/dashboard",
  //       icon: "ti ti-dashboard",
  //       breadcrumbs: false,
  //     },
  //   ],
  // },
  {
    id: "elements",
    title: "JhumkaPlanet",
    type: "group",
    icon: "icon-navigation",
    children: [
      {
        id: "default",
        title: "Dashboard",
        type: "item",
        classes: "nav-item",
        url: "/default/dashboard",
        icon: "ti ti-dashboard",
        breadcrumbs: false,
      },
      {
        id: "master",
        title: "User Management",
        type: "collapse",
        classes: "nav-item",
        url: "/default/shop",
        icon: "fa-solid fa-rectangle-list",
        children: [
          // {
          //   id: "shop",
          //   title: "Shop",
          //   type: "item",
          //   classes: "nav-item",
          //   url: "/default/shop",
          //   icon: "fa-solid fa-store",
          // },
          {
            id: "user",
            title: "User",
            type: "item",
            classes: "nav-item",
            url: "/default/user",
            icon: "fa-solid fa-users-gear",
          },
          // {
          //   id: "coupon",
          //   title: "Coupon",
          //   type: "item",
          //   classes: "nav-item",
          //   url: "/default/coupon",
          //   icon: "fa-solid fa-tag",
          // },
          // {
          //   id: "offers",
          //   title: "Offers",
          //   type: "item",
          //   classes: "nav-item",
          //   url: "/default/offers",
          //   icon: "fa-solid fa-gift",
          // },
        ],
      },
      {
        id: "tag",
        title: "Tag",
        type: "item",
        classes: "nav-item",
        url: "/default/tag",
        icon: "fa-solid fa-list",
      },
      {
        id: "category",
        title: "Category",
        type: "item",
        classes: "nav-item",
        url: "/default/category",
        icon: "fa-solid fa-list",
      },
    
      {
        id: "product",
        title: "Product",
        type: "item",
        classes: "nav-item",
        url: "/default/product",
        icon: "fa-brands fa-product-hunt",
      },
      {
        id: "attribute",
        title: "Attribute",
        type: "item",
        classes: "nav-item",
        url: "/default/attribute",
        icon: "fa-brands fa-angular",
      },
      // {
      //   id: "vendor",
      //   title: "Vendor",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/vendor",
      //   icon: "fa-solid fa-user-tie",
      // },
      {
        id: "all-variants",
        title: "All variants",
        type: "item",
        classes: "nav-item",
        url: "/default/all-variants",
        icon: "fa-brands fa-vimeo",
      },
      {
        id: "bespoke",
        title: "Bespoke",
        type: "item",
        classes: "nav-item",
        url: "/default/bespoke",
        icon: "fa-solid fa-b",
      },
      
      {
        id: "order",
        title: "Orders",
        type: "item",
        classes: "nav-item",
        url: "/default/order/order-list",
        icon: "fa-solid fa-clipboard-list",
      },
      // {
      //   id: "inventory",
      //   title: "Inventory",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/inventory",
      //   icon: "fa-solid fa-warehouse",
      // },

      // {
      //   id: "saleRate",
      //   title: "Sale Rate",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/saleRate",
      //   icon: "fa-solid  fa-sack-dollar",
      // },
      // {
      //   id: "invoice",
      //   title: "Invoice",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/invoice",
      //   icon: "fa-solid fa-file-invoice",
      // },
      // {
      //   id: "customer",
      //   title: "Customer",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/customer",
      //   icon: "fa-solid fa-users-rectangle",
      // },

      // {
      //   id: "expenses",
      //   title: "Expenses",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/expenses/list",
      //   icon: "fa-solid fa-money-bill-alt",
      // },
      // {
      //   id: "wastage",
      //   title: "Wastage",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/wastage/list",
      //   icon: "fa-solid fa-trash-alt",
      // },
      // {
      //   id: "report",
      //   title: "Reports",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/reports/tabs",
      //   icon: "fa-solid fa-clipboard-list",
      // },
      // {
      //   id: "newInvoice",
      //   title: "New Invoice",
      //   type: "item",
      //   classes: "nav-item",
      //   url: "/default/new-invoice/list",
      //   icon: "fa-solid fa-clipboard-list",
      // },

      // fa-solid fa-cart-flatbed-suitcase
      // {
      //   id: 'card',
      //   title: 'Card',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/card',
      //   icon: 'ti ti-credit-card'
      // },
      // {
      //   id: 'breadcrumb',
      //   title: 'Breadcrumb',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/breadcrumb',
      //   icon: 'ti ti-hierarchy-2'
      // },
      // {
      //   id: 'spinner',
      //   title: 'spinner',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/spinner',
      //   icon: 'ti ti-loader'
      // },
      // {
      //   id: 'color',
      //   title: 'Colors',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/color',
      //   icon: 'ti ti-brush'
      // },
      // {
      //   id: 'tabler',
      //   title: 'Tabler',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: 'https://tabler-icons.io/',
      //   icon: 'ti ti-leaf',
      //   target: true,
      //   external: true
      // }
    ],
  },
  // {
  //   id: "authentication",
  //   title: "Authentication",
  //   type: "group",
  //   icon: "icon-navigation",
  //   children: [
  //     {
  //       id: "login",
  //       title: "Login",
  //       type: "item",
  //       classes: "nav-item",
  //       url: "/login",
  //       icon: "ti ti-login",
  //       target: true,
  //       breadcrumbs: false,
  //     },
  //     {
  //       id: "register",
  //       title: "Register",
  //       type: "item",
  //       classes: "nav-item",
  //       url: "/register",
  //       icon: "ti ti-user-plus",
  //       target: true,
  //       breadcrumbs: false,
  //     },
  //   ],
  // },
  // {
  //   id: "other",
  //   title: "Other",
  //   type: "group",
  //   icon: "icon-navigation",
  //   children: [
  //     {
  //       id: "sample-page",
  //       title: "Sample Page",
  //       type: "item",
  //       url: "/sample-page",
  //       classes: "nav-item",
  //       icon: "ti ti-brand-chrome",
  //     },
  //   ],
  // },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
