import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const ProductList = React.lazy(() => import("./pages/Product/List"));
const ProductSingle = React.lazy(() => import("./pages/Product/Single"));
const ProductCreate = React.lazy(() => import("./pages/Product/Create"));
const ProductUpdate = React.lazy(() => import("./pages/Product/Update"));

const routes = [
  { path: "/product/single/:productId", component: ProductSingle },
  { path: "/product/create", component: ProductCreate },
  { path: "/product/update/:productId", component: ProductUpdate },
  { path: "/product", component: ProductList },
  { path: "/", component: Home },
];

export default routes;
