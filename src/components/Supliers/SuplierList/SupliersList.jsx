import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSupplier,
  getAllSupplier,
  setEditableSupplier,
} from "../../../store/supplier/supplierSlice";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./suplierLis.scss";
import {
  deleteBrand,
  getAllBrand,
  setEditableBrand,
} from "../../../store/brand/brand.slice";

function SuppliersList() {
  const { suppliers } = useSelector((state) => state.supplierSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSupplier());
  }, []);

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
                    <th>Index</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>WhatsApp Number</th>
                    <th>Email</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  {suppliers?.map((supplier, index) => (
                    <tr key={supplier._id} className="rowtable">
                      <td>{index + 1}</td>
                      <td>{supplier.fullName}</td>
                      <td>{supplier.phoneNumber}</td>
                      <td>{supplier.whatsAppNumber}</td>
                      <td>{supplier.email}</td>

                      <td>
                        <span className="btn-edite">
                          <EditIcon
                            onClick={() =>
                              dispatch(setEditableSupplier(supplier))
                            }
                          />
                        </span>
                        <span className="btn-delete">
                          <DeleteForeverIcon
                            onClick={() =>
                              dispatch(
                                deleteSupplier({
                                  id: supplier._id,
                                })
                              ).then(() => dispatch(getAllSupplier()))
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

export default SuppliersList;
