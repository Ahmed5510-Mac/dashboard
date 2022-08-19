import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import  imag from '../../assets/img1.jpg';

const List = () => {
  const rows = [
    {
      id: 12568,
      Product: "macbook",
      Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
      customer: "Ahemed Darwish",
      data: "2 October",
      amount: 9985,
      method: "Cash on Delivery",
      status: "pending",
    },
    {
      id: 12568,
      Product: "Dell",
      Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
      customer: "Adhame alaa",
      data: "12 january",
      amount: 985,
      method: "Cash on Delivery",
      status: "approved",
    },
    {
      id: 12568,
      Product: "HP",
      Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
      customer: "Eman Ali",
      data: "1 march",
      amount: 785,
      method: "Cash on Delivery",
      status: "pending",
    },
    {
      id: 12568,
      Product: "lenovo",
      Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
      customer: "ayman elsayed",
      data: "8 february",
      amount: 785,
      method: "Cash on Delivery",
      status: "approved",
    },
    {
      id: 12568,
      Product: "macbook",
      Img: 'https://mrkzgulfup.com/uploads/165830722270871.jpg',
      customer: "medo bash",
      data: "4 june",
      amount: 785,
      method: "Cash on Delivery",
      status: "pending",
    },
  ];

  return (
    <div className="table">
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="TableCell">ID</TableCell>
              <TableCell className="TableCell">Product</TableCell>
              <TableCell className="TableCell">Customer</TableCell>
              <TableCell className="TableCell">Date</TableCell>
              <TableCell className="TableCell">Amount</TableCell>
              <TableCell className="TableCell">Payment Methode</TableCell>
              <TableCell className="TableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" className="TableCell">{row.id}</TableCell>
                <TableCell className="TableCell">
                  <div className="classWrapper">
                    <img src={row.Img} alt="" className="image" />
                    {row.Product}
                  </div>
                </TableCell>
                <TableCell align="right"className="TableCell">{row.customer}</TableCell>
                <TableCell align="right"className="TableCell">{row.data}</TableCell>
                <TableCell align="right"className="TableCell">{row.amount}</TableCell>
                <TableCell align="right"className="TableCell">{row.method}</TableCell>
                <TableCell align="right"className="TableCell">
                   <span className={`status ${row.status}`}>{row.status}</span> </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default List;
