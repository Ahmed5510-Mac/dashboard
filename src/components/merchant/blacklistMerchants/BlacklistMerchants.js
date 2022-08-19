import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { getBlockedMerchant } from '../../../store/merchant/merchantSlice';
import { useNavigate } from 'react-router-dom';
import { changeStatus } from './../../../store/userShared/userSharedSlice';
import '../../../globallayout.css'
import styles from './blacklistmerchant.module.css'
import Swal from 'sweetalert2';


function BlacklistMerchantsComponent() {
  const { isLoading, blockedMerchantsList } = useSelector(state => state.merchantSlice);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getBlockedMerchant())
        navigate("/blockedMerchants")

    }, [dispatch,navigate])

    const merchantBlacklist = blockedMerchantsList.length > 0 && blockedMerchantsList.map((item) => (
        <tr className="rowtable" key={item._id}>    
            <td className={styles.textBlockes}>{item.fullName}</td>
            <td className={styles.textBlockes}>{item.phoneNumber}</td>
            <td className={styles.textBlockes}>{item.accountStatus}</td>
            <td>
                <button className=' acceptBtn' onClick={() => handelActive(item)}><i className="fa-solid fa-user-check"></i></button>
            </td>
        </tr>)
    )
    const handelActive = (merchant) => {
        const newData = {
            id: merchant._id,
            status: 'active',
            type: 'merchant'
        }
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been actived',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch(changeStatus(newData))
        dispatch(getBlockedMerchant())
        merchantBlacklist()
        navigate("/blockedMerchants")
    }
    return (
        <>
                <h2 className="text-center text-primary my-2">Blacklist Merchants</h2>
            {
                isLoading ? <h1 > <CircularProgress /> Loading ......</h1>
                    : blockedMerchantsList.length > 0 ?
                    <>
                        <table className="table table-light tableUsers table-striped  mx-auto mt-5 col-7 text-center" >
                            <thead className=''>
                                <tr>
                                    
                                    <th>user Name </th>
                                    <th>Mobile</th>
                                    <th>status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {merchantBlacklist}
                            </tbody>
                        </table>
                        </>
                        :<div className="alert alert-primary d-flex align-items-center" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        <div>
                            There is no blocked Merchants
                        </div>
                        </div>






                        
            }
        </>
    )
}

export default BlacklistMerchantsComponent