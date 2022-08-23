import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./pendingMerchantList.module.css";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getPendingMerchant } from "./../../../store/merchant/merchantSlice";
import { changeStatus } from "./../../../store/userShared/userSharedSlice";
import "../../../globallayout.css";
import Swal from "sweetalert2";

function PendingMerchantsComponent() {
  const { pendingMerchantsList, isLoading } = useSelector(
    (state) => state.merchantSlice
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPendingMerchant());
  }, [dispatch]);
  // ------------- chang status function ---------------------
  const handelActivemerchant = (merchant) => {
    const newData = {
      id: merchant._id,
      status: "active",
      type: "merchant",
    };
    dispatch(changeStatus(newData));
    dispatch(getPendingMerchant());
    navigate("/pendingMerchants");
  };
  // ------------- chang status function ---------------------
  const handeRejectmerchant = (merchant) => {
    const newData = {
      id: merchant._id,
      status: "blocked",
      type: "merchant",
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("rejected!", "Your file has been rejected.", "success");
        dispatch(changeStatus(newData));
        dispatch(getPendingMerchant());
        navigate("/pendingMerchants");
      }
    });
  };
  const pendingMerchantList =
    pendingMerchantsList.length &&
    pendingMerchantsList.map((item) => (
      <tr className="rowtable" key={item._id}>
        <td>{item.fullName}</td>
        <td> {item.phoneNumber}</td>
        <td> {item.accountStatus}</td>
        <td>
          <button
            className=" acceptBtn"
            onClick={() => handelActivemerchant(item)}
          >
            <i className="fa-solid fa-user-check"></i>
          </button>
          <button
            className="blockBtn"
            onClick={() => handeRejectmerchant(item)}
          >
            <i className="fa-solid fa-user-slash"></i>
          </button>
        </td>
      </tr>
    ));

  console.log(pendingMerchantList);

  return (
    <>
      <h2 className="text-center text-primary my-2">Pending Merchants</h2>
      <div className={styles.tableu}>
        {isLoading ? (
          <h1 className={styles.isloading}>
            {" "}
            <CircularProgress /> Loadein ......
          </h1>
        ) : pendingMerchantsList.length ? (
          <>
            <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
              <thead className="">
                <tr>
                  <th>user Name </th>
                  <th>Mobile</th>
                  <th>status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{pendingMerchantList}</tbody>
            </table>
          </>
        ) : (
          <div
            className="alert alert-primary d-flex align-items-center"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>There is no pending Merchants</div>
          </div>
        )}
      </div>
    </>
  );
}

export default PendingMerchantsComponent;
