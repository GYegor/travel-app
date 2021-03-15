import { AnyAction } from 'redux'
import { AppState, Language, ICountry } from './interfaces'

export const initialState: AppState = {
  countryList: [],
  lang: Language.en,
  filterString: '',
  utcOffset: 3,
  isSideBarOpened: false,
<<<<<<< HEAD
  country: null,
=======
  weatherParams: null,
>>>>>>> 3534575adaf003fedec192ae798f3bf3174a959c
}

const appReducer = (state = initialState, action: AnyAction) => {
  switch(action.type){

    case 'GET_COUNTRY_LIST' :
      return ({
        ...state,
        countryList : action.countryList
      })

    case 'COUNTRY_CHANGE' :
      return ({
        ...state,
        country : action.country
      })

    case 'LANGUAGE_CHANGE' :
      return ({
        ...state,
        lang : action.lang
      })
    
    case 'FILTER_STRING_CHANGED' :
      return ({
        ...state,
        filterString : action.filterString
      })
  
    case 'UTC_OFFSET_CHANGE' :
      return ({
        ...state,
        utcOffset : action.utcOffset
      })

    case 'GET_WEATHER_PARAMS' :
      return ({
        ...state,
        weatherParams : action.weatherParams
      })

    case 'TOGGLE_SIDE_BAR' :
      return ({
        ...state,
        isSideBarOpened : action.isSideBarOpened
      })

    default:
      return state
  }
}

export default appReducer;