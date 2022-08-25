import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllCategoriesByType } from "../../../store/category/categorySlice";
import "./catigoryesLisy.component";

function CatigoryesLisy() {
  const { categories } = useSelector((state) => state.categorySlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesByType("product"));
  }, []);

  console.log("categories", categories);

  return (
    <div>
      <>
        <h2 className="text-center text-primary my-2">All categoryes</h2>
        <div className="">
          <>
            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>Category Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  {categories?.map((cat, index) => (
                    <tr key={cat._id} className="rowtable">
                      <td>{index + 1}</td>
                      <td>{cat.name}</td>
                      <td>
                        <button className="acceptBtn mx-2">
                          <i className="fa-solid fa-user-check"></i>
                        </button>
                        <button className="blockBtn ">
                          <i className="fa-solid fa-user-slash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
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

export default CatigoryesLisy;
