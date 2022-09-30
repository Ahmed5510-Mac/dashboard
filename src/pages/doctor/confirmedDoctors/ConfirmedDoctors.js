import React, { useEffect } from 'react'
import styles from './confrimedUsers.module.css'
import { CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { getConfirmedDoctor } from '../../../store/doctor/doctorSlice';
import Sidebar from './../../../components/Sidebar/Sidebar';
import { changeStatus } from './../../../store/userShared/userSharedSlice';
import ConfirmedDoctorsComponent from './../../../components/doctor/confirmedDoctors/ConfirmedDoctors'

function ConfirmedDoctors() {
    return (
        <>
            <ConfirmedDoctorsComponent/>
           </>
    )
}

export default ConfirmedDoctors