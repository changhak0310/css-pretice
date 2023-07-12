/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const buttonAni = keyframes`
    0% {
		width: 260px;
		left: 70px;
		border-color: #fff;
		color: #fff;
	}
	50% {
		color: transparent;
	}
	100% {
		width: 60px;
		left: 170px;
		border-color: #45B078;
		background: transparent;
		color: transparent;
	}
`
const circleAni = keyframes`
    0% {
		stroke-dashoffset: 183;
	}
	50% {
		stroke-dashoffset: 0;
		stroke-dasharray: 183;
		transform: rotate(-90deg) scale(1);
		opacity: 1;
	}
	90%, 100% {
		stroke-dasharray: 500 500;
		transform: rotate(-90deg) scale(2);
		opacity: 0;
	}
`
const fill = keyframes`
    0% {
		background: transparent;
		border-color: #fff;
	}
	100% {
		background: #fff;
	}
`
const check = keyframes`
    0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
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
    background: #57D895;
    color: #fff;
    overflow: hidden;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const hidden = css`
    display: none;
`

const Button = styled.label`
    box-sizing: border-box;
    position: absolute;
    display: block;
    width: 260px;
    height: 60px;
    top: 170px;
    left: 70px;
    border: 2px solid #fff;
    border-radius: 30px;
    text-align: center;
    line-height: 56px;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover{
        background-color: #37BE77;
    }
`
const Img = styled.img`
    position: absolute;
    z-index: 2;
    top: 16px;
    left: 15px;
    opacity: 0;
`
const Circle = styled.svg`
    position: absolute;
    width: 60px;
    height: 60px;
    z-index: 2;
    top: 170px;
    left: 170px;
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-dasharray: 183 183;
    stroke-dashoffset: 183;
    pointer-events: none;
    transform: rotate(-90deg);
`
const Input = styled.input`
    &:checked {
        & ~ .button {
            animation: ${buttonAni} .5s ease both, ${fill} .5s ease-out 1.5s forwards;
        }
        img {
            animation: ${check} .5s ease-out 1.5s both;
        }
        & ~ .circle {
            animation: ${circleAni} 2s ease-out .5s both;
        }
    }
`

const Day24 = () => {

    return(
        <Frame>
            <Input type="checkbox" id="button" css={hidden}/>
            <Button htmlFor="button" className="button">Finish
                <Img src="https://100dayscss.com/codepen/checkmark-green.svg"/>
            </Button>
            <Circle className="circle">
                <circle cx="30" cy="30" r="29"/>
            </Circle>
        </Frame>
    )
}

export default Day24