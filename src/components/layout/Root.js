import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

import "assets/sass/custom.bootstrap.scss";
import "assets/sass/app.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="wrapper h-100 d-block d-md-flex flex-column p-4">
        <Header siteTitle={data.site.siteMetadata.title} />
        <>{children}</>
        <Footer />
      </div>
    )}
  />
);

export default Layout;
