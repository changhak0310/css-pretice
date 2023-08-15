/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

const speed = 7;
const numberOfLeafs = 16;
const leafShadow = `-5px -5px 1px 0 rgba(0,0,0,0.06)`;
const angle = 360/numberOfLeafs;

const flower = keyframes`
    0% {
		transform: rotate(0);
	}
	60% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
`
const dot = keyframes`
    12% {
		transform: scale(0);
	}
	20% {
		transform: scale(1.1);
	}
	25% {
		transform: scale(0.95);
	}
	30%, 55% {
		transform: scale(1);
	}
	57.9% {
		transform: scale(1.1);
	}
	70% {
		transform: scale(0);
	}
`
const leaf = (index: number) => {
    const percentIn = index*(45/numberOfLeafs)+10;
    const percentOut = 75;
    const trans = `rotate(${index*angle}deg) translateY(0)`;
    const trans2 = `rotate(${index*angle}deg) translate(-35px, -35px) scale(2);`; 
    const trans3 = `rotate(${index*angle}deg) translate(-35px, -35px) scale(2);`;
    const trans4 = `rotate(${index*angle}deg) translate(-35px, -35px) scale(2);`;
    return keyframes`
        0%,100% {
			transform: ${trans};
		}
        ${percentIn.toString(10)+"%"} {
            transform: ${trans2};
            box-shadow: ${leafShadow};
        }
        60% {
            transform: ${trans3};
            box-shadow: ${leafShadow};
        }
        ${percentOut.toString(10)+"%"} {
            transform: ${trans4};
            box-shadow: ${leafShadow};
        }
    `
}

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
	background: #16A078;
	color: #fff;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Leaf = styled.div<Props>`
    position: absolute;
    z-index: 1;
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 2px 50px;
    opacity: 0.8;
    transition: all .5s ease-in-out;
    box-shadow: 0 0 0 0 rgba(0,0,0,0);

    ${props => {
        const trans = `rotate(${props.index*angle}deg) translateY(0);`;
        return css`
            &:nth-of-type(${props.index+1}) {
                transform: ${trans};
                animation: ${leaf(props.index)} ${speed}s ease infinite;     
            }
    `}}

    &:nth-of-type(2n+2){
        z-index: 2;
    }
`
const Dot = styled.div`
    position: absolute;
    z-index: 5;
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
    background-color: #f1c40f;
    border-radius: 50%;
    opacity: 0.8;
    transform: scale(0);
    transition: opacity .5s ease-in-out;
    animation: ${dot} ${speed}s ease-in-out infinite;
`
const Flower = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 175px;
    left: 175px;
    transition: all .5s ease-in-out;
    animation: ${flower} ${speed}s ease infinite;

    &:hover{
        ${Leaf}, ${Dot} {
            opacity: 0.3;
        }
    }
`



const Day56 = () => {
    return(
        <Frame>
           <Flower>
                {Array.from({ length: 16 }).map((_, index) => (
                    <Leaf key={index} index={index}/>
                ))}
                <Dot/>
            </Flower> 
        </Frame>
    )
}

export default Day56