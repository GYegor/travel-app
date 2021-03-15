export interface AppState {
  countryList: ICountryCard[];
  lang: Language;
  filterString: string;
  utcOffset: number;
  isSideBarOpened: boolean;
  country: ICountry|null;
}

export interface ICountryCard {
  id: number;
  name: string,
  capital: string,
  smallImageId: string,
  localTimeDiff?: number;
}

export interface ICountryAvatarProps {
  name: string,
  capital: string,
  description: string,
  imageUrl: string,
}

export interface ISightseeing {
  name: string,
  imageId: string,
  description: string,
  smallImageId: string,
}

export enum Language {
  en = 1,
  ru = 2,
  by = 3
}
export interface ICountry {
  id: number;
  name: string;
  capital: string;
  smallImageId?: string;
  imageId: string;
  videoUrl: string;
  description: string;
  coords: Array<number>;
  currencyCode: string;
  utcOffset: number;
}