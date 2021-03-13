import { AnyAction } from 'redux'
import { AppState, Language } from './interfaces'

export const initialState: AppState = {
  countryList: [],
  lang: Language.en,
  utcOffset: 3,
  isSideBarOpened: false,
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
  
    default:
      return state
  }
}

export default appReducer;