import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className=" relative w-full mt-20">
      <div className="mx-[10%]">
        <p className="text-4xl font-bold my-8">About Us</p>
        <p className="text-lg leading-normal">
          Since 2018, Nifty Bookkeepers has empowered countless businesses to
          reach financial milestones. Our innovative solutions and trusted
          services build confidence in clients, aiding informed financial
          decisions. Collaborate with us to achieve your financial goals and
          elevate your business to new heights!
        </p>
      </div>
    </div>
  );
};

export default About;
