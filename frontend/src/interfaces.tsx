export interface ICountryCard {
  id: number;
  name: string,
  capital: string,
  smallImageId: string,
}

export interface IDateTimeCard {
  lang: Language;
}

export enum Language {
  en = 1,
  ru = 2,
  by = 3
}