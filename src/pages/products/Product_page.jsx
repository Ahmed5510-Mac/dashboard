import React from "react";
import AddProduct from "../../components/Products/AddProduct/AddProduct";
import ProductList from "../../components/Products/ProductList/Product.component";
import "./Product.scss";

function Product_page() {
  return (
    <>
      <AddProduct />
      <ProductList />
    </>
  );
}

export default Product_page;
