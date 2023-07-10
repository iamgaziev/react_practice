import React, { useEffect } from "react";
import frame from "../../assets/Frame 26 (5).png";
import sur1 from "../../assets/sur1.jpg";
import sur2 from "../../assets/sur2.jpg";
import sur3 from "../../assets/sur3.jpg";
import pod from "../../assets/pod.png";
import pod2 from "../../assets/podй.png";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";


const News = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="md:ml-5">
            <img src={frame} className="my-3" alt="" />
            <p className="font-[600] text-[24px]">{t("t9")}</p>
          </div>
          <div className="flex gap-5 items-center mt-[5%] md:flex-col">
            <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
              <img src={sur1} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod} alt="" />
            </div>
            <div data-aos="fade-down" className="md:w-[90%] md:m-auto"> 
              <img src={sur2} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto">
              <img src={sur3} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
          </div>
          <div className="flex gap-5 items-center mt-[5%] md:flex-col">
            <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
              <img src={sur2} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
            <div data-aos="fade-left" className="md:w-[90%] md:m-auto">
              <img src={sur3} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
            <div data-aos="fade-up" className="md:w-[90%] md:m-auto">
              <img src={sur1} alt="" />
              <p className="w-[95%] font-[700] text-[18px] mt-3">
                {t("e29")}
              </p>
              <p className="font-[400] text-[16px] text-[#868686] my-3">
                02.10.2020
              </p>
              <img src={pod2} alt="" />
            </div>
          </div>
          <div className="flex items-center mt-[5%] md:flex-col">
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
            <div data-aos="fade-right" className="md:w-[90%] md:m-auto">
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
          <div className='w-[15%] m-auto my-[5%] md:w-[40%]'>
            <button className='border border-[#D74C20] text-[#D74C20] px-5 py-2 rounded-[3px]' >{t("e30")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;


