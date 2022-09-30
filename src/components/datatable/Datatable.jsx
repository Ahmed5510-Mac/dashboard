import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { usercolumns, userRows } from "../../datatable";
import { NavLink } from "react-router-dom";
import { CssBaseline, Typography } from "@material-ui/core";
import ConfirmedDoctorsComponent from "../../components/doctor/confirmedDoctors/ConfirmedDoctors"

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: "fit-content",
      renderCell: () => {
        return (
          <div className="cellAction">
            <NavLink to="/singleuser">
              <div className="viewButton"> View</div>
            </NavLink>
            <div className="deleteButton"> Delete</div>
            <div className="deleteButton"> Block</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <Typography component="h2" variant="h4" style={{ marginTop: 8 }}>
          Doctors
        </Typography>
        <DataGrid
          rows={userRows}
          columns={usercolumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          />
          <ConfirmedDoctorsComponent/>

        <Typography component="h2" variant="h4" style={{ marginTop: 8 }}>
          Pharmacists
        </Typography>
        <DataGrid
          rows={userRows}
          columns={usercolumns.concat(actionColumn)}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
