import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import EditIcon from "@mui/icons-material/Edit";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import {
  cancelDoctorOrder,
  deliverDoctorOrder,
  getAllOrdersByStatus,
  getOrdersByDate,
} from "../../../store/order/orderSlice";
import { useEffect } from "react";
// import "./supcategories.scss";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function OrderList() {
  const { orders } = useSelector((state) => state.orderSlice);
  const dispatch = useDispatch();
  const [orderStatus, setOrderStatus] = useState("pending");
  const [orderType, setOrderType] = useState("doctor");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const formateDate = (MaterialDate) => {
    return `${MaterialDate.$M + 1}-${MaterialDate.$D}-${MaterialDate.$y}`
  }

  const onDateSearch = () => {
    dispatch(getOrdersByDate({
      from: formateDate(startDate),
      to: formateDate(endDate),
      page: 1
    }))
  }


  useEffect(() => {
    dispatch(getAllOrdersByStatus({ orderStatus: orderStatus }));
  }, [orderStatus]);

  const orderStatusColorMap = {
    pending: 'info',
    delivered: 'success',
    cancelled: 'error'
  }


  return (
    <div>
      <>
        <h2 className="text-center text-primary my-4">Orders</h2>
        <div className="">
          <>
            <Stack spacing={2}>
              <div style={{display: 'flex', gap: '22px', justifyContent: 'center'}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="From"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="To"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>

              <Button onClick={onDateSearch} variant="contained" color="success">Search</Button>
              </div>

              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Orders For
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                >
                  <FormControlLabel
                    value="doctor"
                    control={<Radio />}
                    label="Doctor"
                  />
                  <FormControlLabel
                    value="pharmacist"
                    control={<Radio />}
                    label="Pharmacist"
                  />
                  {/* <FormControlLabel
                  value="shipped"
                  control={<Radio />}
                  label="shipped"
                /> */}
                  <FormControlLabel
                    value="All"
                    control={<Radio />}
                    label="All"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Order Status
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={orderStatus}
                  onChange={(e) => setOrderStatus(e.target.value)}
                >
                  <FormControlLabel
                    value="pending"
                    control={<Radio />}
                    label="pending"
                  />
                  <FormControlLabel
                    value="delivered"
                    control={<Radio />}
                    label="delivered"
                  />
                  {/* <FormControlLabel
                  value="shipped"
                  control={<Radio />}
                  label="shipped"
                /> */}
                  <FormControlLabel
                    value="cancelled"
                    control={<Radio />}
                    label="cancelled"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>

            <div className="tableContainer">
              <table className="table tableUsers table-light table-striped mx-auto mt-5 col-7 text-center ">
                <thead className="">
                  <tr>
                    <th>index</th>
                    <th>Order Status</th>
                    <th>Order Date</th>
                    <th>Payment Method</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* ------body------- */}
                <tbody>
                  {orders?.map((order, index) => (
                    <tr key={order._id} className="rowtable">
                      <td>{index + 1}</td>
                      <td>
                        <Chip label={order.orderStatus} color={orderStatusColorMap[order.orderStatus]} />
                      </td>
                      <td>{order.orderDate}</td>
                      <td> {order.payment.method}</td>
                      <td>{order.totalPrice}</td>
                      <td>
                        {/* <span className="btn-edite">
                          <EditIcon
                            onClick={() =>
                              dispat1ch(setEditableOrder(order))
                            }
                          />
                        </span> */}
                        {orderStatus === 'delivered' || orderStatus === 'cancelled' || (
                          <>
                            <span style={{ cursor: "pointer" }}>
                              {/* deliver btn */}
                              <CheckCircleIcon color='success'
                                onClick={() =>
                                  dispatch(deliverDoctorOrder(order._id)).then(
                                    () => {
                                      dispatch(
                                        getAllOrdersByStatus({
                                          orderStatus,
                                        })
                                      );
                                    }
                                  )
                                }
                              />
                            </span>
                            <span style={{ cursor: "pointer" }}>
                              {/* cancel btn */}
                              <DoDisturbOnIcon
                                onClick={() =>
                                  dispatch(cancelDoctorOrder(order._id)).then(
                                    () => {
                                      dispatch(
                                        getAllOrdersByStatus({
                                          orderStatus,
                                        })
                                      );
                                    }
                                  )
                                }
                              />
                            </span>
                          </>
                        )}
                        <span className="btn-delete">
                          <DeleteForeverIcon
                          // onClick={() =>
                          //  // dispatch(
                          //   //   deleteSupCategory({
                          //   //     id: order._id,
                          //   //   })
                          //   // ).then(() =>
                          //   //   dispatch()
                          //   // )
                          // // }
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>
      </>
    </div>
  );
}

export default OrderList;
