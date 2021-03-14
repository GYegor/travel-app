export interface ICountryCard {
  id: number;
  name: string,
  capital: string,
  smallImageId: string,
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
