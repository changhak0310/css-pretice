/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"

const legSwing = keyframes`
    0%, 100% {
        transform: rotate(-22deg);
    }
    50% {
        transform: rotate(40deg);
    }
`

const ShoeTurn = keyframes`
    0%, 100% {
        transform: rotate(-10deg) translateY(-5px) translateX(10px);
    }
    25% {
        transform: rotate(0deg) translateY(0px) translateX(0px);
    }
    50% {
        transform: rotate(10deg) translateY(-10px) translateX(10px);
    }
    75% {
        transform: rotate(0deg) translateX(-30px) translateY(0);
    }
`

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
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
    background: #f6e8d7;
    background: -moz-radial-gradient(center, ellipse cover,  rgba(246,232,215,1) 0%, rgba(218,190,155,1) 100%);
	background: -webkit-radial-gradient(center, ellipse cover,  rgba(246,232,215,1) 0%,rgba(218,190,155,1) 100%); 
	background: radial-gradient(ellipse at center,  rgba(246,232,215,1) 0%,rgba(218,190,155,1) 100%); 
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6e8d7', endColorstr='#dabe9b',GradientType=1 ); 
	overflow: hidden;
`

const Floor = styled.div`
    position: absolute;
    top: 244px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #232323;
`

const InvisbleMen = styled.div`
    animation: ${FadeIn}.8s ease-in-out 1s;
    animation-fill-mode: both;
`

const Leg = styled.div`
    position: absolute;
    top: 0px;
    left: 147px;
    width: 151px;
    height: 245px;
    transform-origin: 50% 0;
`

const Shoe = styled.div`
    position: absolute;
    width: 151px;
    height: 128px;
    left: 0;
    bottom: 0;
    background: url('https://100dayscss.com/codepen/doc-martens.svg') center center no-repeat;
    transform-origin: 0 95%;
`

const left = css`
    animation: ${legSwing} 2s ease-in-out infinite;

    &>div{
        animation: ${ShoeTurn} 2s ease-in-out infinite;
    }
`

const right = css`
    animation: ${legSwing} 2s ease-in-out 1s infinite;

    &>div{
        animation: ${ShoeTurn} 2s ease-in-out 1s infinite;
    }
`

const Day11 = () => {
    return(
        <Frame>
            <InvisbleMen>
                <Leg css={left}>
                    <Shoe/>
                </Leg>
                <Leg css={right}>
                    <Shoe/>
                </Leg>
            </InvisbleMen>
            <Floor/>
        </Frame>
    )
}

export default Day11