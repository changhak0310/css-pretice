/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const length = 288;

const line = keyframes`
	0% {
		stroke-dashoffset: ${length*4};
	}
	100% {
		stroke-dashoffset: ${length*2};
	}
`
const spin = keyframes`
   	0% {
		transform: rotate(-90deg) translate3d(0,0,0);
	}
	100% {
		transform: rotate(270deg) translate3d(0,0,0);
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
    background: #3FAF82;
    overflow: hidden;
  background: #1BBE9E;
  color: #fff;
`
const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const BG = styled.circle`
    fill: none;
    stroke: #12836d;
    stroke-width: 4;
`
const Loader = styled.circle`
    fill: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: ${length};
    animation: ${line} 4s infinite, ${spin} 3s linear infinite;
    transform-origin: 50% 50%;
`

const Day35 = () => {

    return(
        <Frame>
            <Center>
                <svg width="100px" height="100px" viewBox="0 0 100 100">
                    <BG cx="50" cy="50" r="46"/>
                    <Loader cx="50" cy="50" r="46"/>
                </svg>
            </Center>
        </Frame>
    )
}

export default Day35