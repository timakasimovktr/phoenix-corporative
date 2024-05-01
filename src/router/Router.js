import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { APP_ROUTES } from "./Route.js";
import Main from "../components/Main/Main";
import Catalog from "../components/Catalog/Catalog";
import Product from "../components/Product/Product";
import Contacts from "../components/Contacts/Contacts";
import Collection from "../components/Collection/Collection";
import Marketing from "../components/Marketing/Marketing";
import Logistics from "../components/Logistics/Logistics";
import CallCenter from "../components/Callcenter/Callcenter";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.WELCOME} element={<Main />} />
        <Route path={APP_ROUTES.CATALOG} element={<Catalog />} />
        <Route path={APP_ROUTES.COLLECTION} element={<Collection />} />
        <Route path={APP_ROUTES.PRODUCT} element={<Product />} />
        <Route path={APP_ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={APP_ROUTES.MARKETING} element={<Marketing />} />
        <Route path={APP_ROUTES.LOGISTICS} element={<Logistics />} />
        <Route path={APP_ROUTES.CALLCENTER} element={<CallCenter />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default Router;
