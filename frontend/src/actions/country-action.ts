import { ICountry} from '../interfaces';

export const onCountryChanged = (country: ICountry) => ({type: 'COUNTRY_CHANGE', country})
