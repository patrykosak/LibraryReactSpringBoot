import React from "react";
import { Oval } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <Oval
        secondaryColor="#00bFFF"
        color="#00bFFF"
        height={500}
        width={260}
        ariaLabel="loading"
      />
    </div>
  );
};
