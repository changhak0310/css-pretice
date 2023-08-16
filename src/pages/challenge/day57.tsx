/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

const sideLength = 80;
const triangleHeight = sideLength * 1.732;
const translate = 129.2;
const degreeZ = 8;
const degreeY = 35.264;
const degreeX1 = 135;
const degreeX2 = 45;


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
    perspective: 1000px;
`
const Side = styled.div<Props>`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 ${sideLength}px ${triangleHeight}px ${sideLength}px;
    border-color: transparent transparent #eee transparent;
    transform-origin: 50% 100%;
    transition: all 3s ease-in-out;
`
const Ikosaeder = styled.div`
    transform-style: preserve-3d;
    transform: rotateX(-40deg) rotateY(-40deg);
    transition: all 3s ease-in-out;
    height: 280px;
    width: 160px;
    cursor: pointer;

    &:hover {
        transform: rotateX(-400deg) rotateY(-400deg);

        ${Side} {
            opacity: 0.5;
        }
    }
`
const side = (index: number) => {
    const trans1 = `translateZ(${translate}px) rotateZ(90deg) rotateX(159.095deg);`
    const trans2 = `translateZ(${translate}px) rotateZ(-90deg) rotateX(159.095deg);`
    const trans3 = `translateZ(${-1*translate}px) rotateZ(90deg) rotateX(-159.095deg);`
    const trans4 = `translateZ(${-1*translate}px) rotateZ(-90deg) rotateX(-159.095deg);`
    const trans5 = `rotateY(-90deg) translateZ(${translate}px) rotateX(20.905deg);`
    const trans6 = `rotateY(-90deg) translateZ(${translate}px) rotateX(159.095deg);`
    const trans7 = `rotateY(-90deg) translateZ(${translate*-1}px) rotateX(-20.905deg);`
    const trans8 = `rotateY(-90deg) translateZ(${translate*-1}px) rotateX(-159.095deg);`
    const trans9 = `translateY(${translate}px) rotateX(69.095deg);`
    const trans10 = `translateY(${translate}px) rotateX(-69.095deg);`
    const trans11 = `translateY(${translate*-1}px) rotateX(110.905deg);`
    const trans12 = `translateY(${translate*-1}px) rotateX(-110.905deg);`
    const trans13 = `translateY(${translate*-1}px) translateX(${sideLength}px) rotateX(${degreeX1*-1}deg) rotateY(${degreeY*-1}deg) rotateZ(${degreeZ*-1}deg);`
    const trans14 = `translateY(${translate*-1}px) translateX(${sideLength}px) rotateX(${degreeX1}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ*-1}deg);`
    const trans15 = `translateY(${translate*-1}px) translateX(${sideLength*-1}px) rotateX(${degreeX1*-1}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ}deg);`
    const trans16 = `translateY(${translate*-1}px) translateX(${sideLength*-1}px) rotateX(${degreeX1}deg) rotateY(${degreeY*-1}deg) rotateZ(${degreeZ}deg);`
    const trans17 = `translateY(${translate}px) translateX(${sideLength}px) rotateX(${degreeX2}deg) rotateY(${degreeY*-1}deg) rotateZ(${degreeZ*-1}deg);`
    const trans18 = `translateY(${translate}px) translateX(${sideLength}px) rotateX(${degreeX2*-1}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ*-1}deg);`
    const trans19 = `translateY(${translate}px) translateX(${sideLength*-1}px) rotateX(${degreeX2}deg) rotateY(${degreeY}deg) rotateZ(${degreeZ}deg);`
    const trans20 = `translateY(${translate}px) translateX(${sideLength*-1}px) rotateX(${degreeX2*-1}deg) rotateY(${degreeY*-1}deg) rotateZ(${degreeZ}deg);`

    switch (index) {
        case 0: return css`
            transform: ${trans1};
        `
        case 1: return css`
            transform: ${trans2};
            border-color: transparent transparent #e1e1e1 transparent;
        `
        case 2: return css`
            transform: ${trans3};
        `
        case 3: return css`
            transform: ${trans4};
            border-color: transparent transparent #e1e1e1 transparent;
        `
        case 4: return css`
            transform: ${trans5};
        `
        case 5: return css`
            transform: ${trans6};
            border-color: transparent transparent #e1e1e1 transparent;
        `
        case 6: return css`
            transform: ${trans7};
        `
        case 7: return css`
            transform: ${trans8};
            border-color: transparent transparent #e1e1e1 transparent;
        `
        case 8: return css`
            transform: ${trans9};
        `
        case 9: return css`
            transform: ${trans10};
            border-color: transparent transparent #e1e1e1 transparent;
        `
        case 10: return css`
            transform: ${trans11};
        `
        case 11: return css`
            transform: ${trans12};
            border-color: transparent transparent #e1e1e1 transparent;
        `
        case 12: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans13};
            border-color: #fff transparent transparent transparent;
        `
        case 13: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans14};
            border-color: #fff transparent transparent transparent;
        `
        case 14: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans15};
            border-color: #fff transparent transparent transparent;
        `
        case 15: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans16};
            border-color: #fff transparent transparent transparent;
        `
        case 16: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans17};
            border-color: #fff transparent transparent transparent;
        `
        case 17: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans18};
            border-color: #fff transparent transparent transparent;
        `
        case 18: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px; 
            transform: ${trans19};
            border-color: #fff transparent transparent transparent;
        `
        case 19: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans20};
            border-color: #fff transparent transparent transparent;
        `
        case 20: return css`
            border-width: ${triangleHeight}px ${sideLength}px 0 ${sideLength}px;
            transform: ${trans20};
            border-color: #fff transparent transparent transparent;
        `
    }
}


const Day2 = () => {


    return(
        <Frame>
            <Center>
                <Ikosaeder>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <Side css={side(index)} key={index} index={index}/>
                    ))}
                </Ikosaeder>
            </Center>
        </Frame>
    )
}

export default Day2