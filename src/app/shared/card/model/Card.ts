export interface Card  {
  style?: Style;
  title?: string;
  subtitle?: string;
  actions?:{
    cupom: String,
    priceDiscount: number
  };
  img?: string[];
}


export interface Style {
  backgroundColor?: string | "#f0ad4e" ;
  width?: "100%" | string;
  height?: string;
  margin?: "1em" | string;
}
