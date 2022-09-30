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
  Pagination,
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
import { useFormik } from "formik";
import { DesktopTimePicker } from "@mui/x-date-pickers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65vw",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  // p: 4,
};

function OrderPeandingDoctor() {
  const { orders, orderDetails } = useSelector((state) => state.orderSlice);
  const dispatch = useDispatch();
  const [orderStatus, setOrderStatus] = useState("pending");
  const [orderType, setOrderType] = useState("doctor");
  const [startDate, setStartDate] = useState(
    dayjs(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
  );
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [open, setOpen] = React.useState(false);
  const [openShip, setOpenShip] = React.useState(false);
  const [selectedOrderIdToShip, setSelectedOrderIdToShip] = useState();
  const [page, setpage] = useState(1);

  const handleOpenDetails = (id) => {
    dispatch(getDoctorOrderDetails(id)).then(() => setOpen(true));
  };
  const handleCloseDetails = () => setOpen(false);

  const handleCloseShip = () => setOpenShip(false);

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

  const formik = useFormik({
    initialValues: {
      date: dayjs(new Date()),
      time: "12:00 PM",
    },
    onSubmit: (values) => {
      dispatch(
        shipDoctorOrder({
          orderId: selectedOrderIdToShip,
          date: dayjs(values.date).format("MM/DD/YYYY"),
          time: dayjs(values.time).format("HH:MM A"),
        })
      ).then((res) => {
        console.log(res);
        setOpenShip(false);
        if (startDate && endDate)
          dispatch(
            getOrdersByDate({
              from: formateDate(startDate),
              to: formateDate(endDate),
              status: orderStatus,
              page: page,
            })
          );
        else dispatch(getAllOrdersByStatus({ orderStatus: orderStatus }));
      });
    },
  });

  useEffect(() => {
    if (startDate && endDate)
      dispatch(
        getOrdersByDate({
          from: formateDate(startDate),
          to: formateDate(endDate),
          status: orderStatus,
          page: page,
        })
      );
    else dispatch(getAllOrdersByStatus({ orderStatus: orderStatus }));
  }, [orderStatus, page]);

  const orderStatusColorMap = {
    pending: "info",
    delivered: "success",
    cancelled: "error",
  };

  return (
    <div>
      <>
        <h2 className="text-center text-primary my-4"> Pending Doctor Orders</h2>
        <div className="">
          <>
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
                                    onClick={() => {
                                      setOpenShip(true);
                                      setSelectedOrderIdToShip(order._id);
                                    }}
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

              {/* -----pgination-----  */}
              <Pagination
                count={10}
                page={page}
                onChange={(_, page) => setpage(page)}
              />
            </div>
          </>
        </div>

        <div>
          {/* order details */}
          <Modal
            open={open}
            onClose={handleCloseDetails}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                style={{
                  padding: "18px",
                  borderRadius: "8px 8px 0 0",
                  color: "#fff",
                  textAlign: "center",
                  background: "black",
                }}
                id="modal-modal-title"
                variant="h4"
                component="h2"
              >
                Order Details
              </Typography>
              <div
                style={{
                  padding: "32px",
                }}
              >
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Order Date :{" "}
                  </span>{" "}
                  {orderDetails?.orderDate}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Order Status :{" "}
                  </span>

                  {orderDetails?.orderStatus}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "8px",
                      fontWeight: "bold",
                    }}
                  >
                    Total Price :{" "}
                  </span>
                  {orderDetails?.totalPrice}
                </Typography>

                {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Products : {orderDetails?.products.map((p) => )}
              </Typography> */}

                <div style={{ display: "flex", gap: "18px" }}>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span
                      style={{
                        display: "inline-block",
                        marginRight: "8px",
                        fontWeight: "bold",
                      }}
                    >
                      Address :{" "}
                    </span>
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
              </div>
            </Box>
          </Modal>

          {/* order shipping */}
          <Modal
            open={openShip}
            onClose={handleCloseShip}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                style={{
                  padding: "18px",
                  borderRadius: "8px 8px 0 0",
                  color: "#fff",
                  textAlign: "center",
                  background: "black",
                }}
                id="modal-modal-title"
                variant="h4"
                component="h2"
              >
                Order Shipping Info
              </Typography>
              <div
                style={{
                  padding: "32px",
                }}
              >
                <form
                  onSubmit={formik.handleSubmit}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "60%",
                    margin: "0 auto",
                    gap: "18px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="date"
                        name="date"
                        onChange={(value) =>
                          formik.setFieldValue("date", value)
                        }
                        value={formik.values.date}
                        renderInput={(params) => (
                          <TextField name="date" {...params} />
                        )}
                      />

                      <DesktopTimePicker
                        label="Time"
                        name="time"
                        onChange={(value) =>
                          formik.setFieldValue("time", value)
                        }
                        value={formik.values.time}
                        renderInput={(params) => (
                          <TextField name="time" {...params} />
                        )}
                      />
                    </LocalizationProvider>
                  </div>

                  <Button type="submit" variant="contained" color="success">
                    Ship
                  </Button>
                </form>
              </div>
            </Box>
          </Modal>
        </div>
      </>
    </div>
  );
}

export default OrderPeandingDoctor;
