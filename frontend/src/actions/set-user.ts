import { IUser } from '../interfaces';

export const setUser = (user: IUser) => ({type: 'SET_USER', user})