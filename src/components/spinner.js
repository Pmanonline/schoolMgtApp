// import "./../styles.css"; // Import your CSS file here
import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue border-solid h-[30px] w-[30px]"></div>
    </div>
  );
};

export default Spinner;
