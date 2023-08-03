/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react"

const Day45 = () => {
    return(
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] mt-[-200px] ml-[-200px] rounded-sm shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)] overflow-hidden bg-[#5CA4EA] text-[#fff] font-['Open Sans'] antialiased">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <div className="relative cursor-pointer group/button">
                    <span className="absolute top-0 left-0 right-0 text-center leading-[58px] uppercase text-[18px] tracking-[1px] font-light">Hover me</span>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="fill-none stroke-1">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="fill-[#5CA4EA] stroke-[#91C9FF] transition-all duration-700 ease-in-out group-hover/button:fill-[#4F95DA]"/>
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="storke-[#fff] transition-all duration-700 ease-in-out" css={css`stroke-dasharray: 40 480%; stroke-dashoffset: 40; &:hover{stroke-dashoffset: -480;}`}/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Day45;