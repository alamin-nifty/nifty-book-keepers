import React from "react";
import { IoMdCheckmark } from "react-icons/io";
type Props = {};

const ConsultationDescription = (props: Props) => {
  return (
    <div className="flex flex-col items-start justify-center gap-14">
      <div>
        <p className="text-4xl font-semibold">
          Get in touch with Nifty Bookkeepers today!
        </p>
      </div>
      <div>
        <p>
          Whether you're a thriving small business or a growing enterprise, rely
          on Nifty Bookkeepers for tailored financial solutions and enjoy expert
          benefits in every service we provide.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <div className="flex items-center justify-start gap-3">
              <IoMdCheckmark className="text-green-500" />
              <p>Accurate Tracking</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <IoMdCheckmark className="text-green-500" />
              <p>Timely Reporting</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <IoMdCheckmark className="text-green-500" />
              <p>Customized Solution</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <IoMdCheckmark className="text-green-500" />
              <p>Cost Effective</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <IoMdCheckmark className="text-green-500" />
              <p>Data Security</p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-start gap-3">
              <IoMdCheckmark className="text-green-500" />
              <p>Expert Analysis</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ConsultationDescription;
