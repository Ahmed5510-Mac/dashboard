import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProduct,
  setEditableProduct,
} from "../../../store/product/productSlice";
import "./Product.component.scss";
import { Avatar } from "@mui/material";

function ProductList() {
  const { products } = useSelector((state) => state.productSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  console.log(products);
  return (
    <div className="wrapper">
      <>
        <h2 className="text-center text-primary my-2">All Products List</h2>
        <div className="">
          <>
            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Iamge</th>
                    <th>unit price</th>
                    <th>stock amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  {products?.map((product, index) => (
                    <tr key={product._id} className="rowtable">
                      <td>{index + 1}</td>
                      <td>{product.name}</td>
                      <td>{product?.subCategory?.name}</td>
                      <td>
                        <Avatar
                          alt="Remy Sharp"
                          src={product?.images[0]?.url}
                          sx={{ width: 56, height: 56 }}
                        />
                      </td>
                      <td>{product.unitPrice}</td>
                      <td>{product.stockAmount}</td>

                      <td>
                        <span className="btn-edite">
                          <EditIcon
                            onClick={() =>
                              dispatch(setEditableProduct(product))
                            }
                          />
                        </span>
                        <span className="btn-delete">
                          <DeleteForeverIcon
                            onClick={() =>
                              dispatch(
                                deleteProduct({
                                  id: product._id,
                                })
                              ).then(() => dispatch(getAllProduct()))
                            }
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </>
    </div>
  );
}

export default ProductList;
