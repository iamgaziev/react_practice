import { t } from "i18next";
import React from "react";
import { Link } from "react-router-dom";

const Negative = () => {
  return (
    <div className="bg-[#0D4373]">
      <div className="container1">
        <div>
          <p className="font-[800] text-[288px] text-[#FFFFFF] text-center">
            404
          </p>
          <p className="font-[700] text-[24px] text-[#FFFFFF] text-center">
            {t("x53")}
          </p>
          <div className="flex gap-6 w-[40%] m-auto mt-[3%]">
            <Link to="/">
              <button className="bg-[#D74C20] text-white px-8 py-2 rounded-[3px]">
                {t("x54")}
              </button>
            </Link>
            <button className="bg-transparent border border-white rounded-[3px] text-white px-8 py-2">
              Связаться с нами
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Negative;
