import { configureStore } from '@reduxjs/toolkit'
import authReducee from '../features/users/authSlice'

export const store = configureStore({
  reducer: {
    auth:authReducee,
  },
})