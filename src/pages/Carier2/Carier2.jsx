import React from "react";
import fr from "../../assets/Frame 26 (9).png";
import { t } from "i18next";

const Carier2 = () => {

  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className="w-[90%] md:m-auto">
            <img src={fr} className="my-3" alt="" />
            <p className="font-[600] text-[24px] text-[#0D4373] mb-4">
              {t("t3")}
            </p>
            <p className="font-[700] text-[18px] text-[#333333] mb-2">
              {t("x51")}
            </p>
            <p className="font-[400] text-[16px] text-[#868686]">
              {t("x29")} <br />
              {t("x30")}
            </p>
            <p className="my-3 font-[700] text-[18px] text-[#333333]">
              {t("x31")}
            </p>
            <p className="font-[400] text-[16px] text-[#868686] mb-5">
              {t("x32")}
            </p>
            <p className="font-[700] text-[24px] mt-3 mb-[8%]">
            {t("x52")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carier2;
