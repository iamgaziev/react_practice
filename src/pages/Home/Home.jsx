import React, { useEffect } from "react";
import "./Home.css";
import str from "../../assets/chevrons-right.svg";
import mm from "../../assets/b1.png";
import mm2 from "../../assets/b2.jpg";
import b1 from "../../assets/b3.jpg";
import b2 from "../../assets/b4.jpg";
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="overflow-hidden">
      <div className="section1">
        <div className="container1">
          <div data-aos="fade-right" className="pt-[10%] ">
            <p className="font-[800] text-[60px] text-white leading-[60px] mb-5 md:w-[90%] md:text-[30px] md:leading-[40px] md:m-auto md:text-left">
              <span className="text-[#D74C20]">{t("t13")}</span> <br />
              {t("t14")}
            </p>
            <p className="font-[400] text-[24px] text-[#F3F3F3] md:w-[90%] md:m-auto md:text-left md:mt-5 md:text-[20px]">
              {t("t15")} <br className="md:hidden" />
              {t("t16")}
            </p>
            <p className="font-[400] text-[18px] border-b border-b-white w-[9%] text-white mt-5 md:text-center md:w-[50%] md:mt-5">
              {t("t17")}
            </p>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container1">
          <div className="bg-[#0D4373] text-[white] flex justify-between items-center p-5 md:flex-col md:w-[90%] md:m-auto">
            <div data-aos="fade-up">
              <p className="font-[400] text-[18px] md:text-center md:mb-4">
                {t("t18")}
              </p>
            </div>
            <div data-aos="fade-up" className="flex gap-3 items-center">
              <div >
                <p className="font-[600] text-[18px] text-[#D74C20]">
                  {t("t11")}
                </p>
              </div>
              <div>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-[5%] md:flex-col">
            <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
              <img src={mm} className="" alt="" />
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto">
              <img src={mm2} alt="" />
              <p className="font-[700] text-[18px] my-3">FDP</p>
              <p className="w-[410px] font-[400] text-[#868686] mb-3 md:w-[100%]">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">{t("t11")}</p>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 md:flex-col">
            <div data-aos="fade-right" className="w-[32%] md:w-[90%]">
              <img src={b1} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("t20")}
              </p>
              <p className="w-[100%] font-[400] text-[#868686] mb-3 ">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">{t("t11")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="fade-up" className="w-[32%] md:w-[90%] md:mt-5">
              <img src={b2} alt="" />
              <p className="font-[700] text-[18px] my-3">
                {t("t21")}
              </p>
              <p className="w-[100%] font-[400] text-[#868686] mb-3 ">
                {t("t19")}
              </p>
              <div className="flex gap-3 items-center">
                <p className="font-[400] text-[16px]">{t("t11")}</p>
                <img src={str} alt="" />
              </div>
            </div>
            <div data-aos="fade-left" className="w-[32%] md:mt-5 md:w-[90%]">
              <img src={b2} alt="" />
              <p className="font-[700] text-[18px] my-3 text-[#D74C20]">
                Забивка свай
              </p>
              <p className="w-[100%] font-[400] text-[#868686] mb-3">
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
      <div className="section3 mt-5 ">
        <div className="container1">
          <p data-aos="fade-bottom" className="font-[800] text-[55px] text-center w-[100%] md:text-[32px] md:w-[90%] md:m-auto">
            <span className="text-[#D74C20]">{t("t15")}</span>
            <span className="text-[white]">{t("t16")}</span>
          </p>
        </div>
      </div>
      <div className="section4">
        <div className="container1 py-[5%]">
          <div className="flex justify-between items-center md:flex-col">
            <div data-aos="fade-right" className="w-[40%] md:w-[100%]">
              <div className="bg-[#0D4373] text-white  py-3 md:w-[90%] md:m-auto">
                <p className="font-[600] text-[18px] text-right mr-3 md:text-left md:ml-4">
                {t("t22")}
                </p>
              </div>
              <div className="bg-[#F4F4F4] my-1 text-black  py-3 md:w-[90%] md:m-auto md:my-2">
                <p className="font-[600] text-[18px] text-right mr-3 md:text-left md:ml-4">
                {t("t23")}
                </p>
              </div>
              <div className="bg-[#F4F4F4] text-black  py-3 md:w-[90%] md:m-auto">
                <p className="font-[600] text-[18px] text-right mr-3 md:text-left md:ml-4">
                {t("t24")}
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="w-[57%] md:w-[100%]">
              <p className="font-[600] text-[18px] mb-1 md:hidden">
              SVAI.BY
              </p>
              <p className="font-[400] text-[16px] text-[#868686] md:w-[90%] md:text-center md:m-auto md:mt-5">
              {t("t25")} 
              </p>
              <p className="font-[600] text-[18px] text-[#333333] dark:text-white mb-1 mt-5 md:hidden">
              {t("t26")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] md:w-[90%] md:text-center md:m-auto md:mt-5">
              {t("t27")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container2">
          <div className="flex md:flex-col md:w-[100%]">
            <div data-aos="fade-right" className="md:m-auto">
              <img src={p1} alt="" />
            </div>
            <div data-aos="fade-left" className="md:m-auto">
              <img src={p2} alt="" />
            </div>
            <div data-aos="fade-up" className="md:m-auto">
              <img src={p3} alt="" />
            </div>
            <div data-aos="fade-bottom" className="md:m-auto">
              <img src={p4} alt="" />
            </div>
            <div data-aos="fade-right" className="md:m-auto">
              <img src={p5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
