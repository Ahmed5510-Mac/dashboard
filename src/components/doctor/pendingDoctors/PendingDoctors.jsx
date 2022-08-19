import "../../../globallayout.css";
import styles from "./doctorList.module.css";
import "../../../globallayout.css";

const rows = [
  {
    id: 12568,
    Product: "macbook",
    Img: "https://mrkzgulfup.com/uploads/165830722270871.jpg",
    customer: "Ahemed Darwish",
    data: "2 October",
    amount: 9985,
    method: "Cash on Delivery",
    status: "pending",
  },
  {
    id: 12568,
    Product: "Dell",
    Img: "https://mrkzgulfup.com/uploads/165830722270871.jpg",
    customer: "Adhame alaa",
    data: "12 january",
    amount: 985,
    method: "Cash on Delivery",
    status: "approved",
  },
  {
    id: 12568,
    Product: "HP",
    Img: "https://mrkzgulfup.com/uploads/165830722270871.jpg",
    customer: "Eman Ali",
    data: "1 march",
    amount: 785,
    method: "Cash on Delivery",
    status: "pending",
  },
  {
    id: 12568,
    Product: "lenovo",
    Img: "https://mrkzgulfup.com/uploads/165830722270871.jpg",
    customer: "ayman elsayed",
    data: "8 february",
    amount: 785,
    method: "Cash on Delivery",
    status: "approved",
  },
  {
    id: 12568,
    Product: "macbook",
    Img: "https://mrkzgulfup.com/uploads/165830722270871.jpg",
    customer: "medo bash",
    data: "4 june",
    amount: 785,
    method: "Cash on Delivery",
    status: "pending",
  },
];
function PendingDoctorsComponent() {
  return (
    <>
      <h2 className="text-center text-primary my-2">Pending Doctors</h2>
      <div className={styles.tableu}>
        <div className="tableContainer">
          <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
            <thead className="">
              <tr>
                <th>user Name </th>
                <th>Mobile</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* ------body------- */}
            <tbody>
              {rows.map((element)=> {
                <tr className={styles.rowtable} key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.Product}</td>
                  <td>{element.customer}</td>
                  <td>{element.data}</td>
                  <td>{element.amount}</td>
                  <td>{element.status}</td>
                  <td>
                    <button className="acceptBtn mx-2">
                      <i className="fa-solid fa-user-check"></i>
                    </button>
                    <button className="blockBtn ">
                      <i className="fa-solid fa-user-slash"></i>
                    </button>
                  </td>
                </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default PendingDoctorsComponent;

//==================================================================================================================
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styles from "./doctorList.module.css";
// import { CircularProgress } from "@material-ui/core";
// import { getPendingDoctor } from "../../../store/doctor/doctorSlice";
// import { changeStatus } from "./../../../store/userShared/userSharedSlice";
// import "../../../globallayout.css";
// import Swal from "sweetalert2";
// import "../../../globallayout.css";
// import { useNavigate } from "react-router-dom";
// function PendingDoctorsComponent() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getPendingDoctor());
//   }, [dispatch]);
//   const { pendingDoctorsList, isLoading, error } = useSelector(
//     (state) => state.doctorSlice
//   );
//   //let x=document.getElementByID()
//   // -------------chang status function---------------------
//   const handelConfirm = (doctor) => {
//     console.log("done");
//     const newData = {
//       id: doctor._id,
//       status: "active",
//       type: "doctor",
//     };
//     dispatch(changeStatus(newData));
//     dispatch(getPendingDoctor());
//     dispatch(getPendingDoctor());

//     Swal.fire({
//       position: "center",
//       icon: "success",
//       title: "Your work has been actived",
//       showConfirmButton: false,
//       timer: 1500,
//       // nav: navigate("/confirmedDoctors"),
//     });
//   };
//   // -------------chang status function---------------------

//   const handelReject = (doctor) => {
//     const newData = {
//       id: doctor._id,
//       status: "blocked",
//       type: "doctor",
//     };
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, reject it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("rejected!", "Your file has been rejected.", "success");
//         dispatch(changeStatus(newData));
//         dispatch(getPendingDoctor());
//         dispatch(getPendingDoctor());
//         navigate("/blockedDoctors");
//       }
//     });
//   };

//   const pendingDoctorList =
//     pendingDoctorsList.length > 0 &&
//     pendingDoctorsList.map((item) => (
//       <tr className={styles.rowtable} key={item._id}>
//         <td>{item.fullName}</td>
//             <td>{item.phoneNumber}</td>
//             <td>{item.accountStatus}</td>
//             <td>
//                 <button className='acceptBtn mx-2' onClick={()=>handelConfirm(item)} >
//                 <i className="fa-solid fa-user-check"></i></button>
//                 <button className='blockBtn ' onClick={() => { handelReject(item) }}>
//                  <i className="fa-solid fa-user-slash"></i>
//                  </button>
//             </td>
//       </tr>
//     ));

//   return (
//     <>
//       <h2 className="text-center text-primary my-2">Pending Doctors</h2>
//       <div className={styles.tableu}>
//         {error && (
//           <div className="alert alert-danger mb-0" role="alert">
//             {error}
//           </div>
//         )}
//         {isLoading ? (
//           <h1 className={styles.isloading}>
//             {" "}
//             <CircularProgress /> Loadein ......
//           </h1>
//         ) : pendingDoctorsList.length > 0 ? (
//           <>
//             <div className="tableContainer">
//               <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
//                 <thead className="">
//                   <tr>
//                     <th>user Name </th>
//                     <th>Mobile</th>
//                     <th>status</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 {/* ------body------- */}
//                 <tbody>{pendingDoctorList}</tbody>
//               </table>
//             </div>
//           </>
//         ) : (
//           <div
//             className="alert alert-primary d-flex align-items-center"
//             role="alert"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="currentColor"
//               className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
//               viewBox="0 0 16 16"
//               role="img"
//               aria-label="Warning:"
//             >
//               <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//             </svg>
//             <div>There is No pending Doctors</div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default PendingDoctorsComponent;
