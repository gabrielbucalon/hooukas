export interface Products {
  category: Category;
};

export interface Category {
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
  cupom?: string;
};
