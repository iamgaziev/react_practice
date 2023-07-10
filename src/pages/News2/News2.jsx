import React, { useEffect } from "react";
import frame from "../../assets/Frame 26 (6).png";
import big4 from "../../assets/big4.jpg";
import mk from "../../assets/mk.png";
import pod2 from "../../assets/podй.png";
import sur1 from "../../assets/sur1.jpg";
import sur2 from "../../assets/sur2.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const News2 = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="md:ml-2">
            <img src={frame} className="my-3 md:w-[400px]" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373]">
              {t("x1")}
            </p>
          </div>
          <div className="flex gap-5 mt-[2%] mb-[3%] md:flex-col">
            <div  className="w-[75%] md:w-[90%] md:m-auto">
              <img data-aos="fade-right" src={big4} alt="" />
              <p data-aos="fade-right" className="font-[400] text-[16px] text-[#868686] mt-5">
                {t("x2")}
              </p>
              <div>
                <p data-aos="fade-right" className="font-[700] text-[18px] text-[#333333] dark:text-white my-4">
                {t("x3")}
                </p>
                <div data-aos="fade-left" className="flex items-center gap-5 w-[95%]">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e5")}
                  </p>
                </div>
                <div data-aos="fade-right" className="flex items-center gap-5 w-[95%]">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                  {t("e4")}
                  </p>
                </div>
                <div data-aos="fade-right" className="flex items-center gap-5 w-[95%] mt-5">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                    {t("e5")}
                  </p>
                </div>
                <div data-aos="fade-right" className="flex items-center gap-5 w-[95%]">
                  <img src={mk} alt="" />
                  <p className="font-[400] text-[16px] text-[#868686]">
                  {t("e4")}
                  </p>
                </div>
              </div>
            </div>
            <div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto">
              <img src={sur1} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto md:my-7">
              <img src={sur2} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
              {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News2;
