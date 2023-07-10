import React, { useEffect } from "react";
import "./Uslugi.css";
import us from "../../assets/Frame 26.png";
import str from "../../assets/chevrons-right.svg";
import mm from "../../assets/b1.png";
import mm2 from "../../assets/b2.jpg";
import b1 from "../../assets/b3.jpg";
import b2 from "../../assets/b4.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Uslugi = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div>
            <img src={us} className="my-3 md:ml-4" alt="" />
            <p className="mb-3 mt-2 font-[600] text-[24px] text-[#0D4373] md:ml-4">
              {t("t6")}
            </p>
            <p className="font-[400] text-[16px] text-[#868686] md:w-[90%] md:m-auto">
              {t("t28")}
            </p>
          </div>
          <div className="flex gap-5 mt-[5%] md:flex-col">
            <div data-aos="fade-down-right" className="md:w-[90%] md:m-auto">
              <img src={mm} alt="" />
            </div>
            <div data-aos="fade-down-left" className="md:w-[90%] md:m-auto ">
              <img src={mm2} alt="" />
              <p className="font-[700] text-[18px] my-3">FDP</p>
              <p className="w-[410px] font-[400] text-[#868686] mb-3 md:w-[100%]">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">{t("t11")}</p>
                <img src={str} className="" alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-5 md:flex-col md:mt-5">
            <div data-aos="zoom-in" className="w-[32%] md:w-[90%] mt-5">
              <img src={b1} alt="" />
              <p className="font-[700] text-[18px] my-3">{t("t20")}</p>
              <p className="w-[100%] font-[400] text-[#868686] mb-3 ">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">{t("t11")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="zoom-in" className="w-[32%] md:w-[90%] md:mt-5 mt-5">
              <img src={b2} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("t21")}
              </p>
              <p className="w-[100%] font-[400] text-[#868686] mb-3 ">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">
                  {t("t11")}
                </p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="zoom-in" className="w-[32%] md:w-[90%] md:mt-5 mt-5">
              <img src={b2} alt="" />
              <p className="font-[700] text-[18px] my-3 text-[#D74C20]">
                {t("t29")}
              </p>
              <p className="w-[100%] font-[400] text-[#868686] mb-3 ">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">{t("t11")}</p>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uslugi;
