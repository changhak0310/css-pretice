/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface DivProps {
    index: number;
    duringTime: number;
}

const rainyColor = "#7FC1F9";

const getRandomNumber = (number: number) => {
    return Math.floor(Math.random() * number)
}

const drop = keyframes`
    0% {
        transform: translate3d(40px, -320px, 0) scaleX(1) scaleY(1) rotate(17deg);
    }
    85% {
        transform: translate3d(0, 0, 0) scaleX(1) scaleY(1) rotate(17deg);
    }
    100% {
        transform: translate3d(0, 0, 0) scaleX(3) scaleY(0) rotate(0deg);
    }
`

const rise = keyframes`
    from {
        transform: translate(-20px, 200px);
    }
    to {
        transform: translate(0px, 0px);
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
    background: #1A2238;
    color: #394568;
    font-family: 'Open Sans', Helvetica, sans-serif;
	font-weight: 300;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
`

const Moon = styled.div`
    position: absolute;
    width: 67px;
    height: 67px;
    top: 45px;
    left: 55px;
    border-radius: 50px;
    background-color: #F6EDBD;
    overflow: hidden;
    box-shadow: 0 0 10px 0 #F6EDBD;
    animation: ${rise} 1s ease-out;

    &>:nth-of-type(2){ left: 0px; top: 12px; }
    &>:nth-of-type(3){ left: 10px; top: 56px; }
    &>:nth-of-type(4){ width: 6px; height: 6px; left: 49px; top: 37px; }
    &>:nth-of-type(5){ width: 6px; height: 6px; left: 61px; top: 24px; }
    &>:nth-of-type(6){ width: 6px; height: 6px; left: 33px; top: 55px; }
    &>:nth-of-type(7){ width: 6px; height: 6px; left: 46px; top: 17px; }
    &>:nth-of-type(8){ width: 6px; height: 6px; left: 27px; top: 28px; }
    &>:nth-of-type(9){ width: 6px; height: 6px; left: 17px; top: 39px; }
    &>:nth-of-type(10){ width: 4px; height: 4px; left: 15px; top: 25px; }
    &>:nth-of-type(11){ width: 4px; height: 4px; left: 37px; top: 37px; }
`

const Crater = styled.div`
    position: absolute;
    width: 11px;
    height: 11px;
    top: 9px;
    left: 28px;
    border-radius: 10px;
    background-color: #ECE1A8; 
`

const HillPosition = styled.div`
    &>:nth-of-type(2){ top: 197px; left: 177px;}
    &>:nth-of-type(3){ top: 248px; left: -137px; background: #303C5D;}
    &>:nth-of-type(4){ top: 221px; left: 63px; background: #303C5D;}
    &>:nth-of-type(5){ top: 248px; left: 292px; background: #303C5D;}
`

const Hill = styled.div`
    position: absolute;
    z-index: 2;
    width: 337px;
    height: 281px;
    top: 201px;
    left: -57px;
    background-color: #26314F;
    border-radius: 50%;
`

const Front = styled.div`
    position: absolute;
    z-index: 10;
    width: 400px;
    height: 90px;
    left: 0px;
    bottom: 0px;
    background-color: #fff;
`

const Temperature = styled.div`
    float: left;
    margin-left: 20px;
    font-size: 45px;
    line-height: 90px;
`

const Info = styled.div`
    float: left;
    margin: 25px 0 0 13px;
    font-size: 15px;
    line-height: 20px;
`

const PreviewTable = styled.table`
    float: right;
    font-weight: 400;
    text-align: right;
    font-size: 15px;
    line-height: 20px;
    margin: 25px 20px 0 0;

    tbody{
        td{
            padding: 0 3px;
            text-transform: uppercase;

            &:first-child {
                font-weight: 300;
            }
        }
    }
`

const DropRain = styled.div<DivProps>`
    position: absolute;
    z-index: 20;
    left: ${props => -20+38*props.index}px;
    bottom: 90px;
    border-radius: 50%;
    transform-origin: 50% 50%;
    animation: ${drop} ${(props) => (props.duringTime + getRandomNumber(2) / 10)}s linear ${(props) => (getRandomNumber(50) / 25)}s infinite;

    &:before{
        position: absolute;
        content: '';
        display: block;
        top: -2px;
        left: 1px;
        width: 6px;
        height: 6px;
        background-color: ${rainyColor};
        border-radius: 3px;
    }

    &:after{
        position: absolute;
        content: '';
        display: block;
        top: -5px;
        left: 2px;
        width: 4px;
        height: 10px;
        background-color: ${rainyColor};
        border-radius: 50%;
    }
`

const bigRain = css`
    width: 8px;
    height: 8px;
    animation-fill-mode: both;

    &:before {
        top: -2px;
        left: 1px;
        width: 6px;
        height: 6px;
	}
		
	&:after {
        top: -5px;
        left: 2px;
        width: 4px;
        height: 10px;
	}
`

const mediumRain = css`
    opacity: 0.6;
    width: 6px;
    height: 6px;
    animation-fill-mode: both;

    &:before {
		top: -2px;
		left: 1px;
		width: 4px;
		height: 4px;
	}
		
	&:after {
		top: -4px;
		left: 2px;
		width: 2px;
		height: 6px;
	}
`

const smallRain = css`
    opacity: 0.3;
    width: 4px;
    height: 4px;
	animation-fill-mode: both;

    &:before {
		top: -2px;
		left: 1px;
		width: 2px;
		height: 2px;
	}
	
	&:after {
		top: -3px;
		left: 1px;
		width: 2px;
		height: 4px;
	}
`

const Day9 = () => {
    return(
        <Frame>
            <Moon>
                {Array.from({ length: 11}).map((_, index) => (
                    <Crater key={index}/>
                ))}
            </Moon>
            <HillPosition>
                {Array.from({ length: 5}).map((_, index) => (
                    <Hill key={index}/>
                ))}  
            </HillPosition>
            <Front>
                <Temperature>12°</Temperature>
                <Info>Wind: E 7 km/h <br/> Humidity: 87%</Info>
                <PreviewTable>
                    <tbody>
                        <tr>
                            
                            <td>Tue</td>
                            <td>21° / 9°</td>
                        </tr>
                        <tr>
                            <td>Wed</td>
                            <td>23° / 10°</td>
                        </tr>     
                    </tbody>
                </PreviewTable>
            </Front>
            {Array.from({ length: 10}).map((_, index) => (
                <DropRain key={index} index={index} duringTime={0.7} css={bigRain}/>
            ))}
            {Array.from({ length: 10}).map((_, index) => (
                <DropRain key={index} index={index} duringTime={1.3} css={mediumRain}/>
            ))}
            {Array.from({ length: 10}).map((_, index) => (
                <DropRain key={index} index={index} duringTime={1.9} css={smallRain}/>
            ))}
        </Frame>
    )
}

export default Day9