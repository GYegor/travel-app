export interface AppState {
  countryList?: ICountryCard[];
  lang?: Language;
  utcOffset?: number;
}

export interface ICountryCard {
  id: number;
  name: string;
  capital: string;
  smallImageId: string;
  localTimeDiff: number;
}

export enum Language {
  en = 1,
  ru = 2,
  by = 3
}