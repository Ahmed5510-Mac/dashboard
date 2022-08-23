import "./addsubcategory.scss";
import React, { useState } from "react";

function AddSubCategory() {
  const [showinput, setshowinput] = useState(false);
  function toggleinput() {
    setshowinput(!showinput);
    console.log("ahmed");
  }
  return (
    <div className="Addcategory-container">
      <h2>Add New Sub Category</h2>
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
        <div className="form-group">

          {showinput && (<><span class="label">ID</span><input type="text" placeholder="Enter id" /></>)
           }
          
        </div>
        <div className="form-group">
          <span class="label">Name</span>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <span class="label">category</span>
          <select name="" id="">
            <option value="med">med</option>
            <option value="hei">hei</option>
            <option value="leq">leq</option>
          </select>
        </div>
        <div className="form-group">
          <span class="label"> product </span>
          <input type="text" placeholder="Enter type" />
        </div>
      </form>
    </div>
  );
}

export default AddSubCategory;
