/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number
}

const getRandomNumber = (number: number) => {
    return Math.floor(Math.random() * number)
}

const flickr = keyframes`
    0%,100% {
		opacity: 1;
	}
	50% {
		opacity: 0.2;
	}
`
const shootingStar = keyframes`
    0% {
		transform: translate3d(0,0,0) rotate(20deg);
	}
	10%,100% {
		transform: translate3d(451px,164px,0) rotate(20deg);
	}
`

const numberOfStars = 300;
const numberOdShootingStars = 6;

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
    background: #fff;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Stage = styled.div`
    position: absolute;
    width: 280px;
    height: 280px;
    top: 60px;
    left: 60px;
    background-color: #1d4253;
    background: -moz-linear-gradient(top, #1d4253 0%, #6bb5c4 100%); 
	background: -webkit-linear-gradient(top, #1d4253 0%,#6bb5c4 100%);
	background: linear-gradient(to bottom, #1d4253 0%,#6bb5c4 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1d4253', endColorstr='#6bb5c4',GradientType=0 );
    border-radius: 50%;
    overflow: hidden;
`
const Star = styled.div<Props>`
    position: absolute;
    width: 1px;
    height: 1px;
    border-radius: 1px;
    background-color: #fff;

    ${props => css`
        :nth-of-type(${props.index+1}){
            top: ${getRandomNumber(280)}px;
            left: ${getRandomNumber(280)}px;
            animation: ${getRandomNumber(20)+20/10}s ${flickr} ${getRandomNumber(20)/-10}s infinite;
        }
    `}
`
const ShootingStar = styled.div<Props>`
    position: absolute;
    top: 0;
    left: -120px;
    width: 120px;
    height: 2px;
    background: url(https://100dayscss.com/codepen/shooting-star.png) center center no-repeat;
    background-size: 100% 100%;
    transform: rotate(20deg);

    ${props => css`
        &:nth-of-type(${props.index+numberOfStars+1}) {
            top: ${getRandomNumber(100)-30}px;
            animation: ${getRandomNumber(5)+20}s ${shootingStar} ${getRandomNumber(250)/10}s infinite;
        }
    `}
`

const Day42 = () => {

    return(
        <Frame>
            <Stage>
                {Array.from({ length: numberOfStars}).map((_, index) => (
                    <Star index={index} key={index}/>
                ))}
                {Array.from({ length: 6}).map((_, index) => (
                    <ShootingStar index={index} key={index}/>
                ))}
            </Stage>
        </Frame>
    )
}

export default Day42