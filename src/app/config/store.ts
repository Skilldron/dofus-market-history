import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersPreferencesReducer from "@/app/features/preferences/preferencesSlice";

const rootReducer = combineReducers({
  usersPreferences: usersPreferencesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
