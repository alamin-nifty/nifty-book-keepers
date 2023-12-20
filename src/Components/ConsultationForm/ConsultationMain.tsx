import React from "react";
import ConsultationDescription from "./ConsultationDescription";
import ConsultationForm from "./ConsultationForm";

type Props = {};

const ConsultationMain = (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-20 mx-[10%] my-28">
      <ConsultationDescription />
      <ConsultationForm />
    </div>
  );
};

export default ConsultationMain;
