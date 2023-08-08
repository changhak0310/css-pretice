/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

const pulsate = keyframes`
    0% {
		transform: scale(.5);
		opacity: 1;
	}
	100% {
		transform: scale(2);
		opacity: 0;
	}
`

const rows = 20;
const columns = 20;
const num = rows * columns;
const triggerSide = 20;
const color = "#2ecc71";

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
    background: #2c3e50;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const MouseFollow = styled.div`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: ${color};
    border-radius: 50%;
    transform: translate(200px, 200px);
    transition: all .3s ease-out;
    pointer-events: none;

    &::after{
        box-sizing: border-box;
        content: '';
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
        border: 2px solid ${color};
        border-radius: 50%;
        top: -5px;
        left: -5px;
        animation: ${pulsate} 1.5s ease-out infinite;
    }
`
const Trigger = styled.a<Props>`
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    float: left;
    width: ${triggerSide}px;
    height: ${triggerSide}px;
    background: none;
    opacity: 0;

    ${props => {
        const row = props.index%20+1;
        const column = props.index/20+1;

        const top = `${row*triggerSide-triggerSide/2}px`;
        const left = `${column*triggerSide-triggerSide/2}px`;
        const trans = `translate3d(${top}, ${left}, 0)`;

        return css`
            &:nth-of-type(${props.index+1}):hover ~ ${MouseFollow} {
                transform: ${trans};
            }
        `
    }}
`

const Day49 = () => {
    return(
        <Frame>
            {Array.from({ length: num }).map((_, index) => (
                <Trigger index={index} href="/" key={index}></Trigger>
            ))}
            <MouseFollow/>
        </Frame>
    )
}

export default Day49