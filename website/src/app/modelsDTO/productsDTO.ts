export interface Product {
    bannerImage: string
    id: number
    name: string
    description: string
    keywords?: string
    hsn: string
    gst?: string
    inStock: boolean
    isTrending: boolean
    cod: boolean
    inSale: boolean
    salePrice: number
    returnableDays?: number
    soldIndividually: boolean
    status: string
    createdAt: string
    updatedAt: string
    categoryId: number
    productWithVariants: ProductWithVariant[]
    productWithTagMap: ProductWithTagMap[]
    productWithCategory: ProductWithCategory
  }
  
  export interface ProductWithVariant {
    id: number
    sku: string
    description?: string
    price: number
    qty: number
    createdAt: string
    updatedAt: string
    productId: number
    variantWithAttrVariantMap: VariantWithAttrVariantMap[]
    variantImages: VariantImage[]
  }
  
  export interface VariantWithAttrVariantMap {
    id: number
    value: string
    createdAt: string
    updatedAt: string
    attributeId: number
    variantId: number
    AttrVariantMapWithAttributes: AttrVariantMapWithAttributes
  }
  
  export interface AttrVariantMapWithAttributes {
    value: Value[]
    id: number
    name: string
    type: string
    status: string
    createdAt: string
    updatedAt: string
  }
  
  export interface Value {
    value: string
  }
  
  export interface VariantImage {
    image: string
    id: number
    status: string
    createdAt: string
    updatedAt: string
    variantId: number
  }
  
  export interface ProductWithTagMap {
    id: number
    createdAt: string
    updatedAt: string
    tagId: number
    productId: number
  }
  
  export interface ProductWithCategory {
    id: number
    name: string
    description: string
    status: string
    isShowHome: boolean
    createdAt: string
    updatedAt: string
  }
  