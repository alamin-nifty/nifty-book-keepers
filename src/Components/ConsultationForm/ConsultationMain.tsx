import React from "react";
import ConsultationDescription from "./ConsultationDescription";
import ConsultationForm from "./ConsultationForm";

type Props = {};

const ConsultationMain = (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 mx-[10%] ,d:my-28 my-16">
      <ConsultationDescription />
      <ConsultationForm />
    </div>
  );
};

export default ConsultationMain;
