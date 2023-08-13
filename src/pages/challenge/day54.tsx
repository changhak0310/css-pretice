/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const waveBack = keyframes`
    from {
		transform: translate3d(-20px,0,0);
	}
	to {
		transform: translate3d(20px,0,0);
	}
`
const waveMiddle = keyframes`
	from {
		transform: translate3d(10px,0,0);
	}
	to {
		transform: translate3d(-10px,0,0);
	}
`
const waveFront = keyframes`
	from {
		transform: translate3d(-50px,0,0);
	}
	to {
		transform: translate3d(50px,0,0);
	}
`

const bg = "#263A4D";
const dark = "#406384";
const middle = "#5D90BF";
const light = "#7EB3E6";

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
	background: #263A4D;
	color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Wave = styled.div`
    position: absolute;
    height: 150px;
    width: 500px;
    left: -50px;
    background-color: #fff;
`
const Circle = styled.div`
    position: relative;
    float: left;
    width: 50px;
    height: 50px;
    top: -24px;
    border-radius: 50px;

    &:nth-of-type(2n+2) {
        top: -26px;
    }
`
const WaveBack = css`
    top: 225px;
    background-color: ${dark};
    animation: ${waveBack} 4s ease-in-out alternate infinite;
`
const CircleBack = css`
    background-color: ${dark};

    &:nth-of-type(2n+2){
        background-color: ${bg};
    }
`
const WaveMiddle = css`
    top: 280px;
    background-color: ${middle};
    animation: ${waveMiddle} 4s ease-in-out alternate infinite;
`
const CircleMiddle = css`
    background-color: ${middle};

    &:nth-of-type(2n+2){
        background-color: ${dark};
    }
`
const WaveFront = css`
    top: 335px;
    background-color: ${light};
    animation: ${waveFront} 4s ease-in-out alternate infinite;
`
const CircleFront = css`
    background-color: ${light};

    &:nth-of-type(2n+2){
        background-color: ${middle};
    }
`

const Day2 = () => {
    return(
        <Frame>
            <Wave css={WaveBack}>
                {Array.from({ length: 10}).map((_, index) => (
                    <Circle css={CircleBack} key={index}/>
                ))}
            </Wave>
            <Wave css={WaveMiddle}>
                {Array.from({ length: 10}).map((_, index) => (
                    <Circle css={CircleMiddle} key={index}/>
                ))}
            </Wave>
            <Wave css={WaveFront}>
                {Array.from({ length: 10}).map((_, index) => (
                    <Circle css={CircleFront} key={index}/>
                ))}
            </Wave>
        </Frame>
    )
}

export default Day2