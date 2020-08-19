export interface Products {
  id: String;
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
