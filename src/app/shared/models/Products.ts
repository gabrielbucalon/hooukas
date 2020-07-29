export interface Products {
  title: string;
  icon: string;
  items: Items[];
};

export interface Items {
  uid: string;
  description: string;
  img: string[];
  price: number;
  title: string;
  cupom?: Cupom;
};

export interface Cupom{
  priceDiscount: number,
  codeCupom: string
}
