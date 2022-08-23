import React from "react";
import "./Product.component";

function ProductList() {
  return (
    <div className="wrapper">
      <>
        <h2 className="text-center text-primary my-2">All Brands List</h2>
        <div className="">
          <>
            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>Category ID </th>
                    <th> Category Name</th>
                    <th>Category Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  <tr className="rowtable">
                    <td>1</td>
                    <td>malcone</td>
                    <td>medcine</td>
                    <td>
                      <button className="acceptBtn mx-2">
                        <i className="fa-solid fa-user-check"></i>
                      </button>
                      <button className="blockBtn ">
                        <i className="fa-solid fa-user-slash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
          )
        </div>
      </>
    </div>
  );
}

export default ProductList;
