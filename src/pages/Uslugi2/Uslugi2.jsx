import React, { useEffect } from "react";
import "./Uslugi2.css";
import us from "../../assets/Frame 26.png";
import muhammad from "../../assets/muhammaf.png";
import mk from "../../assets/mk.png";
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Uslugi2 = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="overflow-hidden">
      <div className="sec1">
        <div className="container1">
          <div className="mt-3 md:ml-5">
            <img src={us} alt="" />
            <p className="mb-3 mt-2 font-[600] text-[24px] text-[#0D4373]">
              {t("t6")}
            </p>
          </div>
          <div className="flex justify-between items-center mb-5 md:flex-col">
            <div data-aos="zoom-in-right" className="w-[50%] md:w-[90%]">
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mb-3">
                {t("t30")}
              </p>
              <p className="font-[400] text-[16px] mb-4 text-[#868686]">
                {t("e1")}
              </p>
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mb-3">
                {t("e2")}
              </p>
              <p className="text-[#868686]">
                {t("e1")}
              </p>
            </div>
            <div className="w-[45%] md:w-[90%] md:mt-5">
              <div data-aos="zoom-in-left" className="">
                <img src={muhammad} alt="" />
                <p className="font-[700] text-[18px] py-4">{t("e2")}</p>
                <div className="flex items-center gap-5 w-[95%]">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e3")}
                  </p>
                </div>
                <div className="flex items-center gap-5 w-[95%]">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                  {t("e4")}
                  </p>
                </div>
                <div className="flex items-center gap-5 w-[95%] mt-5">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e5")}
                  </p>
                </div>
                <div className="flex items-center gap-5 w-[95%]">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                  {t("e4")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5  my-[5%] md:flex-col">
            <div data-aos="zoom-out-right" className="md:w-[90%] md:m-auto">
                <img src={r1} alt="" />
            </div>
            <div data-aos="zoom-out-up" className="md:w-[90%] md:m-auto">
                <img src={r2} alt="" />
            </div>
            <div data-aos="zoom-out-left" className="md:w-[90%] md:m-auto">
                <img src={r3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uslugi2;
