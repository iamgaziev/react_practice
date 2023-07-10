import React, { useEffect } from "react";
import "./Obj.css";
import frame from "../../assets/Frame 26 (9).png";
import mass from "../../assets/mass.png";
import obk from "../../assets/obk.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Obj2 = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className="sec1">
        <div className="container1 pb-[4%]">
          <div className="md:ml-5">
            <img src={frame} className="my-3" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373]">
              {t("e26")} «Leroy Merlin»
            </p>
            <img src={mass} className="my-3" alt="" />
          </div>
          <div className="flex justify-between mt-5 md:flex-col">
            <div data-aos="zoom-out-right" className="md:w-[90%] md:m-auto">
              <img src={obk} alt="" />
            </div>
            <div data-aos="zoom-out-left" className="w-[50%] md:w-[90%] md:m-auto">
              <p className="font-[600] text-[16px] text-[#868686] mb-3 md:w-[95%] md:ml-3">
                {t("e27")}
              </p>
              <div className="px-3 py-6 border-l-4 border-l-[#0D4373] dark:text-black bg-[#F4F4F4]">
                <p className="font-[400] text-[16px]">
                  {t("e28")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obj2;
