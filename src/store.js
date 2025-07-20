// store.js
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './Slices/authSlice'
import { combineReducers } from 'redux'

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,
})

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist auth
}

// Wrap rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist needs this
    }),
})

// Create persistor
const persistor = persistStore(store)

// ✅ Make sure BOTH are exported
export { store, persistor }
