import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProduct,
  setCategoryType,
  setEditableProduct,
} from "../../../store/product/productSlice";
import "./Product.component.scss";
import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  Pagination,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { products, categoryType } = useSelector((state) => state.productSlice);
  const [page, setpage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProduct({ categoryType, page }));
  }, [categoryType, page]);

  console.log(products);
  return (
    <>
      <h2 className="text-center text-primary my-2">All Products List</h2>
      <div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Category Types
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={categoryType}
            onChange={(e) => dispatch(setCategoryType(e.target.value))}
          >
            <FormControlLabel
              value="product"
              control={<Radio />}
              label="product"
            />
            <FormControlLabel
              value="medicine"
              control={<Radio />}
              label="medicine"
            />
            <FormControlLabel
              value="accessories"
              control={<Radio />}
              label="accessories"
            />
          </RadioGroup>
        </FormControl>
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
                        onClick={() => {
                          dispatch(setEditableProduct(product));
                          navigate("/productForm");
                        }}
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
          {/* -----pgination-----  */}
          <Pagination page={page} setpage={setpage} array={products} />
        </div>
      </div>
    </>
  );
}

export default ProductList;
