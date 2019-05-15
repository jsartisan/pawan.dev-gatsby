import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "assets/sass/custom.bootstrap.scss";
import "assets/sass/app.scss";

const Layout = ({ children }) => (
  <div className="wrapper h-100 d-block d-md-flex flex-column p-4">
    <Header />
    <>{children}</>
    <Footer />
  </div>
);

export default Layout;
