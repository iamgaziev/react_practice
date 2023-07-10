import React, { useEffect } from "react";
import "./Technica.css";
import name from "../../assets/Frame 26 (1).png";
import mk from "../../assets/mk.png";
import vv from "../../assets/vv.png";
import w from "../../assets/w1.jpg";
import w2 from '../../assets/w2.jpg'
import w3 from '../../assets/w3.jpg'
import w4 from '../../assets/w4.jpg'
import w5 from '../../assets/w5.jpg'
import w6 from '../../assets/w6.jpg'
import str from "../../assets/chevrons-right.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";


const Technica = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="md:ml-5">
            <img src={name} className="my-3" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373]">{t("t7")}</p>
            <p className="font-[400] text-[16px] text-[#868686]">
              {t("e6")}
            </p>
          </div>
          <div className="flex gap-3 items-center mt-5 md:w-[90%] md:m-auto md:mt-5">
            <img src={mk} alt="" />
            <p className="font-[400] text-[16px]">
              {t("e7")}
              <span className="font-[700]"> ABI Group, BAUER, MAIT</span>
            </p>
          </div>
          <div className="flex gap-3 items-center md:w-[90%] md:m-auto md:mt-3">
            <img src={mk} alt="" />
            <p className="font-[400] text-[16px]">
              {t("e8")}
              <span className="font-[700]"> APE HOLLAND 150</span>
            </p>
          </div>
          <div className="flex gap-3 items-center md:w-[90%] md:m-auto md:mt-3">
            <img src={mk} alt="" />
            <p className="font-[400] text-[16px]">
              {t("e9")}
              <span className="font-[700]"> JUNTTAN</span>
            </p>
          </div>
          <p className="font-[400] text-[16px] text-[#868686] mt-3 md:ml-5 md:mt-5">
            {t("e10")}
          </p>
          <div className="flex gap-5 mt-5 md:flex-col">
            <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
              <img src={vv} alt="" />
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto">
              <img src={w} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("e11")}
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 md:flex-col">
          <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
              <img src={w2} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("e12")} Juntan PM20
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="fade-up" className="md:w-[90%] md:m-auto">
              <img src={w3} alt="" />
              <p className="font-[700] text-[18px] my-3">
              {t("e12")} СП49
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto">
              <img src={w4} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("e12")} Juntan PM20
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 md:flex-col">
          <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
              <img src={w5} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("e12")} Juntan PM20
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="fade-up" className="md:w-[90%] md:m-auto">
              <img src={w6} alt="" />
              <p className="font-[700] text-[18px] my-3">
              {t("e12")} СП49
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto md:mb-5">
              <img src={w2} alt="" />
              <p className="font-[700] text-[18px] my-3">
              {t("e12")} Juntan PM20
              </p>
              <div className="flex gap-2">
                <p className="font-[400] text-[16px]">{t("t17")}</p>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technica;
