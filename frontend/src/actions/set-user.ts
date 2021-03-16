import { IUser } from '../interfaces';

export const setUser = (user: IUser | null) => ({type: 'SET_USER', user})