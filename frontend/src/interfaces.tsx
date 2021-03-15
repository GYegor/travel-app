export interface AppState {
  countryList: ICountryCard[];
  lang: Language;
  filterString: string;
  utcOffset: number;
  isSideBarOpened: boolean;
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
