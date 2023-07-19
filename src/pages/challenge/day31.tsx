/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { time } from "console";

interface IndexProps {
    index: number
}

const dotAni = keyframes`
    0%, 100%{
        transform: translate3d( 50px, 0, 0);
    }
    50% {
        transform: translate3d(-50px, 0, 0);
    }
`

const duration = 60;
const numberOfDots = 20;
const oscillations = 40;

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
    background: #4C4BA2;
`

const Dots = styled.div`
    padding-top: 28px;
    padding-left: 194px;
`

const Dot = styled.div<IndexProps>`
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    margin: 5px 0;

    ${props => {
        const time = duration / (oscillations+numberOfDots-props.index);
        return css`
            &:nth-of-type(${props.index+1}) {
                animation: ${dotAni} ${time * 1000}ms ease-in-out infinite
            }
        `
    }}
`



const Day31 = () => {
    return(
        <Frame>
            <Dots>
                {Array.from({ length: 20 }).map((_, index) => (
                    <Dot key={index} index={index}/>
                ))}
            </Dots>
        </Frame>
    )
}

export default Day31