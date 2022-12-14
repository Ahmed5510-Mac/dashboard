import Topbar from "./components/Topbar/Topbar";
import "./App.scss";
import "./globallayout.scss";

import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
// import Login from './components/login/login';
import "./style/dark.scss";

// Doctor imports
import PendingDoctors from "./pages/doctor/pendingDoctors/PendingDoctors";
import ConfirmedDoctors from "./pages/doctor/confirmedDoctors/ConfirmedDoctors";
import BlacklistDoctors from "./pages/doctor/blackListDoctors/BlacklistDoctors";

//Pharmacist imports
import Sidebar from "./components/Sidebar/Sidebar";
import UserEditOrAdd from "./components/userEditorAdd/userEditOrAdd";
import NewUser from "./pages/Employees/newUser/newUser";
import FlayBoy from "./pages/Employees/flayBoy/flayBoy";
import Casher from "./pages/Employees/casher/casher";
import Navbar from "./components/Navbar/Navbar";
import Datatable from "./components/datatable/Datatable";
import Singleuser from "./components/SingleUser/singleuser";
import { useSelector } from "react-redux";
import Categores from "./pages/categoryes/categores";
import BrandsPage from "./pages/brands/Brands.page";
import Product_page from "./pages/products/Product_page";
import SubCategories from "./pages/SubCategories/SubCategories.page";
import Suppliers from "./pages/suppliers/suppliers";
import Order from "./pages/Order/Order";
import PendingPharmacists from "./pages/pharmacist/pendingPharmacist/PendingPharmacists";
import ConfirmedPharmacists from "./pages/pharmacist/confirmedPharmacist/ConfirmedPharmacists";
import BlacklistPharmacists from "./pages/pharmacist/blacklistPharmacist/BlacklistPharmacists";
import ProductForm from "./pages/products/ProductForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const { isLogedIn } = useSelector((state) => state.loginSlice);

  return (
    <div className="app">
      <BrowserRouter>
        {!localStorage.getItem("token") && !isLogedIn ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        ) : (
          <div className="layaout">
            {/* ================left================ */}
            <div className="left-side">
              <div className="SidebarWrapper">
                <Sidebar />
              </div>
            </div>
            {/* ================right================ */}
            <div className="top-nav">
              <Navbar />
            </div>

            <div className="content">
              <div className="mainSection">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Navigate to="/" replace />} />
                  {/* <Route path="/home" element={<Home />} /> */}

                  {/* Doctor Routes */}
                  <Route path="/pendingDoctors" element={<PendingDoctors />} />
                  <Route
                    path="/confirmedDoctors"
                    element={<ConfirmedDoctors />}
                  />
                  <Route
                    path="/blockedDoctors"
                    element={<BlacklistDoctors />}
                  />
                  {/* pharmasict Routes */}
                  {/* Pharmacist Routes */}
                  <Route
                    path="/pendingPharmacists"
                    element={<PendingPharmacists />}
                  />
                  <Route
                    path="/confirmedPharmacists"
                    element={<ConfirmedPharmacists />}
                  />
                  <Route
                    path="/blockedPharmacists"
                    element={<BlacklistPharmacists />}
                  />
                  <Route path="/userView" element={<UserEditOrAdd />} />
                  <Route path="/userView" element={<task />} />
                  {/*  e  */}
                  <Route path="/newUser" element={<NewUser />} />
                  <Route path="/singleuser" element={<Singleuser />} />
                  <Route path="/flayBoyeList" element={<FlayBoy />} />
                  <Route path="/casherList" element={<Casher />} />
                  <Route path="/users" element={<Datatable />} />
                  <Route path="/categorey" element={<Categores />} />
                  <Route path="/subcategory/:id" element={<SubCategories />} />
                  <Route path="/brand" element={<BrandsPage />} />
                  <Route path="/products" element={<Product_page />} />
                  <Route path="/productForm" element={<ProductForm />} />

                  <Route path="/orders" element={<Order />} />
                  <Route path="/supliers" element={<Suppliers />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
