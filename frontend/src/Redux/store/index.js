import { configureStore, combineReducers} from '@reduxjs/toolkit'
// import { encryptTransform } from 'redux-persist-transform-encrypt';
import { persistStore,
         persistReducer,
         FLUSH,
         REHYDRATE,
         PAUSE,
         PERSIST,
         PURGE,
         REGISTER, } from 'redux-persist'
import { pizzaApi } from '../api/pizzas'
import storage from 'redux-persist/lib/storage'
import cartSlice from '../Slices/cartSlice'
import filterSortSlice from '../Slices/filterSortSlice'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
    // transforms: [
    //     encryptTransform({
    //       secretKey: 'my-super-secret-key',
    //       onError: function (error) {
    //         console.log('error', error)
    //       },
    //     }),
    //   ],
}

const reducers = combineReducers({
    cart: cartSlice,
    filterSort: filterSortSlice,
    [pizzaApi.reducerPath]: pizzaApi.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pizzaApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
export default store