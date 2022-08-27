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
<<<<<<< HEAD
import {
  addSubCategory,
  resetEditableSubCategory,
  editSubCategory,
  getAllSubCategories,
  setSubCategoryType,
} from "../../../store/supCategories/supcategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useParams } from "react-router-dom";
function SubCategoryForm() {
  const { editableSubCategory } = useSelector(
    (state) => state.subCategorySlice
  );
  const { categories } = useSelector((state) => state.categorySlice);
  const dispatch = useDispatch();
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      name: "",
      category: id,
=======
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function SubCategoryForm() {
  const { editableCategory } = useSelector((state) => state.categorySlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
      products: [],
      medicines: [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
<<<<<<< HEAD
      (editableSubCategory
        ? dispatch(editSubCategory(values))
        : dispatch(addSubCategory(values))
      ).then(() => {
        dispatch(getAllSubCategories(values.category));
        dispatch(resetEditableSubCategory(null));
        dispatch(setSubCategoryType(values.category));
        formik.handleReset();
      });
=======
      // (editableCategory
      //   ? dispatch(editCategory(values))
      //   : dispatch(addCategory(values))
      // ).then(() => {
      //   dispatch(getAllCategoriesByType(values.category_type));
      //   dispatch(resetEditableCategory(null));
      //   dispatch(setCategoryType(values.category_type));
      //   // formik.handleReset();
      // });
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
    },
  });

  useEffect(() => {
<<<<<<< HEAD
    if (!editableSubCategory) formik.handleReset();
    else {
      formik.setFieldValue("id", editableSubCategory?._id);
      formik.setFieldValue("name", editableSubCategory?.name);
      formik.setFieldValue("category", editableSubCategory?.category);
    }
  }, [editableSubCategory]);
=======
    if (!editableCategory) formik.handleReset();
    else {
      formik.setFieldValue("id", editableCategory?._id);
      formik.setFieldValue("name", editableCategory?.name);
      formik.setFieldValue("category_type", editableCategory?.category_type);
    }
  }, [editableCategory]);
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af

  return (
    <div className="Addcategory-container">
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
<<<<<<< HEAD
        <span>{editableSubCategory ? "Edit" : "Add"} New subCategory </span>
        {editableSubCategory ? (
=======
        <span>{editableCategory ? "Edit" : "Add"} New Category </span>
        {editableCategory ? (
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
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
<<<<<<< HEAD
          <InputLabel id="category-label">category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            label="Category"
            name="category"
            disabled={!editableSubCategory}
            value={formik.values.category}
            onChange={formik.handleChange}
            error={formik.touched.category && Boolean(formik.errors.category)}
          >
            {categories.map((cat) => (
              <MenuItem value={`${cat._id}`}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button type="submit">{editableSubCategory ? "Edit" : "save"}</Button>
=======
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
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
      </form>
    </div>
  );
}

export default SubCategoryForm;
