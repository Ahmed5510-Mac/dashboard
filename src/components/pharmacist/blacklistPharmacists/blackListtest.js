import React, {useEffect}  from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { getBlockedPharmacist } from '../../../store/pharmacist/pharmacistSlice'
import { Check } from'@material-ui/icons'
import img from '../../../assets/profile.jpg';
import styles from './blacklistPharmacist.module.css'

function BlackListtest() {
  const dispatch = useDispatch()
  const { blockedPharmacistsList, isLoading, error } = useSelector((state) => state.pharmacistSlice)
  useEffect(() => {
    dispatch(getBlockedPharmacist())
  }, [dispatch])


  const handelActive = (item) => {
    alert('Active')
    
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'userName', headerName: 'userName', width: 190,
      renderCell: (param) => {
        return (
          <div className={styles.UserNameListUSer}>
            <img src={img} alt="avatar" className={styles.avatarBlacl} />
            Ahmed Darwidh

          </div>
        )
      }
      
    },

    { field: 'Email', headerName: 'Email', width: 220 },
    { field: 'phoneNumber', headerName: 'phoneNumber', width: 150 },
    {
      field: 'status',
      headerName: 'status',
      type: 'string',
      width: 110,
    },
    {
      field: 'Avatar',
      headerName: 'status',
      type: 'string',
      width: 110,
    },
    {
      field: 'action',
      headerName: 'action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 260,
      renderCell: (param) => {
        return (
          <button className={styles.btnActiv} onClick={() => handelActive()}>
            <Check/>
            Active</button>
      
        )
      }
    }
  ];
  
  const rows = [
    {
      id: 1,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",

      
    },
    {
      id: 2,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",

      
    },
    {
      id: 3,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",

      
    },
    {
      id: 4,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",

      
    },
    {
      id: 5,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",
      
    },
    {
      id: 6,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",

      
    },
    {
      id: 7,
      userName:'Ahmed Darwidh',
      Email: 'Ahmed_Darwidh@gmail.com',
      phoneNumber: '01011773739',
      status: "blocked",

      
    },
   
 
  ];
  
  return (
    <>
      <h1 className='text-center'> Pharmacist blocked</h1>
    <div style={{ height: 500, width: '80%' ,margin:'auto',marginTop:'50px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}

export default BlackListtest