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
          {" "}
          {showinput ? "save" : "Edite"}
        </div>
        <div className="product-info">
        <div className="form-group">
          {showinput && (
            <>
              <span class="label">ID</span>
              <input type="text" placeholder="Enter id" />
            </>
          )}
        </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">Name</span>
            <input type="text" placeholder="Enter name" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">subCategory</span>
            <select name="" id="">
              <option value="med">med</option>
              <option value="hgi">hgi</option>
            </select>
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">brand</span>
            <select name="" id="">
              <option value="med">amagaum</option>
              <option value="hgi">softin</option>
            </select>
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">description</span>
            <input type="textarea" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">offer</span>
            <input type="text" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">image</span>
            <input type="file" />
          </div>
        </div>
        <div className="prduct-price">
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">unit Price</span>
            <input type="text" />
          </div>

          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">base Price</span>
            <input type="text" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">stock Amount</span>
            <input type="text" />
          </div>

          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">credit Discount</span>
            <input type="text" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">cash Discount</span>
            <input type="text" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">madeIn</span>
            <input type="text" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">productionDate</span>
            <input type="text" />
          </div>
          {/* ----------------------- */}
          <div className="form-group">
            <span class="label">expireDate</span>
            <input type="date" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
