import "./suplierform.scss";
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
  addCategory,
  editCategory,
  getAllCategoriesByType,
  resetEditableCategory,
  setCategoryType,
} from "../../../store/category/categorySlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function SuplierForm() {
  const { editableCategory } = useSelector((state) => state.categorySlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      fullName: "",
      category_type: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      (editableCategory
        ? dispatch(editCategory(values))
        : dispatch(addCategory(values))
      ).then(() => {
        dispatch(getAllCategoriesByType(values.category_type));
        dispatch(resetEditableCategory(null));
        dispatch(setCategoryType(values.category_type));
        // formik.handleReset();
      });
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
        <span>{editableCategory ? "Edit" : "Add"} New Suplier </span>
        {editableCategory ? (
          <AddCircleOutlineIcon
            onClick={() => dispatch(resetEditableCategory(null))}
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
          id="fullName"
          label="fullName"
          name="fullName"
          autoFocus
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="phoneNumber"
          label="phoneNumber"
          name="phoneNumber"
          autoFocus
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="whatsAppNumber"
          label="whatsAppNumber"
          name="whatsAppNumber"
          autoFocus
          value={formik.values.whatsAppNumber}
          onChange={formik.handleChange}
          error={formik.touched.whatsAppNumber && Boolean(formik.errors.whatsAppNumber)}
          helperText={formik.touched.whatsAppNumber && formik.errors.whatsAppNumber}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          autoFocus
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        

        <Button type="submit">{editableCategory ? "Edit" : "save"}</Button>
      </form>
    </div>
  );
}

export default SuplierForm;
