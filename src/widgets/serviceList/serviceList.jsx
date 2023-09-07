import SimpleService from "@components/components/simpleService/simpleService";
import React from "react";

const ServiceList = () => {
  return (
    <section className={`w-full flex justify-center relative z-40 mt-[-28px]`}>
      <div className={`container px-[15px]`}>
        <div className={`w-full flex overflow-x-auto mx-auto`}>
          <div className={`w-auto relative mx-auto`}>
            <ul className={`bg-[#09757A] bg-opacity-80 flex `}>
              <li>
                <SimpleService active title={`Will/Legal`} />
              </li>
              <li>
                <SimpleService title={`Village /Panchayath`} />
              </li>
              <li>
                <SimpleService title={`PAN/Tax`} />
              </li>
              <li>
                <SimpleService title={`Immigration/Visa`} />
              </li>
              <li>
                <SimpleService title={`Visa/Travel`} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
