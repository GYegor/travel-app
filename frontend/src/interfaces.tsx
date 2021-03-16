export interface AppState {
  countryList: ICountryCard[];
  lang: Language;
  filterString: string;
  utcOffset: number;
  isSideBarOpened: boolean;
  user: IUser | null;
  weatherParams: IWeatherParams | null;
  country: ICountryFull|null;
}

export interface IWeatherParams {
  capital: string;
  coords: [number, number];
}

export interface ICountryCard {
  id: number;
  name: string,
  capital: string,
  smallImageId: string,
  utcOffset: number;
}

export interface ICountryFull {
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
export interface ICountryFull {
  id: number;
  name: string,
  capital: string,
  imageId: string,
  utcOffset: number;
  coords: number[];
  description: string;
  videoUrl: string;
  sights: ISightseeing[];
  currencyCode: string;
  smallImageId?: string;
}

export interface ICountryAvatarProps {
  name: string,
  capital: string,
  description: string,
  imageUrl: string,
}

export interface ISightseeing {
  id: number;
  name: string;
  imageId: string;
  description: string;
  smallImageId: string;
  rating: IRating;
}

export interface IRating {
  points: number;
  votes: number;
  votedUsers: IVotedUser[];
}

export interface IVotedUser extends IUser {
  points: number;
}
export interface IUser {
  id?: number;
  imageId: number;
  name: string,
  lang: Language,
}

export enum Language {
  en = 1,
  ru = 2,
  by = 3
}
