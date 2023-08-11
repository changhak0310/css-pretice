/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}
interface DotProps {
    jndex: number;
    index: number;
}

const pulsate = keyframes`
    0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
`

const numberOfRings = 10;
const numberOfDots = 12;
const radius = 40;

const Frame = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
    overflow: hidden;
	background: #27ae60;
	color: #fff;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Fill = styled.div`
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50px;
`
const Ring = styled.div<Props>`
    position: absolute;
    width: ${radius*2}px;
    height: ${radius*2}px;
    top: ${(400-radius*2)/2}px;
    left: ${(400-radius*2)/2}px;

    ${props => {
        const nullBase = props.index-1;
        const dotsPerCircle = numberOfDots+props.index*6;
        return css`
            :nth-of-type(${props.index+1}){
                ${Fill} {
                    animation: ${pulsate} 2s ease-in-out ${props.index/3}s alternate infinite both;
                }
            }
        `
    }}
`
const Dot = styled.div<DotProps>`
    position: absolute;
    width: 8px;
    height: 8px;
    top: ${radius}px;
    left: ${radius}px;

    ${props => {
        const nullBase = props.index-1;
        const nullBaseJ = props.jndex-1;
        const angle = 360/(props.index*6+12);
        const deg = nullBaseJ*angle;
        const trans = `translate3d(0, ${(radius+nullBase*11)*-1}px, 0) rotate(${deg}deg);`
        const transOrigin = `0 ${radius+nullBase*11}px`

        return css`
            :nth-of-type(${props.jndex+1}) {
                transform: ${trans};
                transform-origin: ${transOrigin};
            }
        `
    }}
`

const Day52 = () => {
    return(
        <Frame>
            {Array.from({ length: 10 }).map((_, index) => (
                <Ring key={index} index={index}>
                    {Array.from({ length: (12+index*6)}).map((_, jndex) => (
                        <Dot key={jndex} jndex={jndex} index={index}>
                            <Fill/>
                        </Dot>
                    ))}
                </Ring>
            ))}
        </Frame>
    )
}

export default Day52