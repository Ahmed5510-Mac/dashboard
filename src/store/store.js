import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import doctorSlice from "./doctor/doctorSlice";
import pharmacistSlice from "./pharmacist/pharmacistSlice";
import userSharedSlice from "./userShared/userSharedSlice";
import loginSlice from "./login/loginSlice";
import auth from "./auth/authSlice";
import getTaskSlice from "./task/taskSlice";
import categorySlice from "./category/categorySlice";
import subCategorySlice from "./supCategories/supcategoriesSlice";
import brandSlice from "./brand/brand.slice";
import productSlice from "./product/productSlice";
import supplierSlice from "./supplier/supplierSlice";
import orderSlice from "./order/orderSlice";

export const store = configureStore({
  middleware: (applyMiddleware) =>
    applyMiddleware({
      serializableCheck: false,
    }),
  reducer:{
    doctorSlice,
    pharmacistSlice,
    userSharedSlice,
    loginSlice,
    auth,
    getTaskSlice,
    categorySlice,
    subCategorySlice,
    brandSlice,
    productSlice,
    supplierSlice,
    orderSlice
  },
});
