import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Userlayout from "./components/Userlayout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./utils/auth/Login";
import Signup from "./utils/auth/Signup";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  */}

        {/* userLayout */}
        <Route
          classNAme={`min-h-screen w-full bg-sky-600 relative`}
          path={`/`}
          element={
            <div className="w-full min-h-screen bg-sky-300 relative flex flex-col  items-center">
              <Header />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route path="/" element={<Userlayout />} />
        </Route>
        {/*  */}

        {/* auth */}
        <Route path="/auth" element={<Outlet />}>
          <Route path={`/auth/login`} element={<Login />} />
          <Route path={`/auth/signup`} element={<Signup />} />
        </Route>
        {/* admin layout */}
        <Route
          path="/admin"
          element={
            <>
              <SideBar />
              <Outlet />
            </>
          }
        >
          <Route path={`/admin`} element={<AdminLayout />} />
          <Route path={`/admin/Dashboard`} element={<Dashboard />} />
          {/* <Route path={`/admin`} element={<Signup />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
