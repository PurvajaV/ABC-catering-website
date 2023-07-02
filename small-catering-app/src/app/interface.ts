export interface signUp {
  name: string;
  email: string;
  password: string;
  mobile: number;
}
export interface login {
  email: String;
  password: String;
  mobile: number;
}

export interface product {
  name: string,
  price: number,
  category: string,
  color: string,
  image: string,
  description: string,
  id: number,
  quantity: undefined | number,
  productId: undefined | number
}
export interface cart {
  name: string,
  price: number,
  image: string,
  id: number | undefined,
  quantity: undefined | number,
  productId: number,
  userId: number
}

export interface priceSummary {
  price: number,
  discount: number,
  tax: number,
  delivery: number,
  total: number
}

export interface order {
  email: string,
  address: string,
  contact: string,
  totalPrice: number,
  userId: string,
  id: number | undefined
}

export interface purchaseOrder {
  address: string,
  contact: string,
  totalPrice: number,
  name: string,
  price: string
  quantity: number,
  userId: number,
  id: number
}

export interface supplier {
  supplierName: string;
}

export interface purchaseItems {
  name: string;
  price: number;
  image: string;
  id: number;
  quantity: number;
  purchaseId: number;
  userId: number;
}

export interface supplierCart {
  name: string,
  price: number,
  image: string,
  id: number | undefined,
  quantity: number,
  purchaseId: number,
  supplierId: number,
  userId: number
}