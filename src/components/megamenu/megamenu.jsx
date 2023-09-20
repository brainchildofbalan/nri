import { useApi } from "@components/hooks/useApi";
import MegamenuItem from "../megamenuItem/megamenuItem";
import { useEffect, useState } from "react";

const Megamenu = ({ isOpen, setMenuOpen }) => {
  const { api } = useApi();
  const [data, setData] = useState(false);
  useEffect(() => {
    api.get(`/services-categories`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div
      className={`w-full absolute top-[100%] z-40 transition-all duration-300 ${
        isOpen
          ? `opacity-100 pointer-events-auto`
          : `opacity-0 pointer-events-none`
      }`}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <div className={`container px-[15px] mx-auto relative `}>
        <div className={`w-full relative pt-[15px]`}>
          <div
            className={`bg-white py-[33px] px-[15px] w-full flex flex-wrap  shadow-md shadow-gray-100 border`}
          >
            {data ? (
              data?.categorized?.map((item, index) => {
                return (
                  <div className={`w-1/5 [&>*]:last:border-none`} key={index}>
                    <MegamenuItem {...item} setMenuOpen={setMenuOpen} />
                  </div>
                );
              })
            ) : (
              <div className="w-full text-center">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
