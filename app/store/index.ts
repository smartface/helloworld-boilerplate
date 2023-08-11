import { combineReducers } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import {baseAPI} from './baseApi';
import userSlice from './userSlice';


const store = configureStore({
  reducer: {
    user: userSlice,
    [baseAPI.reducerPath]: baseAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseAPI.middleware),
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store