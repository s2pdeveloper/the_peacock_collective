// angular import
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Project import
import { AdminComponent } from "./theme/layouts/admin/admin.component";
import { GuestComponent } from "./theme/layouts/guest/guest.component";

const routes: Routes = [
  {
    path: "",
    component: GuestComponent,
    children: [
      {
        path: "",
        redirectTo: "login",
        pathMatch: "full",
      },
      {
        path: "login",
        loadComponent: () =>
          import("./features/authentication/login/login.component"),
      },
      {
        path: "register",
        loadComponent: () =>
          import("./features/authentication/register/register.component"),
      },
      {
        path: "change-pwd",
        loadComponent: () =>
          import("./features/authentication/changepwd/changepwd.component"),
      },
      {
        path: "qr-sheet",
        loadComponent: () =>
          import("./features/authentication/QRSheet/QRSheet.component"),
      },
      {
        path: "logoQR",
        loadComponent: () =>
          import("./features/authentication/logoQR/logoQR.component"),
      },
      {
        path: "invoice",
        loadComponent: () =>
          import("./features/authentication/invoice/invoice.component"),
      },
      {
        path: "qr-label",
        loadComponent: () =>
          import("./features/authentication/label-qr/label-qr.component"),
      },
    ],
  },
  {
    path: "default",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "dashboard",
        loadComponent: () =>
          import("./features/default/dashboard/dashboard.component"),
      },

      {
        path: "user",
        loadChildren: () =>
          import("./features/users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "category",
        loadChildren: () =>
          import("./features/category/category.module").then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: "product",
        loadChildren: () =>
          import("./features/product/product.module").then(
            (m) => m.ProductModule
          ),
      },
      {
        path: "attribute",
        loadChildren: () =>
          import("./features/attribute/attribute.module").then(
            (m) => m.AttributeModule
          ),
      },
      {
        path: "vendor",
        loadChildren: () =>
          import("./features/vendor/vendor.module").then((m) => m.VendorModule),
      },
      {
        path: "variant",
        loadChildren: () =>
          import("./features/variants/variants.module").then(
            (m) => m.VariantsModule
          ),
      },
      {
        path: "tag",
        loadChildren: () =>
          import("./features/tag/tag.module").then((m) => m.TagModule),
      },
      {
        path: "bespoke",
        loadChildren: () =>
          import("./features/bespoke/bespoke.module").then(
            (m) => m.BespokeModule
          ),
      },
      {
        path: "all-variants",
        loadChildren: () =>
          import(
            "./features/all-product-variants/all-product-variants.module"
          ).then((m) => m.AllProductVariantsModule),
      },

      {
        path: "customer",
        loadChildren: () =>
          import("./features/customer/customer.module").then(
            (m) => m.CustomerModule
          ),
      },
      {
        path: "inventory",
        loadChildren: () =>
          import("./features/inventory/inventory.module").then(
            (m) => m.InventoryModule
          ),
      },
      {
        path: "saleRate",
        loadChildren: () =>
          import("./features/sale-rate/sale-rate.module").then(
            (m) => m.SaleRateModule
          ),
      },
      {
        path: "invoice",
        loadChildren: () =>
          import("./features/invoice/invoice.module").then(
            (m) => m.InvoiceModule
          ),
      },
      {
        path: "shop",
        loadChildren: () =>
          import("./features/shop/shop.module").then((m) => m.ShopModule),
      },
      {
        path: "coupon",
        loadChildren: () =>
          import("./features/coupon/coupon.module").then((m) => m.CouponModule),
      },
      {
        path: "offers",
        loadChildren: () =>
          import("./features/offers/offers.module").then((m) => m.OffersModule),
      },
      {
        path: "reports",
        loadChildren: () =>
          import("./features/reports/reports.module").then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: "expenses",
        loadChildren: () =>
          import("./features/expenses/expenses.module").then(
            (m) => m.ExpensesModule
          ),
      },
      {
        path: "wastage",
        loadChildren: () =>
          import("./features/wastage/wastage.module").then(
            (m) => m.WastageModule
          ),
      },
      {
        path: "new-invoice",
        loadChildren: () =>
          import("./features/new-invoice/new-invoice.module").then(
            (m) => m.NewInvoiceModule
          ),
      },
      {
        path: "order",
        loadChildren: () =>
          import("./features/order/order.module").then((m) => m.OrderModule),
      },
      {
        path: "transactions",
        loadChildren: () =>
          import("./features/transaction/transaction.module").then((m) => m.TransactionModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
