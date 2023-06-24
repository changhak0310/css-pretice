/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const cubicBezier = 'cubic-bezier(0.4, 0, 0.49, 1)';

const sunGoesDown = keyframes`
    0% {
        background: #F57209;
        transform: rotate(-70deg);
    }
    30% {
        background: #FFEF00;
        transform: rotate(-28deg);
    }
    70% {
        background: #FFEF00;
    }
    100% {
        background: #F57209;
        transform: rotate(70deg);
    }
`

const skyTurnsBlack = keyframes`
    0% {
        background: #231000;
    }
    5%{
        background: #8f4904;
    } 
    30% {
        background: #7DDFFC;
    }
    60% {
        background: #7DDFFC;
    }
    80%{
        background: #8f4904;
    }
    100% {
        background: #231000;
    }
`

const pyramideShading = keyframes`
    0% {
        background: #272C34;
    }
	30% {
		background: #F4F4F4;
	}
	60% {
		background: #DDDADA;
	}
    100% {
        background: #272C34;
    }
`

const shadowOnTheFloor = keyframes`
    0% {
		transform: scaleY(0);
	    clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
    }
	30% {
		transform: scaleY(1);
	    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
	}
	55% {
		transform: scaleY(.4);
	}
	75% {
		transform: scaleY(1);
	}
    100% {
		transform: scaleY(0);
	    clip-path: polygon(115px 0%, 231px 0%, 0% 100%);
    }
`

const fadingSand = keyframes`
    0% {
        background: #5e3100;
    }    
    30% {
        background: #F0DE75;
    }
    60% {
        background: #F0DE75;
    }
    100% {
        background: #5e3100;
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
    background: #272C34;
    color: #fff;
`

const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Circle = styled.div`
    position: relative;
    overflow: hidden;
    clip-path: circle(90px at 90px 90px);
    width: 180px;
    height: 180px;
    border-radius: 50%;
`

const Sky = styled.div`
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 124px;
    background: #7DDFFC;

    animation: ${skyTurnsBlack} 4s ${cubicBezier} infinite;
`

const Sun = styled.div`
    position: absolute;
    z-index: 2;
    top: 7px;
    left: 73px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    transform-origin: 50% 400%;
    animation: ${sunGoesDown} 4s ${cubicBezier} infinite;
`

const SideLeft = styled.div`
    position: absolute;
    top: 67px;
    left: 35px;
    height: 57px;
    width: 116px;
    background: #F4F4F4;
    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
    animation: ${pyramideShading} 4s ${cubicBezier} infinite;
`

const SideRight = styled.div`
    position: absolute;
    top: 67px;
    left: 93px;
    height: 57px;
    width: 58px;
    background: #DDDADA;
    clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
    animation: ${pyramideShading} 4s ${cubicBezier} infinite reverse;
`

const Shadow = styled.div`
    position: absolute;
    z-index: 2;
    top: 124px;
    left: -80px;
    height: 30px;
    width: 360px;
    background: rgba(0, 0, 0, 0.2);
    transform-origin: 50% 0%;
    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
    animation: ${shadowOnTheFloor} 4s ${cubicBezier} infinite;
`

const Ground = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: #F0DE75;
    animation: ${fadingSand} 4s ${cubicBezier} infinite;
`

const Day3 = () => {
    
    return(
        <Frame>
            <Center>
                <Circle>
                    <Sky/>
                    <Sun/>
                    <SideLeft/>
                    <SideRight/>
                    <Shadow/>
                    <Ground/>
                </Circle>
            </Center>
        </Frame>
    )
}

export default Day3