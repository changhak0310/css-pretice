/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const circle = keyframes`
    0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	90%, 100% {
		transform: scale(0);
	}
`
const lines = keyframes`
    0% {
		transform: scaleX(0);
	}
	50% {
		transform: scaleX(1);
	}
	100% {
		transform: scaleX(0);
	}
`

const lineLeftAni = keyframes`
    0% {
		transform-origin: 100% 50%;
	}
	50%, 100% {
		transform-origin: 0% 50%;
	}
`
const lineRightAni = keyframes`
  	0% {
		transform-origin: 0% 50%;
	}
	50%, 100% {
		transform-origin: 100% 50%;
	}  
`
const bracket = keyframes`
   	0% {
		transform: scaleY(0);
	}
	100% {
		transform: scaleY(1);
	} 
`
const bracketLine = keyframes`
    0% {
		transform: scaleX(0);
	}
	100% {
		transform: scaleX(1);
	}
`
const reveal = keyframes`
  	0% {
		transform: scaleY(1);
	}
	100% {
		transform: scaleY(0);
	}  
`
const smallTopAni = keyframes`
  	0% {
		transform: translateX(-20px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}  
`
const smallBottomAni = keyframes`
    0% {
		transform: translateX(20px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
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
    background: #E16D6C;
    color: #fff;
    overflow: hidden;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Circle = styled.div`
    position: absolute;
    z-index: 10;
    height: 50px;
    width: 50px;
    top: 175px;
    left: 175px;
    background-color: #fff;
    animation: ${circle} 1s ease-in-out;
    animation-fill-mode: forwards;
`
const Line = styled.div`
    position: absolute;
    z-index: 10;
    width: 150px;
    height: 4px;
    top: 198px;
    background-color: #fff;
    transform: scaleX(0);
`
const lineLeft = css`
    left: 50px;
    transform-origin: 100% 50%;
    animation: ${lines} 1s ease-in-out .8s, ${lineLeftAni} 1s steps(1) .8s;
`
const lineRight = css`
    right: 50px;
    transform-origin: 0% 50%;
    animation: ${lines} 1s ease-in-out .8s, ${lineRightAni} 1s steps(1) .8s;
`
const Bracket = styled.div`
    position: absolute;
    z-index: 10;
    height: 70px;
    width: 4px;
    top: 165px;
    background-color: #fff;
    animation: ${bracket} .4s ease-out 1.7s;
    animation-fill-mode: both;

    &::before, &::after {
        position: absolute;
        display: block;
        content: '';
        width: 25px;
        height: 4px;
        background-color: #fff
    }
`
const BracketLeft = styled.div`
    left: 50px;

    &::before {
        top: 0;
        left: 0;
        transform-origin: 0% 50%;
        animation: ${bracketLine} .2s ease-out 2.1s;
        animation-fill-mode: both;
    }

    &::after {
        bottom: 0;
        left: 0;
        transform-origin: 0% 50%;
        animation: ${bracketLine} .2s ease-out 2.1s;
        animation-fill-mode: both;
    }
`
const BracketRight = styled.div`
    right: 50px;
    &::before {
        top: 0;
        right: 0;
        transform-origin: 100% 50%;
        animation: ${bracketLine} .2s ease-out 2.1s;
        animation-fill-mode: both;
    }
    &::after {
        bottom: 0;
        right: 0;
        transform-origin: 100% 50%;
        animation: ${bracketLine} .2s ease-out 2.1s;
        animation-fill-mode: both;
    }
`
const Big = styled.div`
    position: absolute;
    z-index: 5;
    top: 173px;
    width: 400px;
    text-align: center;
    font-weight: 800;
    font-size: 50px;
    color: #fff;
    line-height: 50px;
    text-transform: uppercase;
`
const Hide = styled.div`
    position: absolute;
    z-index: 7;
    width: 400px;
    height: 50px;
    background-color: #e16d6c;
    left: 0;
    animation: ${reveal} .4s ease-out 1.7s;
    animation-fill-mode: both;
`
const hideTop = css`
    bottom: 49%;
    transform-origin: 50% 0%;
`

const hideBottom = css`
    top: 49%;
    transform-origin: 50% 100%;
`
const Small = styled.div`
    position: absolute;
    z-index: 10;
    width: 400px;
    text-align: center;
    left: 0;
    font-weight: 300;
    font-size: 30px;
    color: #fff;
    line-height: 30px;
    text-transform: uppercase;
`
const smallTop = css`
    top: 140px;
    animation: ${smallTopAni} .5s ease-out 2.2s;
    animation-fill-mode: both;
`
const smallBottom = css`
    bottom: 140px;
    animation: ${smallBottomAni} .5s ease-in-out 2.2s;
    animation-fill-mode: both;
`

const Day23 = () => {

    return(
        <Frame>
            <Circle/>
            <Line css={lineLeft}/>
            <Line css={lineRight}/>
            <Bracket css={BracketLeft}/>
            <Bracket css={BracketRight}/>
            <Small css={smallTop}>collect</Small>
            <Big>moments</Big>
            <Small css={smallTop}>not things</Small>
            <Hide css={hideTop}/>
            <Hide css={hideBottom}/>
        </Frame>
    )
}

export default Day23