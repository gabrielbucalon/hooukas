export interface Products {
  title: string;
  imgs: String[];
  price: number;
  description: string;
  cupomForm?: {
    codeCupom: string;
    priceDiscount: number;
  };
  data?: any;
};
