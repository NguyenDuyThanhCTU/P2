import React from "react";
import { Helmet } from "react-helmet";
import { useData } from "../../Context/DataProviders";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();

  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      {children}
    </>
  );
};

export default ClientLayout;
