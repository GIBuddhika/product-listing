import { configureStore } from '@reduxjs/toolkit'
import CategoriesAll from './Reducers/Categories/CategoriesAll'
import Api from './Api'
import { combineReducers } from 'redux';
import ProductsAll from './Reducers/Products/ProductsAll';
import CategoryActive from './Reducers/Categories/CategoryActive';
import ProductsOne from './Reducers/Products/ProductsOne';

const rootReducer = combineReducers({
    categories:
        combineReducers({
            all: CategoriesAll,
            active: CategoryActive,
        }),
    products:
        combineReducers({
            all: ProductsAll,
            one: ProductsOne,
        }),
})

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api),
})