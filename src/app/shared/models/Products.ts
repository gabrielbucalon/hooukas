export interface Products {
  title: string;
  imgs: String[];
  price: number;
  description: string;
  quantity: 0;
  cupomForm?: {
    codeCupom: string;
    priceDiscount: number;
  };
  data?: any;
};
