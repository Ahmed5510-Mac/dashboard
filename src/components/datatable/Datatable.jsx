import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {usercolumns,userRows } from "../../datatable"
import { NavLink } from 'react-router-dom';
const Datatable = () => {
  const actionColumn=[{field:"action",headerName:"Action",width:200,renderCell:()=>{
    return(
      <div className="cellAction">
        <NavLink to="/singleuser">
         <div className="viewButton"> View</div>
        </NavLink>
        <div className="deleteButton"> Delete</div>
      </div>
    )
  }}];
  return (
    <div className="datatable">
      <div style={{ height: 400, width: "100%" }}>
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
