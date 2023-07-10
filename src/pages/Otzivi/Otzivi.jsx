import React, { useEffect } from 'react'
import frame from '../../assets/Frame 26 (4).png'
import if1 from '../../assets/if1.jpg'
import if2 from '../../assets/if2.jpg'
import if3 from '../../assets/if3.jpg'
import if4 from '../../assets/if4.jpg'
import if5 from '../../assets/if5.jpg'
import if6 from '../../assets/if6.jpg'
import if7 from '../../assets/if7.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'


const Otzivi = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className='md:ml-5'>
            <img src={frame} className='my-4' alt="" />
            <p className='font-[600] text-[24px] mb-4'>
            {t("t10")}
            </p>
            <p className='font-[400] text-[16px] leading-[21.79px] text-[#868686]'>
            {t("x4")}.
            </p>
          </div>
          <div className='grid grid-cols-4 md:grid md:grid-cols-2 dark:bg-[black] mt-5'>
            <div data-aos="fade-right">
              <img src={if1} alt="" />
            </div>
            <div data-aos="fade-right">
              <img src={if2} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if3} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if4} alt="" />
            </div>
            <div data-aos="fade-right">
              <img src={if5} alt="" />
            </div>
            <div data-aos="fade-right">
              <img src={if6} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if7} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if5} alt="" />
            </div>
            <div data-aos="fade-right">
              <img src={if3} alt="" />
            </div>
            <div data-aos="fade-right">
              <img src={if5} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if4} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if2} alt="" />
            </div>
            <div data-aos="fade-right">
              <img src={if6} alt="" />
            </div>
            <div data-aos="fade-left">
              <img src={if3} alt="" />
            </div>
          </div>
          <div className='w-[20%] m-auto my-5 md:w-[40%]'>
            <button className='border border-[#D74C20] text-[#D74C20] px-5 py-2 rounded-[3px]' >{t("e30")}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Otzivi