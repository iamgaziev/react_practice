import React from "react";
import "./Contact.css";
import frame from "../../assets/Frame 26 (7).png";
import se from "../../assets/se.png";
import tp from "../../assets/tp.png";
import lc from "../../assets/tp.png";
import ml from "../../assets/ml.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <img src={frame} className="my-3 md:ml-5" alt="" />
          <p className="font-[600] text-[24px] text-[#0D4373] my-5 md:ml-5">
            {t("t2")}
          </p>
          <div className="flex mt-[5%] md:flex-col">
            <div className="w-[55%] md:w-[90%] md:m-auto">
              <p className="font-[700] text-[18px] text-[#333333] mb-5">
                {t("x21")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] mb-4">
                {t("x22")}
              </p>
              <input
                type="text"
                className="bg-[#F3F3F3] w-[90%] h-10 rounded-[3px] mb-5"
              />
              <p className="font-[400] text-[16px] my-4 text-[#868686]">
                E-mail (обязательно)
              </p>
              <input
                type="text"
                className="bg-[#F3F3F3] w-[90%] h-10 rounded-[3px] mb-5"
                placeholder="user@example.com"
              />
              <p className="font-[400] text-[16px] my-4 text-[#868686]">
                {t("x23")}
              </p>
              <input
                type="text"
                className="bg-[#F3F3F3] w-[90%] h-[40vh] rounded-[3px] mb-5"
              />
              <div>
                <button className="px-6 py-2 bg-[#D74C20] text-white rounded-[3px]">
                  {t("x24")}
                </button>
              </div>
            </div>
            <div className="w-[50%] md:w-[90%] md:m-auto md:mt-5">
              <p className="font-[700] text-[18px] text-[#333333] mb-4">
                Before Contacting Us
              </p>
              <p className="font-[400] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Non
                equidem invideo, miror magis posuere velit aliquet.
              </p>
              <p className="mt-5 font-[700] text-[18px] mb-[5%]">{t("t2")}</p>
              <div className="flex gap-4 items-center">
                <img src={se} alt="" />
                <p className="font-[400] text-[16px]">{t("x25")}</p>
              </div>
              <div className="flex gap-4 items-center my-[3%]">
                <img src={tp} alt="" />
                <p className="font-[400] text-[16px]">{t("x26")}</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src={ml} alt="" />
                <p className="font-[400] text-[16px]">e-mail</p>
              </div>
              <div className="flex gap-4 items-center mt-[3%]">
                <img src={lc} alt="" />
                <p className="font-[400] text-[16px]">{t("x27")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seccc2 mt-[5%]">
        <div className="container1"></div>
      </div>
    </div>
  );
};

export default Contact;
