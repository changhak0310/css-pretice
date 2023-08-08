/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const egg = keyframes`
    0% {
		transform: translate3d(0,-350px,0) scale(.8, 1.2);
	}
	25% {
		transform: translate3d(0,40px,0) scale(1.05, .9);
	}
	30% {
		transform: translate3d(0,-20px,0) scale(.95, 1.02);
	}
	35% {
		transform: translate3d(0,10px,0) scale(1.01, .98);
	}
	40%, 45% {
		transform: translate3d(0,0,0) scale(1) rotate(0);
	}
	50% {
		transform: translate3d(0,0,0) scale(1) rotate(5deg);
	}
	55% {
		transform: translate3d(0,0,0) scale(1) rotate(-5deg);
	}
	60% {
		transform: translate3d(0,0,0) scale(1) rotate(5deg);
	}
	65%, 70% {
		transform: translate3d(0,0,0) scale(1) rotate(0deg);
	}
	75% {
		transform: translate3d(0,10px,0) scale(1.01, .98);
	}
	80% {
		transform: translate3d(0,-20px,0) scale(1.02, .95);
	}
	100% {
		transform: translate3d(0,350px,0) scale(.9, 1.1);
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
    background: #8e44ad;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Egg = styled.div`
    position: absolute;
    width: 100px;
    height: 130px;
    top: 135px;
    left: 150px;
    background-color: #fff;
    border-radius: 50px 50px 50px 50px / 80px 80px 50px 50px;
    animation: ${egg} 3s ease-in-out infinite;
    transform-origin: 50% 80%;
`


const Day50 = () => {

    

    return(
        <Frame>
          <Egg/>  
        </Frame>
    )
}

export default Day50