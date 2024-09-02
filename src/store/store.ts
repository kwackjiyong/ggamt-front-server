import { configureStore } from '@reduxjs/toolkit'
import baramHistorySlice from './features/baramHistorySlice'

const store = configureStore({
  reducer: {
    baramHistory: baramHistorySlice
  },
})

export default store