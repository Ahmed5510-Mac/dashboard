import "./addbarnd.scss";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addBrand,
  editBrand,
  getAllBrandsByType,
  resetEditableBrand,
  setBrandType,
} from "../../../store/category/categorySlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function BrandForm() {
  const { editablebrand } = useSelector((state) => state.categorySlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      category_type: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      (editablebrand
        ? dispatch(editBrand(values))
        : dispatch(addBrand(values))
      ).then(() => {
        dispatch(getAllBrandsByType(values.category_type));
        dispatch(resetEditableBrand(null));
        dispatch(setBrandType(values.category_type));
        // formik.handleReset();
      });
    },
  });

  useEffect(() => {
    if (!editableBrand) formik.handleReset();
    else {
      formik.setFieldValue("name", editablebrand?.name);
    }
  }, [editablebrand]);

  return (
    <div className="Addcategory-container">
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{editablebrand ? "Edit" : "Add"} New Brand </span>
        {editablebrand ? (
          <AddCircleOutlineIcon
            onClick={() => dispatch(resetEditableBrand(null))}
            fontSize="large"
          />
        ) : (
          ""
        )}
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="brand"
          label="Brand"
          name="Brand"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Button type="submit">{editablebrand ? "Edit" : "save"}</Button>
      </form>
    </div>
  );
}

export default BrandForm;
