export interface User {
  name: string;
  email: string;
  password: string;
  address: Address;
};

export interface Address {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  unidade: string,
  ibge: number,
  gia: number,
  erro?: boolean
};

