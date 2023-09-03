export interface FinalObject {
  planType: string;
  price: number;
  yearly: boolean;
  addons: finalAddons[];
}

export interface finalAddons {
  name: string;
  price: number;
}
