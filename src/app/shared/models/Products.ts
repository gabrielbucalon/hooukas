export interface Products {
  title: string;
  imgs: string[];
  price: number;
  description: string;
  cupomForm?: {
    codeCupom: string;
    priceDiscount: number;
  };
  data?: any;
};
