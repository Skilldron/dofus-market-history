import { RootState } from '@/app/config/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface PreferencesState {
  opacity: number
}

// Define the initial state using that type
const initialState: PreferencesState = {
  opacity: 100
}

export const counterSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setOpacity: (state, action: PayloadAction<number> ) => {
      state.opacity = action.payload
    },
  }
})

export const { setOpacity } = counterSlice.actions
export default counterSlice.reducer

// Other code such as selectors can use the imported `RootState` type
export const selectUsersPreferences = (state: RootState) => state.usersPreferences
export const selectOpacity = (state: RootState) => state.usersPreferences.opacity
