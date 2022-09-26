import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProduct,
  searchProductsByName,
  setCategoryType,
  setEditableProduct,
} from "../../../store/product/productSlice";
import "./Product.component.scss";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { getAllCategoriesByType } from "../../../store/category/categorySlice";

function ProductList() {
  const { products, categoryType } = useSelector((state) => state.productSlice);
  const { categories } = useSelector((state) => state.categorySlice);
  const [page, setpage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      categoryId: "",
    },
    onSubmit: (values) => {
      console.log(values);

      dispatch(
        searchProductsByName({
          categoryId: values.categoryId,
          name: values.name,
        })
      ).then((res) => {
        console.log(res);

        // dispatch(getAllProduct());
      });
    },
  });

  useEffect(() => {
    dispatch(getAllProduct({ categoryType, page }));
  }, [categoryType, page]);

  useEffect(() => {
    dispatch(getAllCategoriesByType(categoryType));
  }, [categoryType]);

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

        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "60%",
            margin: "0 auto",
            gap: '18px'
          }}
        >
          <div style={{display: 'flex'}}>
            <TextField
              id="search"
              label="Search"
              variant="outlined"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={
                formik.touched.name && Boolean(formik.errors.name)
              }
              style={{flexGrow: 1, width: '500px'}}
            />
            <FormControl style={{width: '120px'}}>
              <InputLabel id="category-label">category</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                label="Category"
                name="categoryId"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
                error={
                  formik.touched.categoryId && Boolean(formik.errors.categoryId)
                }
              >
                {categories.map((cat) => (
                  <MenuItem value={`${cat?._id}`}>{cat.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <Button type="submit" variant="contained" color="success">
            Search
          </Button>
        </form>
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
                          // eslint-disable-next-line no-restricted-globals
                          confirm('are you sure you want to delete this product ?') ?
                           dispatch(
                            deleteProduct({
                              id: product._id,
                            })
                          ).then(() => dispatch(getAllProduct())) : null
                        }
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* -----pgination-----  */}
          <Pagination count={10} page={page} onChange={(_, page) => setpage(page)} />
        </div>
      </div>
    </>
  );
}

export default ProductList;
