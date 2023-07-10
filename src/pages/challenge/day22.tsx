/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const big = keyframes`
    from {
        stroke-dashoffset: (52*2*3.14);
    }
    to {
        stroke-dashoffset: 60;
    }
`

const one = keyframes`
    from {
        stroke-dashoffset: (37*2*3.14);
    }
    to {
        stroke-dashoffset: 80;
    }
`
const two = keyframes`
    from {
        stroke-dashoffset: (37*2*3.14);
    }
    to {
        stroke-dashoffset: 140;
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
    overflow: hidden;
    background: #28404E;
    background: -moz-linear-gradient(top, #28404E 0%, #1c2e38 100%); 
	background: -webkit-linear-gradient(top, #28404E 0%, #1c2e38 100%);
	background: linear-gradient(to bottom, #28404E 0%, #1c2e38 100%); 
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#28404e', endColorstr='#1c2e38',GradientType=0 ); 
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Headline = styled.div`
    font-weight: 600;
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    line-height: 22px;
`

const HeadTextSmall = styled.div`
    font-weight: 300;
    font-size: 16px;
`

const CircleBig = styled.div`
    position: relative;
    width: 114px;
    height: 114px;
    margin: 30px auto 25px auto;
`

const BigSVG = styled.svg`
    width: 114px;
    height: 114px;
`

const BigBG = styled.circle`
    fill: none;
    stroke-width: 10px;
    stroke: #1b2a33;
`

const BigProgress = styled.circle`
    fill: none;
    stroke-width: 10px;
    stroke: #27e1ae;
    stroke-dasharray: ${52*2*3.14};
    stroke-dashoffset: 60;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    animation: ${big} 1.5s ease-out;
`

const BigText = styled.div`
    position: absolute;
    width: 100%;
    top: 37px;
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    line-height: 22px;
`

const BigTextsmall = styled.div`
    font-size: 14px;
    color: #648192;
`

const CirclesSmall = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 80px;
    text-align: center;
`

const CircleSmall = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 20px;
`

const SmallSVG = styled.svg`
    width: 80px;
    height: 80px;
`

const SmallBG = styled.circle`
    fill: none;
    stroke-width: 6px;
    stroke: #1B2A33;
`

const SmallProgess = styled.circle`
    fill: none;
    stroke-width: 6px;
    stroke: #5ce1ec;
    stroke-linecap: round;
    stroke-dasharray: ${37*2*3.14};
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
`

const smallOne= css`
    stroke-dashoffset: 90%;
    animation: ${one} 1.5s ease-out;
`

const smallTwo = css`
    stroke-dashoffset: 140;
    animation: ${two} 1.5s ease-out;
`

const SmallText = styled.div`
    position: absolute;
    width: 100%;
    top: 26px;
    font-size: 17px;
    text-align: center;
    font-weight: 400;
    line-height: 16px;
`

const SmallTextSmall = styled.div`
    font-size: 12px;
    color: #648192;
`

const Day22 = () => {
    return(
        <Frame>
            <Center>
                <Headline>
                    <HeadTextSmall>your daily</HeadTextSmall>progress
                </Headline>
                <CircleBig>
                    <BigText>2758<BigTextsmall>kcal</BigTextsmall></BigText>
                    <BigSVG>
                        <BigBG cx="57" cy="57" r="52"/>
                        <BigProgress cx="57" cy="57" r="52"/>
                    </BigSVG>
                </CircleBig>
                <CirclesSmall>
                    <CircleSmall>
                        <SmallText>
                            8563<SmallTextSmall>steps</SmallTextSmall>
                        </SmallText>
                        <SmallSVG>
                            <SmallBG cx="40" cy="40" r="37"/>
                            <SmallProgess css={smallOne} cx="40" cy="40" r="37"/>
                        </SmallSVG>
                    </CircleSmall>
                    <CircleSmall>
                        <SmallText>
                            6,2<SmallTextSmall>km</SmallTextSmall>
                        </SmallText>
                        <SmallSVG>
                            <SmallBG cx="40" cy="40" r="37"/>
                            <SmallProgess css={smallTwo} cx="40" cy="40" r="37"/>
                        </SmallSVG>
                    </CircleSmall>
                </CirclesSmall>
            </Center>
        </Frame>
    )
}

export default Day22