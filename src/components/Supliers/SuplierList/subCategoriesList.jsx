import React from "react";
<<<<<<< HEAD:src/components/Supliers/SuplierList/SupliersList.jsx
import "./suplierLis.scss";

function SuppliersList() {
=======
import "./subCategoriesList";

function SubCategoriesList() {
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af:src/components/Supliers/SuplierList/subCategoriesList.jsx
  return (
    <div>
      <>
        <h2 className="text-center text-primary my-2">All Suppliers List</h2>
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

<<<<<<< HEAD:src/components/Supliers/SuplierList/SupliersList.jsx
export default SuppliersList;
=======
export default SubCategoriesList;
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af:src/components/Supliers/SuplierList/subCategoriesList.jsx
