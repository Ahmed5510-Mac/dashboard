import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './doctorList.module.css'
import { CircularProgress } from '@material-ui/core';
import { getPendingDoctor } from '../../../store/doctor/doctorSlice';
import { changeStatus } from './../../../store/userShared/userSharedSlice';
import PendingDoctorsComponent from './../../../components/doctor/pendingDoctors/PendingDoctors'


function PendingDoctors() {

   
 
    return (
        <>
       <PendingDoctorsComponent/>

        </>
    )
}

export default PendingDoctors


