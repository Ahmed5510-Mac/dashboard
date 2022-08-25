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
import React, { useState } from "react";
import "./addproduct.scss";

function AddProduct() {
  const [showinput, setshowinput] = useState(false);
  function toggleinput() {
    setshowinput(!showinput);
    console.log("ahmed");
  }
  return (
    <div className="Addcategory-container">
      <h2>Add New Product</h2>
      <form>
        <div
          className="edite"
          onClick={() => {
            toggleinput();
          }}
        >
          {showinput ? "save" : "Edite"}
        </div>
        <div className="product-info">
          {/* {showinput && (
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="product id"
              name="id"
              autoFocus
            />
          )} */}
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
            <InputLabel id="brand-label">Brand</InputLabel>
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
      </form>
    </div>
  );
}

export default AddProduct;
