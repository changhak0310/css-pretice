/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const Day44 = () => {
    const numberOfRects = 20;
    return(
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] mt-[-200px] ml-[-200px] first-line:ml-[-200px] rounded-sm shadow-[1px_2px_10px_0px_rgba(0,0,0,0.3)] overflow-hidden bg-[#222] text-[#fff] font-['Open Sans'] antialiased group/frame">
            {Array.from({ length: numberOfRects }).map((_, index) => {
                const size = 210-index*10;
                const offset = (400-size)/2;
                const color = 70+index*8;
                const setColor = (num: number) => {
                    return `rgba(${num},${num},${num})`
                }
                const rotate = keyframes`
                    from {
                        transform: rotate(0deg) translate3d(0,0,0);
                    }
                    to {
                        transform: rotate(360deg) translate3d(0,0,0);
                    }
                `
                const z = `z-[${index+1}]`;
                return(
                    <div className="box-border absolute border-[1px] border-solid border=[#222] group-hover/frame:paused" css={css`z-index: ${index+1}; width: ${size}px; height: ${size}px; top: ${offset}px; left: ${offset}px; border-color: ${setColor(color)}; animation: ${rotate} 2s ease-in-out ${index/30}s alternate infinite;`} key={index}/>       
                )
            })}
        </div>
    )
}
export default Day44;