import React, { Fragment } from "react";

import Navigation from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Login from "../Auth/Login";

const RootLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <Login />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
