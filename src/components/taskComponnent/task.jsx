import React, { useEffect, useState, useRef } from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { gettaskAPI } from "../../store/task/taskSlice";
import Swal from "sweetalert2";
import styles from "./task.module.css";

function Task() {
  const { gettaskAPIList, isLoading, error } = useSelector(
    (state) => state.getTaskSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettaskAPI());
    console.log(gettaskAPIList);
  }, [dispatch]);

  const APIList =
    gettaskAPIList.length > 0 &&
    gettaskAPIList.map((item) => (
      <tr className={styles.rowtable} key={item._id}>
        <td>{item.id}</td>
        <td>{item.email}</td>
        <td>
          <ul className={styles.Fullname}>
            <li>
              {" "}
              <span>First Name:</span>
              {item.first_name}{" "}
            </li>
            <li>
              <span>Last Name:</span>
              {item.last_name}{" "}
            </li>
          </ul>
        </td>
        <td>
          {" "}
          <img src={item.avatar} alt="" className={styles.avatar} />{" "}
        </td>
      </tr>
    ));
  return (
    <>
      <h3 className="text-center table-hover  text-primary my-co2">Task</h3>
      {/* error */}
      <>
        {error && (
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        )}
      </>

      <>
        {isLoading ? (
          <h1 className={styles.isloading}>
            {" "}
            <CircularProgress /> Loadein ......
          </h1>
        ) : APIList.length > 0 ? (
          <>
            <table className="table tableUsers  table-hover   table-light overflow-auto table-striped  mx-auto mt-5 text-center ">
              <table className="table tableUsers  table-hover   table-light overflow-auto table-striped  mx-auto mt-5 text-center ">
                <thead className="">
                  <tr>
                    <th>id</th>
                    <th>Email</th>
                    <th> Full Name</th>
                    <th> Avatar</th>
                  </tr>
                </thead>
                <tbody>{APIList}</tbody>
              </table>
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
            <div>There is No User </div>
          </div>
        )}
      </>
    </>
  );
}

export default Task;
