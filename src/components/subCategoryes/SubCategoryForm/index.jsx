import "./addsubcategory.scss";
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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function SubCategoryForm() {
  const { editableCategory } = useSelector((state) => state.categorySlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      products: [],
      medicines: [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      // (editableCategory
      //   ? dispatch(editCategory(values))
      //   : dispatch(addCategory(values))
      // ).then(() => {
      //   dispatch(getAllCategoriesByType(values.category_type));
      //   dispatch(resetEditableCategory(null));
      //   dispatch(setCategoryType(values.category_type));
      //   // formik.handleReset();
      // });
    },
  });

  useEffect(() => {
    if (!editableCategory) formik.handleReset();
    else {
      formik.setFieldValue("id", editableCategory?._id);
      formik.setFieldValue("name", editableCategory?.name);
      formik.setFieldValue("category_type", editableCategory?.category_type);
    }
  }, [editableCategory]);

  return (
    <div className="Addcategory-container">
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{editableCategory ? "Edit" : "Add"} New Category </span>
        {editableCategory ? (
          <AddCircleOutlineIcon
            // onClick={() => dispatch(resetEditableCategory(null))}
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
          id="name"
          label="Name"
          name="name"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />

        <FormControl fullWidth>
          <InputLabel id="category_type-label">Category Type</InputLabel>
          <Select
            labelId="category_type-label"
            id="category_type"
            label="Category Type"
            name="category_type"
            value={formik.values.category_type}
            onChange={formik.handleChange}
            error={
              formik.touched.category_type &&
              Boolean(formik.errors.category_type)
            }
          >
            <MenuItem value={"product"}>product</MenuItem>
            <MenuItem value={"medicine"}>medicine</MenuItem>
            <MenuItem value={"accessories"}>accessories</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit">{editableCategory ? "Edit" : "save"}</Button>
      </form>
    </div>
  );
}

export default SubCategoryForm;
