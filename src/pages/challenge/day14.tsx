/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface IndexProp {
    index: number;
}

const getRandomNumber = (number: number) => {
    return Math.floor(Math.random() * number)
}

const bike = keyframes`
    0%, 100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1.03);
    }
`

const street = keyframes`
    0% {
        transform: translate3d(0, 0, 0) scaleX(1);
    }
    100% {
        transform: translate3d(-210px, 0, 0) scaleX(.8);
    }
`

const helicopter = keyframes`
    0%, 100% {
        transform: translate3d(0, -5px, 0);
    }
    50% {
        transform:translate3d(0, 5px, 0);
    }
`

const cloud = keyframes`
    0% {
        transform: translate3d(0, 0, 0) scaleX(1);
    }
    100% {
        transform: translate3d(-210px, 0, 0) scaleX(.8);
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
    background: #4B4841;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Card = styled.div`
    position: absolute;
    width: 320px;
    height: 180px;
    top: 110px;
    left: 40px;
    perspective: 800px;

    :hover>div{
        transform: rotateX(180deg) translate3d(0, 0, 0);
        box-shadow: 8px -10px -15px 0 rgba(0, 0, 0, 0.5);
    }
`

const Flip = styled.div`
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 1s ease-in-out;
    perspective: 1000px;
    box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.5);
`

const cardStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFCE4E;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    text-align: center;
`

const Front = styled.div`
    z-index: 2;
    transform: rotateX(0);
`

const FrontImg = styled.img`
    position: relative;
    top: 52px;
    animation: ${bike} .6s ease-in-out infinite;
    transform-origin: 50% 100%;
`

const Street = styled.div`
    position: absolute;
    top: 127px;
    left: 80px;
    width: 160px;
    height: 3px;
    overflow: hidden;
`

const Stripe = styled.div<IndexProp>`
    position: absolute;
    right: -25px;
    top: 0;
    height: 3px;
    width: ${props => (2+props.index*2)}px;
    background-color: #4B4841;
    border-radius: 3px;
    animation: ${street} ${(props) => (0.8+getRandomNumber(2)/10)}s linear ${(props) => (getRandomNumber(10)/10)}s infinite;
`

const Back = styled.div`
    transform: rotateX(180deg);
`

const BackImg = styled.img`
    position: relative;
    z-index: 1;
    top: 52px;
    animation: ${helicopter} 1.5s ease-in-out infinite;
    animation-fill-mode: both;
`

const Sky = styled.div`
    position: absolute;
    top: 0;
    left: 80px;
    bottom: 0;
    width: 160px;
    overflow: hidden;
`

const Cloud = styled.div<IndexProp>`
    position: absolute;
    right: -25px;
    top: ${props => (20+props.index*14)}px;
    height: 3px;
    width: ${props => (10+getRandomNumber(150)/10)}px;
    background-color: #4B4841;
    border-radius: 3px;
    animation: ${cloud} ${props => (0.6+getRandomNumber(2)/10)}s linear ${props => (getRandomNumber(10)/10)}s infinite;
`


const Day14 = () => {
    return(
        <Frame>
            <Card>
                <Flip>
                    <Front css={cardStyle}>
                        <FrontImg src="https://100dayscss.com/codepen/bycicle.svg"/>
                        <Street>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <Stripe key={index} index={index}/>
                            ))}
                        </Street>
                    </Front>
                    <Back css={cardStyle}>
                        <BackImg src="https://100dayscss.com/codepen/helicopter.svg"/>
                        <Sky>
                            {Array.from({ length: 9}).map((_, index) => (
                                <Cloud key={index} index={index}/>
                            ))}
                        </Sky>
                    </Back>
                </Flip>
            </Card>
        </Frame>
    )
}

export default Day14