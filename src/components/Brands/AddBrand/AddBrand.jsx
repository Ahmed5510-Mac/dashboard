import "./addbarnd.scss";
import React, { useState } from "react";

function AddBrand() {
  const [showinput, setshowinput] = useState(false);
  function toggleinput() {
    setshowinput(!showinput);
    console.log("ahmed");
  }
  return (
    <div className="Addcategory-container">
      <h2>Add New Brand</h2>
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
        
      </form>
    </div>
  );
}

export default AddBrand;
