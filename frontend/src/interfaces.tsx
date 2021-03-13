export interface AppState {
  countryList?: ICountryCard[],
  lang?: Language
}

export interface ICountryCard {
  id: number;
  name: string,
  capital: string,
  smallImageId: string,
}

export enum Language {
  en = 1,
  ru = 2,
  by = 3
}