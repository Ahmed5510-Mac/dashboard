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
import {
  addSubCategory,
  resetEditableSubCategory,
  editSubCategory,
  getAllSubCategories,
  setSubCategoryType,
  addImageToSubCategory,
} from "../../../store/supCategories/supcategoriesSlice";
// Import React FilePond
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useDispatch, useSelector } from "react-redux";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useParams } from "react-router-dom";

function SubCategoryForm() {
  const [files, setFiles] = useState([]);
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
      products: [],
      medicines: [],
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      (editableSubCategory
        ? dispatch(editSubCategory(values))
        : dispatch(addSubCategory(values))
      ).then((res) => {
        const data = new FormData();
        data.set('image', files[0].file)

        dispatch(addImageToSubCategory({id: res.payload._id, data}))

        dispatch(getAllSubCategories(values.category));
        dispatch(resetEditableSubCategory(null));
        dispatch(setSubCategoryType(values.category));
        formik.handleReset();
      });
    },
  });

  useEffect(() => {
    if (!editableSubCategory) formik.handleReset();
    else {
      formik.setFieldValue("id", editableSubCategory?._id);
      formik.setFieldValue("name", editableSubCategory?.name);
      formik.setFieldValue("category", editableSubCategory?.category);
    }
  }, [editableSubCategory]);

  return (
    <div className="Addcategory-container">
      <h2
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{editableSubCategory ? "Edit" : "Add"} New subCategory </span>
        {editableSubCategory ? (
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

        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={1}
          name="files"
          labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
        />

        <Button type="submit">{editableSubCategory ? "Edit" : "save"}</Button>
      </form>
    </div>
  );
}

export default SubCategoryForm;
