import "./addcategory.scss";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../store/category/categorySlice";

function Addcategory() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      category_type: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(addCategory(values));
    },
  });

  return (
    <div className="Addcategory-container">
      <h2>Add New Category</h2>
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

        <TextField
          margin="normal"
          required
          fullWidth
          id="category_type"
          label="Category Type"
          name="category_type"
          value={formik.values.category_type}
          onChange={formik.handleChange}
          error={
            formik.touched.category_type && Boolean(formik.errors.category_type)
          }
          helperText={
            formik.touched.category_type && formik.errors.category_type
          }
        />

        <Button type="submit">save</Button>
      </form>
    </div>
  );
}

export default Addcategory;
