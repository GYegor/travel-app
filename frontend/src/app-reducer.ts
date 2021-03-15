import { AnyAction } from 'redux'
import { AppState, Language } from './interfaces'

export const initialState: AppState = {
  countryList: [],
  lang: Language.en,
  filterString: '',
  utcOffset: 3,
  isSideBarOpened: false,
  isPopup: false,
  user: null,
}

const appReducer = (state = initialState, action: AnyAction) => {
  switch(action.type){

    case 'GET_COUNTRY_LIST' :
      return ({
        ...state,
        countryList : action.countryList
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

    case 'TOGGLE_SIDE_BAR' :
      return ({
        ...state,
        isSideBarOpened : action.isSideBarOpened
      })

    case 'TOGGLE_POPUP' :
      return ({
        ...state,
        isPopup: action.isPopup
      })

    case 'REGISTRATION_USER' :
      return ({
        ...state,
        user: action.user
      })

    default:
      return state
  }
}

export default appReducer;