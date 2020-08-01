export interface User {
  uid: string;
  name: string;
  email: string;
  address: Address;
  password?: string;
};

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  unidade?: string;
  ibge?: number;
  gia?: number;
  erro?: boolean;
};

