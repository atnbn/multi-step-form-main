export interface FinalObject {
  abotyp: string;
  price: number;
  duration: boolean;
  addons?: finalAddons[];
}

export interface finalAddons {
  name: string;
  price: number;
}
