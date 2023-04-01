import { configureStore } from '@reduxjs/toolkit'
import CategoriesAll from './Reducers/Categories/CategoriesAll'
import Api from './Api'
import { combineReducers } from 'redux';
import ProductsAll from './Reducers/Products/ProductsAll';

const rootReducer = combineReducers({
    categories: CategoriesAll,
    products: ProductsAll,
})

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api),
})