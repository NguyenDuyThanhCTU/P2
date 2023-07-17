import React from "react";
import { useData } from "../Context/DataProviders";
import { Helmet } from "react-helmet";

const DefaultLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link
          rel="icon"
          href="https://avatar-sn.s3.amazonaws.com/StaticLogoIco.ico"
        />
      </Helmet>
      {children}
    </>
  );
};

export default DefaultLayout;
