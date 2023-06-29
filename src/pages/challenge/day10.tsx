/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { HeartFilled } from '@ant-design/icons';

interface PointSetPosProps {
    index: number;
}

const speed = "5s";

const spinnerAnimation = keyframes`
    from {
        stroke-dashoffset: 625;
        transform: rotate(-90deg) scaleY(1);
    }
    50% {
        stroke-dashoffset: 0;
        transform: rotate(-90deg) scaleY(1);
    }
    50.001% {
        transform: rotate(-90deg) scaleY(-1);
    }
    to {
        stroke-dashoffset: 625;
        transform: rotate(-90deg) scaleY(-1)
    }
`

const beatAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    35% {
        transform: scale(1.2);
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
    background: #4C4C4C;
    color: #fff;
    font-size: 12px;
    line-height: 100%;
    text-transform: uppercase;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Center = styled.div`
    position: absolute;
    width: 212px;
    height: 212px;
    top: 87px;
    left: 87px;
    background-color: #242424;
    border: 7px solid #3A3A3A;
    border-radius: 50%;
    text-align: 50%;
`

const PointSetPos = styled.div<PointSetPosProps>`
    position: absolute;
    height: 188px;
    width: 188px;
    top: 12px;
    left: 12px;
    transform: rotate(${(props) => ((props.index)*6)}deg);
`

const Point = styled.div`
    position: absolute;
    width: 2px;
    height: 2px;
    top: 0;
    left: 93px;
    background-color: #D3D3D3;
    border-radius: 50%;

    &:nth-of-type(2){ top: 93px; left: auto; right: 0; }
    &:nth-of-type(3){ top: auto; bottom: 0; }
    &:nth-of-type(4){ top: 93px; left: 0; }
`

const Date = styled.div`
    position: absolute;
    text-align: center;
    top: 68px;
    width: 100%;
`

const Time = styled.div`
    position: absolute;
    text-align: center;
    top: 80px;
    width: 100%;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    margin: 4px 0;
`

const Beat = styled.div`
    position: absolute;
    top: 129px;
    left: 57px;

    span {
        color: #F85B5B;
        font-size: 10px;
        float: left;
        margin-top: 1px;
        margin-right: 4px;
        animation: ${beatAnimation} .9s ease-in-out infinite;
    }
`

const Energy = styled.div`
    position: absolute;
    top: 129px;
    right: 55px;
`

const spinner = css`
    position: absolute;
    width: 202px;
    height: 202px;
    border-radius: 50%;
    top: 5px;
    left: 5px;
`

const Circle = styled.circle`
    stroke: #F85B5B;
    stroke-width: 3;
    fill: none;
    stroke-dasharray: 625;
    animation: ${spinnerAnimation} ${speed} linear infinite;
    transform-origin: center center;
    transform: rotate(-90deg);
`

const Day2 = () => {
    return(
        <Frame>
            <Center>
                {Array.from({ length: 15 }).map((_, index) => (
                    <PointSetPos key={index} index={index}>
                        {Array.from({ length: 4}).map((_, index) => (
                            <Point key={index}/>
                        ))}
                    </PointSetPos>)   
                )}
                <svg viewBox="0 0 202 202" xmlns="http://www.w3.org/2000/svg" css={spinner}>
                    <Circle cx="101" cy="101" r="99.5"></Circle>
                </svg>
                <Date>Mon 15 Jan 2015</Date>
                <Time>11:42</Time>
                <Beat><HeartFilled/>81</Beat>
                <Energy>1248 kcal</Energy>
            </Center>     
        </Frame>
    )
}

export default Day2