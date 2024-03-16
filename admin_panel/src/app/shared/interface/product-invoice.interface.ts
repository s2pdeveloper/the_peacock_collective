export interface IInvoiceDetails {
  _id?: string;
  productId: string;
  productCode: string;
  productName: string;
  balanceQuantity: number;
  quantity: number;
  salePrice: number;
  purchaseRate: number;
  gst: number;
  lineValue: number;
  appliedGst: number;
  totalValue: number;
  PPV: number;
  saleRates?: ISaleRatesEntity[] | null;
  isChecked: boolean;
}
export interface ISaleRatesEntity {
  saleRateId: string;
  batchNumber: string;
  vendorName: string;
  batchDate: string;
  salePrice: number;
  purchaseRate: number;
  updatedQuantity: number;
}
