import React from 'react'
import './Obj.css'
import frame from '../../assets/Frame 26 (8).png'
import card from '../../assets/card.png'

const Obj = () => {
  return (
    <div>
      <div className="sec1">
        <div className="container1">
          <div className='md:ml-5'>
            <img src={frame} className='my-3' alt="" />
            <p className='font-[600] text-[24px] text-[#0D4373]'>
            География
            </p>
          </div>
          <div className='containerrr1 py-[10%]'>
            <img src={card} className='w-[400px] m-auto md:w-[300px]' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Obj