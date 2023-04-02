import { configureStore } from '@reduxjs/toolkit'
import CategoriesAll from './Reducers/Categories/CategoriesAll'
import Api from './Api'
import { combineReducers } from 'redux';
import ProductsAll from './Reducers/Products/ProductsAll';
import CategoryActive from './Reducers/Categories/CategoryActive';
import ProductsOne from './Reducers/Products/ProductsOne';
import Common from './Reducers/Products/Common';

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
            common: Common
        }),
})

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Api),
})