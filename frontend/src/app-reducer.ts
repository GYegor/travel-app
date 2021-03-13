import { AnyAction } from 'redux'
import { AppState, Language } from './interfaces'

export const initialState: AppState = {
  countryList: [],
  lang: Language.en
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

    default:
      return state
  }
}

export default appReducer;