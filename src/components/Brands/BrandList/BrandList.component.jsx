import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBrand,
  getAllBrand,
  setEditableBrand,
} from "../../../store/brand/brand.slice";
import "./BrandList.component";

function BrandList() {
  const { brands } = useSelector((state) => state.brandSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  return (
    <div>
      <>
        <h2 className="text-center text-primary my-2">All Brands List</h2>
        <div className="">
          <>
            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>index</th>
                    <th>Brand Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  {brands?.map((brand, index) => (
                    <tr key={brand._id} className="rowtable">
                      <td>{index + 1}</td>
                      <td>{brand.name}</td>
                      <td>
                        <span className="btn-edite">
                          <EditIcon
                            onClick={() => dispatch(setEditableBrand(brand))}
                          />
                        </span>
                        <span className="btn-delete">
                          <DeleteForeverIcon
                            onClick={() =>
                              dispatch(
                                deleteBrand({
                                  id: brand._id,
                                })
                              ).then(() => dispatch(getAllBrand()))
                            }
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </>
    </div>
  );
}

export default BrandList;
