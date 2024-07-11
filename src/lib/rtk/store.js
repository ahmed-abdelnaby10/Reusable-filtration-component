import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import productsSlice from "./slices/productsSlice";

const presistConfig = {
    key: "products-filtration",
    storage,
};

const rootReducer = combineReducers({
    products: productsSlice
});

const presistedReducers = persistReducer(presistConfig, rootReducer);

export const store = configureStore({
    reducer: presistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
