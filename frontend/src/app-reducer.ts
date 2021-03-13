import { AnyAction } from 'redux'
import { ICountryCard } from './interfaces'

export const initialState = {
  countryList: [] as  ICountryCard[],
}

const appReducer = (state = initialState, action: AnyAction) => {
  switch(action.type){

    case 'GET_COUNTRY_LIST' :
      return ({
        ...state,
        countryList : action.countryList
      })

    default:
      return state
  }
}

export default appReducer;