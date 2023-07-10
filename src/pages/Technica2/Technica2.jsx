import React, { useEffect } from "react";
import "./Technica2.css";
import frame from "../../assets/Frame 26 (2).png";
import z1 from "../../assets/z1.jpg";
import z2 from "../../assets/z2.jpg";
import z3 from "../../assets/z3.jpg";
import z4 from "../../assets/z4.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Technica2 = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="md:ml-3">
            <img src={frame} className="my-3" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373]">
              {t("e12")} Junttan PM20
            </p>
          </div>
          <div className="flex justify-between items-center py-5 md:flex-col">
            <div className="w-[45%] md:w-[90%]">
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mt-5">
                {t("t30")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] mt-5">
                {t("e13")}
                <br /> <br />
                {t("e14")} <br /> <br />
                {t("e15")}
              </p>
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mt-5">
                {t("e16")}
              </p>
              <div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e17")}
                  </p>
                  <p className="font-[400] text-[16px]">52 тонны</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e18")}
                  </p>
                  <p className="font-[400] text-[16px]">18м</p>
                </div>
                <div className="flex justify-between  pb-4 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e19")}
                  </p>
                  <p className="font-[400] text-[16px]">6т</p>
                </div>
              </div>
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mt-[5%]">
                {t("e20")} ННК5а
              </p>
              <div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e21")}
                  </p>
                  <p className="font-[400] text-[16px]">59кН</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e22")}
                  </p>
                  <p className="font-[400] text-[16px]">40-100</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e23")}
                  </p>
                  <p className="font-[400] text-[16px]">5 тонн</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e24")}
                  </p>
                  <p className="font-[400] text-[16px]">1200мм</p>
                </div>
                <div className="flex justify-between  pb-4 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e25")}
                  </p>
                  <p className="font-[400] text-[16px]">400мм</p>
                </div>
              </div>
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mt-[5%]">
                {t("e20")} ННК4
              </p>
              <div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e20")}
                  </p>
                  <p className="font-[400] text-[16px]">47кН</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e21")}
                  </p>
                  <p className="font-[400] text-[16px]">40-100</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e23")}
                  </p>
                  <p className="font-[400] text-[16px]">4 тонны</p>
                </div>
                <div className="flex justify-between border-b border-b-[#DCDCDC] pb-2 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e24")}
                  </p>
                  <p className="font-[400] text-[16px]">800мм</p>
                </div>
                <div className="flex justify-between  pb-4 mt-5">
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e25")}
                  </p>
                  <p className="font-[400] text-[16px]">350мм</p>
                </div>
              </div>
            </div>
            <div>
              <div data-aos="fade-rigth" className="md:w-[90%] md:m-auto">
                <img src={z1} alt="" />
              </div>
              <div
                data-aos="fade-left"
                className="mt-5 md:w-[90%] md:m-auto md:mt-5"
              >
                <img src={z1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec2 md:hidden">
        <div className="container1 my-[4%]">
          <div className="flex gap-5 md:flex-col">
            <div data-aos="fade-right">
              <img src={z2} alt="" />
            </div>
            <div data-aos="fade-dowb">
              <img src={z3} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={z4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technica2;
