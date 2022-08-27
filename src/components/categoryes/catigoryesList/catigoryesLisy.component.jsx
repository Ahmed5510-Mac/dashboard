import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
=======
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
import {
  deleteCategory,
  getAllCategoriesByType,
  setCategoryType,
  setEditableCategory,
} from "../../../store/category/categorySlice";
import "./catigoryesLisy.component";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
<<<<<<< HEAD
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./catigoryesLisy.component.scss";
=======

>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
function CatigoryesLisy() {
  const { categories, categoryType } = useSelector(
    (state) => state.categorySlice
  );
<<<<<<< HEAD
=======

>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesByType(categoryType));
  }, [categoryType]);

  return (
    <div>
      <>
        <h2 className="text-center text-primary my-2">All categories</h2>
        <div className="">
          <>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Category Types
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={categoryType}
                onChange={(e) => dispatch(setCategoryType(e.target.value))}
              >
                <FormControlLabel
                  value="product"
                  control={<Radio />}
                  label="product"
                />
                <FormControlLabel
                  value="medicine"
                  control={<Radio />}
                  label="medicine"
                />
                <FormControlLabel
                  value="accessories"
                  control={<Radio />}
                  label="accessories"
                />
              </RadioGroup>
            </FormControl>
            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>index</th>
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
<<<<<<< HEAD
                        <span className="btn-edite">
                          <EditIcon
                            onClick={() =>
                              dispatch(
                                setEditableCategory({
                                  ...cat,
                                  category_type: categoryType,
                                })
                              )
                            }
                          />
                        </span>
                        <span className="btn-delete">
                          <DeleteForeverIcon
                            onClick={() =>
                              dispatch(
                                deleteCategory({
                                  id: cat._id,
                                })
                              ).then(() =>
                                dispatch(getAllCategoriesByType(categoryType))
                              )
                            }
                          />
                        </span>
                        <span className="btn-subcategories">
                          <NavLink to ={`/subcategory/${cat._id}?category_type=${categoryType}`}>
                          <VisibilityIcon />
                          </NavLink>
                        </span>
=======
                        <EditIcon
                          onClick={() =>
                            dispatch(
                              setEditableCategory({
                                ...cat,
                                category_type: categoryType,
                              })
                            )
                          }
                        />
                        <DeleteForeverIcon
                          onClick={() =>
                            dispatch(
                              deleteCategory({
                                id: cat._id,
                              })
                            ).then(() =>
                              dispatch(getAllCategoriesByType(categoryType))
                            )
                          }
                        />
>>>>>>> 2f694424db741237e518183f2b402dd63e7590af
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

export default CatigoryesLisy;
