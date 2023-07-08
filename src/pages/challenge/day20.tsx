/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"

const fly = keyframes`
    0%, 50% {
		transform: translate3d(0,0,0) scale(1);
	}
	60% {
		transform: translate3d(-10px,5px,0) scale(1.05);
	}
	70% {
		opacity: 1;
	}
	85% {
		opacity: 0;
	}
	100% {
		transform: translate3d(300px,-150px,0) scale(0.4);
		opacity: 0;
	}
`

const circle = keyframes`
    0% {
		transform: translate3d(0,0,0) scale(1);
	}
	20% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(0);
	}
`

const button = keyframes`
    0% {
		transform: scale(1);
	}
	30% {
		background: #1abc9c;
		color: transparent;
		width: 200px;
		left: 100px;
	}
	50%,60% {
		width: 40px;
		left: 180px;
		transform: scale(1);
	}
	70% {
		transform: scale(1.1);
	}
	100% {
		width: 40px;
		left: 180px;
		background: #1abc9c;
		color: transparent;
		transform: scale(0);
	}
`

const resetKeyframe = keyframes`
    from {
		opacity: 0;
	}
	to {
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
    background: #2c3e50;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
`

const Circle = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 65px;
    left: 100px;
    background-color: #354a5f;
    border-radius: 50%;

    #cb:checked ~ & {
        animation: ${circle} 1s ease-in-out;
        animation-fill-mode: both;
    }
`

const circleOuter = css`
    box-sizing: border-box;
    background: none;
    border: 4px solid #354a5f;

    #cb:checked ~ & {
        animation: ${circle} .8s ease-in-out .2s;
        animation-fill-mode: both;
    }
`

const Icon = styled.svg`
    position: absolute;
    z-index: 2;
    top: 130px;
    left: 140px;
    transform: translate3d(0, 0, 0);
    fill: none;
    stroke-width: 2px;
    stroke: #ecf0f1;
    stroke-linecap: square;
    stroke-dasharray: 325 325;
`

const mail = css`
    width: 120px;
    height: 70px;
    stroke-dashoffset: 0;

    #cb:checked ~ & {
        stroke-dashoffset: 326;
        transition: stroke-dashoffset 1s ease-in-out;
    }
`

const plane = css`
    width: 120px;
    height: 110px;
    stroke-dashoffset: 325;

    #cb:checked ~ & {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 1s ease-in-out .6s;
        animation: ${fly} 2.4s ease-in-out;
        animation-fill-mode: both;
    }
`

const CB = styled.input`
    display: none;
`

const Button = styled.label`
    position: absolute;
    z-index: 10;
    width: 200px;
    height: 40px;
    top: 290px;
    left: 100px;
    background-color: #ecf0f1;
    color: #2c3e50;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;

    &:hover{
       background-color: #1abc9c;
       color: #fff; 
    }

    #cb:checked ~ & {
        animation: ${button} 1.5s ease-in-out 1.7s;
        animation-fill-mode: both;
    }
`

const reset = css`
    opacity: 0;
	z-index: 5;

    #cb:checked ~ & {
        animation: ${resetKeyframe} 1s ease-in-out 3.7s;
        animation-fill-mode: both;
    }
`

const Day20 = () => {
    return(
        <Frame>
            <CB type="checkbox" id="cb"/>
            <Button htmlFor="cb">Send mail</Button>
            <Button htmlFor="cb" css={reset}>Reset</Button>
            <Circle/>
            <Circle css={circleOuter}/>
            <Icon css={mail}>
                <polyline points="119,1 119,69 1,69 1,1"></polyline>
                <polyline points="119,1 60,45 1,1 119,1"></polyline>
            </Icon>
            <Icon css={plane}>
                <polyline points="119,1 1,59 106,80 119,1"></polyline>
                <polyline points="119,1 40,67 43,105 69,73"></polyline>
            </Icon>
        </Frame>
    )
}

export default Day20