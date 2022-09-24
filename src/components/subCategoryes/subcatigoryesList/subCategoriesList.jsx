import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// import {
//   deleteSupCategory,
//   getAllCategoriesByType,
//   setSupCategoryType,
//   setEditableSupCategory,
// } from "../../../store/supCategories/supcategoriesSlice.js";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  getAllSubCategories,
  setEditableSubCategory,
  deleteSubCategory,
} from "../../../store/supCategories/supcategoriesSlice";
import { useEffect } from "react";
import "./supcategories.scss";
import { useParams } from "react-router-dom";
function SubCategories() {
  const { id } = useParams();
  const { subCategories } = useSelector((state) => state.subCategorySlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubCategories(id));
  }, []);
  return (
    <div>
      <>
        <h2 className="text-center text-primary my-2">All subcategories</h2>
        <div className="">
          <>
            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>index</th>
                    <th>subSupCategory Name</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  {subCategories?.map((subcat, index) => (
                    <tr key={subcat._id} className="rowtable">
                      <td>{index + 1}</td>
                      <td>{subcat.name}</td>
                      <td>
                        <Avatar
                            alt={subcat.name}
                            src={subcat?.image?.url}
                            sx={{ width: 56, height: 56 }}
                          />
                      </td>
                      <td>
                        <span className="btn-edite">
                          <EditIcon
                            onClick={() =>
                              dispatch(setEditableSubCategory(subcat))
                            }
                          />
                        </span>
                        <span>
                          <DeleteForeverIcon
                            onClick={() =>
                              dispatch(
                                deleteSubCategory({ id: subcat._id })
                              ).then(() => {
                                dispatch(getAllSubCategories(id));
                              })
                            }
                          />
                        </span>
                        <span className="btn-delete">
                          {/* <DeleteForeverIcon 
                          onClick={() =>
                           // dispatch(
                            //   deleteSupCategory({
                            //     id: subcat._id,
                            //   })
                            // ).then(() =>
                            //   dispatch()
                            // )
                          // }
                          /> */}
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

export default SubCategories;
