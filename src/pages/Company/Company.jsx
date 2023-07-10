import React from "react";
import frame from "../../assets/Frame 26 (3).png";
import big2 from "../../assets/big2.jpg";
import re from "../../assets/re.svg";
import re2 from "../../assets/re2.svg";
import big3 from "../../assets/big3.jpg";
import c1 from "../../assets/c1.svg";
import c2 from "../../assets/c2.svg";
import c3 from "../../assets/c3.svg";
import c4 from "../../assets/c4.svg";
import str from "../../assets/chevrons-right.svg";
import ser1 from '../../assets/ser1.jpg'
import ser2 from '../../assets/ser2.jpg'
import ser3 from '../../assets/ser3.jpg'
import ser4 from '../../assets/ser4.jpg'
import { useTranslation } from "react-i18next";


const Company = () => {

  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="md:ml-5">
            <img src={frame} className="my-5" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373]">{t("t1")}</p>
          </div>
          <div className="flex gap-7 md:flex-col md:mt-5 mt-5">
            <div className="md:w-[90%] md:m-auto">
              <img src={big2} alt="" />
            </div>
            <div className="w-[45%] md:w-[90%] md:m-auto ">
              <p className="font-[700] text-[18px] text-[#333333] dark:text-white mb-3 md:text-white">
                {t("t30")}
              </p>
              <p className="font-[400] text-[16px] leading-[21.79px]">
                {t("x5")} <br /> <br />
                {t("x6")} <br />
                {t("x7")}
              </p>
              <div className="flex gap-5 mt-5 md:flex-col">
                <img src={re} className="md:w-[200px] md:m-auto" alt="" />

                <p className="font-[400] text-[16px]">
                  {t("x8")}
                  <span className="font-[600]">
                    {t("x9")}
                  </span>{" "}
                  {t("x10")}
                </p>
              </div>
              <div className="flex gap-5 mt-5 md:flex-col md:mt-5" >
                <img src={re2} className="w-[200px] md:m-auto" alt="" />

                <p className="font-[400] text-[16px]">
                  {t("x11")}
                  <span className="font-[600]">{t("x12")}</span> –
                  {t("x13")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec2 bg-[#F4F4F4] py-[5%] dark:bg-[black]">
        <div className="container1">
          <div className="flex gap-5 md:flex-col">
            <div>
              <div className="flex items-center gap-5 mb-5 md:w-[90%] md:m-auto">
                <div>
                  <img src={c1} alt="" />
                </div>
                <div className="bg-[#FFFFFF] px-5 py-4 dark:text-black">
                  <p className="font-[400] text-[18px]">
                    {t("x14")}
                    <span className="border-b border-b-[#D74C20] text-[#D74C20]">
                      СТБ ISO 9001-2015
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5  md:w-[90%] md:m-auto md:mt-5">
                <div>
                  <img src={c2} alt="" />
                </div>
                <div className="bg-[#FFFFFF] px-5 py-4 dark:text-black">
                  <p className="font-[400] text-[18px]">
                    {t("x15")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5  md:w-[90%] md:m-auto md:my-5">
                <div>
                  <img src={c3} alt="" />
                </div>
                <div className="bg-[#FFFFFF] px-5 py-4 dark:text-black">
                  <p className="font-[400] text-[18px]">
                    {t("x16")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5  md:w-[90%] md:m-auto">
                <div>
                  <img src={c4} alt="" />
                </div>
                <div className="bg-[#FFFFFF] px-5 py-4 dark:text-black">
                  <p className="font-[400] text-[18px]">
                    {t("x17")}
                  </p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] px-5 py-4 w-[87.5%] ml-auto dark:text-black md:w-[77%] md:ml-[18%] md:mt-5 md:m-auto">
                <p className="font-[400] text-[18px]">
                  {t("x18")}
                </p>
              </div>
            </div>
            <div className="md:w-[90%] md:m-auto">
              <img src={big3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="sec3 bg-[#0D4373]">
        <div className="container1">
          <div className=" text-[white] flex justify-between items-center p-5 md:flex-col">
            <div className="md:text-center">
              <p className="font-[400] text-[18px]">
                {t("x19")}
              </p>
            </div>
            <div className="flex gap-3 items-center md:w-[58%] md:mt-5 md:m-auto">
              <div>
                <p className="font-[600] text-[18px] text-[#D74C20]">
                  {t("t11")}
                </p>
              </div>
              <div>
                <img src={str} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec4">
        <div className="container1 mt-[5%]">
          <div className="md:w-[90%] md:m-auto">
            <p className="font-[700] text-[24px] mb-3">
            {t("x20")}
            </p>
            <p className="font-[400] text-[16px] text-[#868686] mb-5">
            {t("x4")}
            </p>
          </div>
          <div className="flex gap-3 md:flex-col">
            <div className=" md:m-auto md:mt-5">
              <img src={ser1} alt="" />
            </div>
            <div className=" md:m-auto md:my-5">
              <img src={ser2} alt="" />
            </div>
            <div className=" md:m-auto">
              <img src={ser3} alt="" />
            </div>
            <div className=" md:m-auto md:my-5">
              <img src={ser4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
