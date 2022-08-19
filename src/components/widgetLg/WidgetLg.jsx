import "./widgetLg.css";
import react ,{useEffect} from 'react'
import { useDispatch,useSelector}from 'react-redux'
import {getPendingDoctor } from '../../store/doctor/doctorSlice'
import { changeStatus } from '../../store/userShared/userSharedSlice';
import { CircularProgress } from '@material-ui/core';
import Swal from 'sweetalert2'


export default function WidgetLg() {
  const {pendingDoctorsList ,isLoading}=useSelector((state)=>state.doctorSlice)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPendingDoctor())
  },[dispatch])
  console.log(pendingDoctorsList)

  // const Button = ({ type }) => {
  //   return <button className={"widgetLgButton " + type} onClick={onclick}>{type}</button>;
  // };
// --------------hander confirem----------------
const handelConfirm=(doctordata)=>{
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
  const pendingDoctor =pendingDoctorsList.length > 0?pendingDoctorsList.map((item)=>
  (
    <tr className="widgetLgTr"  key={item._id}>
        <td className="widgetLgUser">
          <img
            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="widgetLgImg"
          />
          <span className="widgetLgName">{item.userName}</span>
        </td>
        <td className="widgetLgDate">{item.phoneNumber}</td>
        <td className="widgetLgAmount"> {item.status}</td>
        <td className="widgetLgStatus">
          <button className="Approved" onClick={()=>handelConfirm(item)}>Accept</button>
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
      <h3 className="widgetLgTitle"> Pending Doctor</h3>
      {isLoading?<CircularProgress/>:
      <table className="widgetLgTable">
        {pendingDoctor}
      </table>
      }
    </div>
  );
}
