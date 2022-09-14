import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBlockedDoctor } from '../../../store/doctor/doctorSlice';
import { CircularProgress } from '@material-ui/core';
import { changeStatus } from '../../../store/userShared/userSharedSlice';
import { useNavigate } from 'react-router-dom';
import styles from '../blackListDoctors/blacklistDoctor.module.css'
import Swal from'sweetalert2'

function BlacklistDoctorsComponnent() {
    const { isLoading, blockedDoctorsList } = useSelector(state => state.doctorSlice);
    const dispatch = useDispatch();
    const navigate=useNavigate()
    useEffect(() => {
      dispatch(getBlockedDoctor())
    }, [dispatch])
    const blockedDoctorList = blockedDoctorsList.length > 0 && blockedDoctorsList.map((item) => (
      <tr className={styles.rowtable} key={item._id}>
        <td className={styles.textBlockes}>{item.fullName}</td>
        <td className={styles.textBlockes}>{item.phoneNumber}</td>
        <td className={styles.textBlockes}>{item.accountStatus}</td>
        <td>
          <button className='acceptBtn mx-2' onClick={() => handelActive(item)}>
          <i className="fa-solid fa-user-check"></i>
            </button>
        </td>
      </tr>)
    )
    const handelActive = (doctor) => {
      const newData = {
        id: doctor._id,
        status: 'active',
        type: 'doctor'
      }
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your work has been actived',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(changeStatus(newData))
      navigate('/confirmedDoctors')
    }
    return (
      <>
      <h2 className="text-center text-primary my-2">Blacklist Doctors</h2>
        {
          isLoading ? <h1 > <CircularProgress /> Loadein ......</h1>
            : blockedDoctorsList.length > 0 ?
            <>
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center " >
                <thead className=''>
                  <tr>
                    
                    <th>user Name </th>
                    <th>Mobile</th>
                    <th>status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blockedDoctorList}
                </tbody>
              </table>
              </>
              :
              <div className="alert alert-primary d-flex align-items-center" role="alert">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      <div>
        There is No Data
      </div>
      </div>
        }
      </>
    )
}

export default BlacklistDoctorsComponnent