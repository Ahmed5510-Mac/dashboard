import React, { useEffect ,useState } from "react";
import styles from "./confirmedMerchants.module.css";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch} from "react-redux";
import { getConfirmedMerchant } from "../../../store/merchant/merchantSlice";
import { changeStatus } from "./../../../store/userShared/userSharedSlice";
import Pagination from '../../../components/Pagination/Pagination'
import Swal from 'sweetalert2'
import '../../../globallayout.css'



function ConfirmedMerchantsComponent() {

  const[page, setpage] = useState(1);

  const { isLoading, error, confirmedMerchantsList } = useSelector(
    (state) => state.merchantSlice


  
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConfirmedMerchant(page));
  }, [dispatch,page]);

  // Add merchant to blacklist

  const handelReject = (doctor) => {
    const newData = {
                       id: doctor._id,
                       status: 'blocked',
                       type: 'merchant'
                   }
           Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, blocked it!'
             }).then((result) => {
               if (result.isConfirmed) {
                 Swal.fire(
                   'blocked!',
                   'Your file has been blocked.',
                   'success'
                 )
                 dispatch(changeStatus(newData))
               }
             }) 
       }
       const handelEdie=()=>{

      }

  const confirmedMerchantList =
    confirmedMerchantsList.length > 0 &&
    confirmedMerchantsList.map((item) => (
      <tr className="rowtable" key={item._id}>
        <td >        
          {item.fullName}
        </td>
        <td >
          {item.phoneNumber}
        </td>
        <td >
          {item.accountStatus}
        </td>
        <td>
        <button className='pendingBtn' onClick={()=>handelEdie(item)}><i className="fa-solid fa-user-pen"></i></button>
          <button className="blockBtn" onClick={() => handelReject(item)}>
            {" "}
            <i className="fa-solid fa-user-slash"></i>
          </button>
        </td>
      </tr>
    ));

  return (
    <>
              <h2 className="text-center text-primary my-2">
                Confirmed Merchants
              </h2>
              <Pagination  page={page} setpage={setpage} array={confirmedMerchantsList}/>
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
              <CircularProgress /> Loading ......
            </h1>
          ) : confirmedMerchantsList.length > 0 ? (
            <>
            <div className={styles.tablewrapperscrolly}>
              <table className="table tableUsers  table-hover table-light table-striped w-100 mx-auto mt-5 text-center ">
                <thead className="">
                  <tr>
                    <th>user Name </th>
                    <th>Mobile</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{confirmedMerchantList}</tbody>
              </table>
            </div>
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
              <div>There is no Confirmed Merchants</div>
            </div>
          )}
        </>
      </div>
    </>
  );
}

export default ConfirmedMerchantsComponent;
