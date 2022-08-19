import "./widgetSm.css";
import React, {  useEffect } from 'react'
import { CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { getPendingMerchant } from '../../store/merchant/merchantSlice'
import { changeStatus } from "../../store/userShared/userSharedSlice";
import img1 from "../../assets/profile.jpg"
import Swal from 'sweetalert2'
  

export default function WidgetSm() {
  const {pendingMerchantsList ,isLoading } = useSelector(state => state.merchantSlice)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPendingMerchant())
  },[dispatch])

// --------------hander confirem----------------
const handelConfirem=(doctordata)=>{
  const newData={
    id:doctordata._id,
    type:"doctor",
    status:"active"
  }
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been actived',
    showConfirmButton: false,
    timer: 1500
  })
  dispatch(changeStatus(newData))
 
}
// --------------hander confirem----------------
const handelBlock=(doctordata)=>{
  const newData = {
    id: doctordata._id,
    status: 'blocked',
    type: 'doctor'
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
  const pendingmerchant = pendingMerchantsList.length > 0?pendingMerchantsList.map((item)=>
  (
    <tr className="widgetSmTr" key={item._id}>
        <td className="widgetSmUser">
          <img
            src={img1}
            alt=""
            className="widgeSmgImg"
          />
          <span className="widgetSmName">{item.userName}</span>
        </td>
        <td className="widgetLgDate">{item.phoneNumber}</td>
        <td className="widgetSmAmount"> {item.status}</td>
        <td className="widgetSmStatus">
          <button className="Approved" onClick={()=>handelConfirem(item)}>Accept</button>
          <button className="block" onClick={()=>handelBlock(item)}>block</button>
        </td>
      </tr>
  )
      ):<div className="alert alert-primary d-flex align-items-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>
        There is No Data
      </div>
      </div>

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Pending Merchant </h3>
      {isLoading?<CircularProgress/>:
      <table className="widgetLgTable">
         {pendingmerchant}
      </table>
      }
    </div>
  );


  
}
