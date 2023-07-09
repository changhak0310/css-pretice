/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const radius = 50;
const speed = ".7s";

const mouth = keyframes`
	0%, 100% {
		stroke-dashoffset: 0;
		transform: rotate(0deg) translate3d(0,0,0);
	}
	50% {
		stroke-dashoffset: ${radius * 3.14 / 4};
		transform: rotate(45deg);
	}
`

const eye = keyframes`
    0%, 100% {
		transform: translate3d(0,0,0);
	}
	50% {
		transform: translate3d(-6px, -3px, 0);
	}
`

const points = keyframes`
    0% {
		stroke-dashoffset: 14;
		transform: translate3d(0,0,0);
	}
	100% {
		stroke-dashoffset: 64;
	}
`

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
    background: #2C2E2E;
    overflow: hidden;
`

const Pacman = styled.svg`
    position: absolute;
    width: ${radius * 2}px;
    height: ${radius * 2}px;
    top: ${(400-radius*2)/2}px;
    left: ${(400-radius*2)/2}px;
    fill: none;
    stroke: #F4D146;
    stroke-width: ${radius}px;
    stroke-linecap: butt;
    stroke-dasharray: ${radius * 3.14};
    animation: ${mouth} ${speed} ease-in-out infinite;
`

const Eye = styled.svg`
    position: absolute;
    width: 12px;
    height: 12px;
    top: 167px;
    left: 204px;
    fill: #2C2E2E;
    animation: ${eye} ${speed} ease-in-out infinite;
`

const Dots = styled.svg`
    position: absolute;
    height: 14px;
    width: 240px;
    top: 193px;
    left: 180px;
    stroke: #F4D146;
    stroke-width: 14px;
    stroke-dasharray: 0px 50px;
    stroke-linecap: round;
    animation: ${points} ${speed} linear infinite;
    stroke-dashoffset: 14;
`

const Day21 = () => {
    return(
        <Frame>
            <Pacman>
                <circle cx="50" cy="50" r="25"/>
            </Pacman>
            <Eye>
                <circle cx="6" cy="6" r="6"/>
            </Eye>
            <Dots>
                <polyline points="0 ,7 240,7"/>
            </Dots>
        </Frame>
    )
}

export default Day21