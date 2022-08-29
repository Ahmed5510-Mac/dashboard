import "./suplierform.scss";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addSupplier,
  editSupplier,
  getAllSupplier,
  resetEditableSupplier,
} from "../../../store/supplier/supplierSlice";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function SuplierForm() {
  const { editableSupplier } = useSelector((state) => state.supplierSlice);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "",
      fullName: "",
      phoneNumber: "",
      whatsAppNumber: "",
      email: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      (editableSupplier
        ? dispatch(editSupplier(values))
        : dispatch(addSupplier(values))
      ).then(() => {
        dispatch(getAllSupplier());
        dispatch(resetEditableSupplier(null));
        // formik.handleReset();
      });
    },
  });

  useEffect(() => {
    if (!editableSupplier) formik.handleReset();
    else {
      formik.setFieldValue("id", editableSupplier?._id);
      formik.setFieldValue("fullName", editableSupplier?.fullName);
      formik.setFieldValue("phoneNumber", editableSupplier?.phoneNumber);
      formik.setFieldValue("whatsAppNumber", editableSupplier?.whatsAppNumber);
      formik.setFieldValue("email", editableSupplier?.email);
    }
  }, [editableSupplier]);

  return (
    <div className="Addsupplier-container">
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{editableSupplier ? "Edit" : "Add"} New Suplier </span>
        {editableSupplier ? (
          <AddCircleOutlineIcon
            onClick={() => dispatch(resetEditableSupplier(null))}
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
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
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
          error={
            formik.touched.whatsAppNumber &&
            Boolean(formik.errors.whatsAppNumber)
          }
          helperText={
            formik.touched.whatsAppNumber && formik.errors.whatsAppNumber
          }
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

        <Button type="submit">{editableSupplier ? "Edit" : "save"}</Button>
      </form>
    </div>
  );
}

export default SuplierForm;
