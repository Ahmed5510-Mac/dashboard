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
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import {
  cancelDoctorOrder,
  deleteOrder,
  deliverDoctorOrder,
  getAllOrdersByStatus,
  getDoctorOrderDetails,
  getOrdersByDate,
  shipDoctorOrder,
} from "../../../store/order/orderSlice";
import { useEffect } from "react";
// import "./supcategories.scss";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import dayjs from "dayjs";
import VisibilityIcon from "@mui/icons-material/Visibility";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function OrderList() {
  const { orders, orderDetails } = useSelector((state) => state.orderSlice);
  const dispatch = useDispatch();
  const [orderStatus, setOrderStatus] = useState("pending");
  const [orderType, setOrderType] = useState("doctor");
  const [startDate, setStartDate] = useState(
    dayjs(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
  );
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [open, setOpen] = React.useState(false);

  const handleOpenDetails = (id) => {
    dispatch(getDoctorOrderDetails(id)).then(() => setOpen(true));
  };
  const handleCloseDetails = () => setOpen(false);

  const formateDate = (MaterialDate) => {
    return `${MaterialDate.$M + 1}-${MaterialDate.$D}-${MaterialDate.$y}`;
  };

  const onDateSearch = () => {
    dispatch(
      getOrdersByDate({
        from: formateDate(startDate),
        to: formateDate(endDate),
        status: orderStatus,
        page: 1,
      })
    );
  };

  useEffect(() => {
    if (startDate && endDate)
      dispatch(
        getOrdersByDate({
          from: formateDate(startDate),
          to: formateDate(endDate),
          status: orderStatus,
          page: 1,
        })
      );
    else dispatch(getAllOrdersByStatus({ orderStatus: orderStatus }));
  }, [orderStatus]);

  const orderStatusColorMap = {
    pending: "info",
    delivered: "success",
    cancelled: "error",
  };

  return (
    <div>
      <>
        <h2 className="text-center text-primary my-4">Orders</h2>
        <div className="">
          <>
            <Stack spacing={2}>
              <div
                style={{
                  display: "flex",
                  gap: "22px",
                  justifyContent: "center",
                }}
              >
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

                <Button
                  onClick={onDateSearch}
                  variant="contained"
                  color="success"
                >
                  Search
                </Button>
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
                    disabled
                    control={<Radio />}
                    label="Pharmacist"
                  />
                  <FormControlLabel
                    value="All"
                    disabled
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
                    value="shipped"
                    control={<Radio />}
                    label="shipped"
                  />
                  <FormControlLabel
                    value="delivered"
                    control={<Radio />}
                    label="delivered"
                  />
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
                        <Chip
                          label={order.orderStatus}
                          color={orderStatusColorMap[order.orderStatus]}
                        />
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
                        {order.orderStatus === "delivered" ||
                          order.orderStatus === "cancelled" || (
                            <>
                              <Tooltip title={<h5>Shipped</h5>}>
                                <IconButton style={{ cursor: "pointer" }}>
                                  {/* deliver btn */}
                                  <LocalShippingIcon
                                    color="info"
                                    onClick={() =>
                                      dispatch(shipDoctorOrder(order._id)).then(
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
                                </IconButton>
                              </Tooltip>

                              <Tooltip title={<h5>Delivered</h5>}>
                                <IconButton style={{ cursor: "pointer" }}>
                                  {/* deliver btn */}
                                  <CheckCircleIcon
                                    color="success"
                                    onClick={() =>
                                      dispatch(
                                        deliverDoctorOrder(order._id)
                                      ).then(() => {
                                        dispatch(
                                          getAllOrdersByStatus({
                                            orderStatus,
                                          })
                                        );
                                      })
                                    }
                                  />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title={<h5>Cancel</h5>}>
                                <IconButton style={{ cursor: "pointer" }}>
                                  {/* cancel btn */}
                                  <DoDisturbOnIcon
                                    onClick={() =>
                                      dispatch(
                                        cancelDoctorOrder(order._id)
                                      ).then(() => {
                                        dispatch(
                                          getAllOrdersByStatus({
                                            orderStatus,
                                          })
                                        );
                                      })
                                    }
                                  />
                                </IconButton>
                              </Tooltip>
                            </>
                          )}

                        {order.orderStatus === "delivered" ||
                          order.orderStatus === "pending" || (
                            <Tooltip title={<h5>Remove</h5>}>
                              <IconButton className="btn-delete">
                                <DeleteForeverIcon
                                  onClick={() =>
                                    dispatch(deleteOrder(order._id)).then(
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
                              </IconButton>
                            </Tooltip>
                          )}

                        <Tooltip title={<h5>Details</h5>}>
                          <IconButton style={{ cursor: "pointer" }}>
                            <VisibilityIcon
                              onClick={() => handleOpenDetails(order._id)}
                            />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        </div>

        <div>
          <Modal
            open={open}
            onClose={handleCloseDetails}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h4" component="h2">
                Order Details
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Order Date : {orderDetails?.orderDate}
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Order Status : {orderDetails?.orderStatus}
              </Typography>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Total Price : {orderDetails?.totalPrice}
              </Typography>

              {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Products : {orderDetails?.products.map((p) => )}
              </Typography> */}

              <div style={{ display: "flex", gap: "18px" }}>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Deliver Info :
                </Typography>

                <div style={{ flexGrow: 1 }}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        background: "#0d6efd",
                        minWidth: "150px",
                        display: "inline-block",
                        color: "#fff",
                        padding: "2px 6px",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      Name:
                    </span>
                    {orderDetails?.deliverInfo?.address?.addressName}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        background: "#0d6efd",
                        minWidth: "150px",
                        display: "inline-block",
                        color: "#fff",
                        padding: "2px 6px",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      governorate:
                    </span>
                    {orderDetails?.deliverInfo?.address?.governorate}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        background: "#0d6efd",
                        minWidth: "150px",
                        display: "inline-block",
                        color: "#fff",
                        padding: "2px 6px",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      city:
                    </span>
                    {orderDetails?.deliverInfo?.address?.city}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        background: "#0d6efd",
                        minWidth: "150px",
                        display: "inline-block",
                        color: "#fff",
                        padding: "2px 6px",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      street:
                    </span>
                    {orderDetails?.deliverInfo?.address?.street}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        background: "#0d6efd",
                        minWidth: "150px",
                        display: "inline-block",
                        color: "#fff",
                        padding: "2px 6px",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      building:
                    </span>
                    {orderDetails?.deliverInfo?.address?.building}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        background: "#0d6efd",
                        minWidth: "150px",
                        display: "inline-block",
                        color: "#fff",
                        padding: "2px 6px",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      details:
                    </span>
                    {orderDetails?.deliverInfo?.address?.details}
                  </Typography>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </>
    </div>
  );
}

export default OrderList;
