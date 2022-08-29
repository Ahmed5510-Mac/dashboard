import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React, { useEffect } from "react";
import "./addproduct.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import {
  addProduct,
  editProduct,
  getAllProduct,
  resetEditableProduct,
} from "../../../store/product/productSlice";
import { useDispatch, useSelector } from "react-redux";

function AddProduct() {
  const { editableProduct } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      subCategory: {
        id: "",
        name: "",
      },
      brand: {
        id: "",
        name: "",
      },
      description: "",
      offer: "",
      images: [
        {
          url: "",
        },
      ],
      unitPrice: 0,
      basePrice: 0,
      stockAmount: 0,
      creditDiscount: 0,
      cashDiscount: 0,
      madeIn: "",
      productionDate: "",
      expireDate: "",
      reviews: {
        userId: "",
        reviewText: "",
        reviewRate: 0,
      },
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      (editableProduct
        ? dispatch(editProduct(values))
        : dispatch(addProduct(values))
      ).then(() => {
        dispatch(getAllProduct());
        dispatch(resetEditableProduct(null));
      });
    },
  });

  useEffect(() => {
    if (!editableProduct) formik.handleReset();
    else {
      formik.setFieldValue("name", editableProduct?.name);
      formik.setFieldValue("id", editableProduct?._id);
    }
  }, [editableProduct]);

  return (
    <div className="Addcategory-container">
      <h2>
        <span>{editableProduct ? "Edit" : "Add"} New Product </span>
        {editableProduct ? (
          <AddCircleOutlineIcon
            onClick={() => dispatch(resetEditableProduct(null))}
            fontSize="large"
          />
        ) : (
          ""
        )}
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="product-info">
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          {/* ----------------------- */}
          <FormControl fullWidth>
            <InputLabel id="subCategory-label">Sub Category</InputLabel>
            <Select
              labelId="subCategory-label"
              id="subCategory"
              label="type"
              name="subCategory"
            >
              <MenuItem value={"medicine"}>medicine</MenuItem>
              <MenuItem value={"tools"}>tools</MenuItem>
            </Select>
          </FormControl>
          {/* ----------------------- */}
          <FormControl fullWidth>
            <InputLabel id="brand-label">Product</InputLabel>
            <Select labelId="brand-label" id="brand" label="type" name="brand">
              <MenuItem value={"amaino"}>amaino</MenuItem>
              <MenuItem value={"drugs"}>drugs</MenuItem>
            </Select>
          </FormControl>
          {/* ----------------------- */}
          <TextareaAutosize
            aria-label="description"
            placeholder="description"
            name="description"
            style={{ width: "100%" }}
          />
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="offer"
            label="offer"
            name="offer"
            autoFocus
          />
          s {/* ----------------------- */}
          <div className="form-group">
            <span class="label">image</span>
            <input type="file" />
          </div>
        </div>
        <div className="prduct-price">
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="unitPrice"
            label="unit price"
            name="unitPrice"
            autoFocus
          />

          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="basePrice"
            label="base price"
            name="basePrice"
            autoFocus
          />
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="stockAmount"
            label="stock Amount"
            name="stockAmount"
            autoFocus
          />

          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="creditDiscount"
            label="credit Discount"
            name="creditDiscount"
            autoFocus
          />
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="cashDiscount"
            label="cash Discount"
            name="cashDiscount"
            autoFocus
          />
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="madeIn"
            label="made In"
            name="madeIn"
            autoFocus
          />
          {/* ----------------------- */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="productionDate"
            label="production Date"
            name="productionDate"
            autoFocus
          />
          {/* ----------------------- */}
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="expire Date"
              inputFormat="MM/dd/yyyy"
              // value={value}
              // onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>

        <Button type="submit">save</Button>
      </form>
    </div>
  );
}

export default AddProduct;
