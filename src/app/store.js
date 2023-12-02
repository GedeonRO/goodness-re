import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cart_reducer';
import drawerReducer from './reducers/drawer_reducer';
import categoryReducer from './reducers/category_reducer';
import productReducer from './reducers/product_reducer';
import itemReducer from './reducers/item_reducer';
import subCategoryReducer from './reducers/subcategory_reducer';
import stepReducer from './reducers/step_reducer';
import userReducer from './reducers/user_reducer';
import serviceReducer from "./reducers/service_reducer";
import categoryServiceReducer from "./reducers/service_category_reducer";
import brandReducer from "./reducers/brand_reducer";
import sectionReducer from "./reducers/section_reducer";

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    cart: cartReducer,
    step: stepReducer,
    user: userReducer,
    item: itemReducer,
    brand: brandReducer,
    drawer: drawerReducer,
    service: serviceReducer,
    product: productReducer,
    section: sectionReducer,
    category: categoryReducer,
    subcategory: subCategoryReducer,
    servicecategory: categoryServiceReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//         category: categoryReducer,
//         product: productReducer,
//         item: itemReducer,
//         subcategory: subCategoryReducer,
//     },
// });

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store)

// export default store;