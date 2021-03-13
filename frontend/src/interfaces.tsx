import { Language } from "./components/SideBar";

export interface ICountryCard {
  id: number;
  name: string,
  capital: string,
  smallImageId: string,
}

export interface IDateTimeCard {
  lang: Language;
}