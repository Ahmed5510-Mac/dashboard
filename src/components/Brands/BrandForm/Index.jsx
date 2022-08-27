import "./addbarnd.scss";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  getAllBrand,
  addBrand,
  editBrand,
  resetEditableBrand,
} from "../../../store/brand/brand.slice";

function BrandForm() {
  const { editableBrand } = useSelector((state) => state.brandSlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      (editableBrand
        ? dispatch(editBrand(values))
        : dispatch(addBrand(values))
      ).then(() => {
        dispatch(getAllBrand());
        dispatch(resetEditableBrand(null));
      });
    },
  });

  useEffect(() => {
    if (!editableBrand) formik.handleReset();
    else {
      formik.setFieldValue("name", editableBrand?.name);
      formik.setFieldValue("id", editableBrand?._id);
    }
  }, [editableBrand]);

  return (
    <div className="Addcategory-container">
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{editableBrand ? "Edit" : "Add"} New Brand </span>
        {editableBrand ? (
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
          id="name"
          label="Brand"
          name="name"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Button type="submit">{editableBrand ? "Edit" : "save"}</Button>
      </form>
    </div>
  );
}

export default BrandForm;
