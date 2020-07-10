export interface Card  {
  style?: Style;
  title?: string;
  subtitle?: string;
  actions?: boolean;
  img?: string;
}


export interface Style {
  backgroundColor: string | "#f0ad4e" ;
  witdh: "100%" | string;
  heigth: string;
}
