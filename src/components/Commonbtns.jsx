import React from 'react'

const Commonbtns = (props) => {
  return (
    <div>
      <div className={`${props.custom} font-Inter font-bold text-[14px] sm:text-[16px] text-white leading-[25.6px] border border-solid border-[#FFFFFF] py-[13px] px-[46px] rounded-[41px]  hover:bg-gradient-to-r !from-[#7AF57A] !to-[#51C8EF] duration-300 hover:text-black `}>{props.text}</div>
    </div>
  )
}

export default Commonbtns
