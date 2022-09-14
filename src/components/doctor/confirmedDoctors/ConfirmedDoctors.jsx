import React, { useEffect, useState ,useRef } from "react";
import styles from "./confrimedDoctor.module.css";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  getConfirmedDoctor,
  nextfunction,
  previusfunction,
} from "../../../store/doctor/doctorSlice";
import { changeStatus } from "./../../../store/userShared/userSharedSlice";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Pagination/Pagination";
import Swal from "sweetalert2";

function ConfirmedDoctorsComponent() {
  const search=useRef();
   const { isLoading, error, confirmedDoctorsList } = useSelector(
    (state) => state.doctorSlice
  );
  let [page, setpage] = useState(1); //hook


  const changeWidthsearch=()=>{
   search.current.classList.toggle("widthSearch300")
  }
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfirmedDoctor(page));
  }, [dispatch, page]);

  // Add doctor to blacklist
  const handelReject = (doctor) => {
    const newData = {
      id: doctor._id,
      status: "blocked",
      type: "doctor",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, blocked it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("blocked!", "Your file has been blocked.", "success");
        dispatch(changeStatus(newData));
        dispatch(getConfirmedDoctor(page));
        dispatch(getConfirmedDoctor(page));
        console.log("done");
      }
    });
  };
  const handelEdie = () => {
    navigate('/userView')
  };
  const confirmedDoctorList =
    confirmedDoctorsList.length > 0 &&
    confirmedDoctorsList.map((item) => (
      <tr className={styles.rowtable} key={item._id}>
        <td>{item.fullName}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.whatsAppNumber}</td>
        <td>{item.accountStatus}</td>
        <td>
          <button className="pendingBtn" onClick={() => handelEdie(item)}>
            <i className="fa-solid fa-user-pen"></i>
          </button>
          <button className="blockBtn" onClick={() => handelReject(item)}>
            <i className="fa-solid fa-user-slash"></i>
          </button>
        </td>
      </tr>
    ));
  return (
    <>

      <div className="uppernav" >
        <h3 className="text-center table-hover  text-primary my-co2">
          Confirmed Doctors
        </h3>

        {/* search */}
        <div className="search" ref={search} >
          <input
            className={styles.inputSearch}
            id="inputSearch"
            type="text"
            placeholder="Search..."
          />
          <i className="fa-solid fa-magnifying-glass" onClick={()=>changeWidthsearch()}></i>
        </div>
      </div>


      {/* SHA256:htiEHoVhiksMaXQN3k9Bja4LhtF9OBWhroRLr11Jen8


      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 */}

      <div className={styles.tableu}>

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
          ) : confirmedDoctorsList.length > 0 ? (
            <>
              <table className="table tableUsers  table-hover   table-light overflow-auto table-striped  mx-auto mt-5 text-center ">
                <thead className="">
                  <tr>
                    <th>user Name </th>
                    <th>Mobile</th>
                    <th>whatsApp Number</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{confirmedDoctorList}</tbody>
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
              <div>There is No Doctor confirmed</div>
            </div>
          )}
        </>
      </div>
       {/* -----pgination-----  */}
          <Pagination  page={page} setpage={setpage} array={confirmedDoctorsList}/>
         
    </>
  );
}

export default ConfirmedDoctorsComponent;
