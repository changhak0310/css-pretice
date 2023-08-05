/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"

interface Props{
    index: number
}

const inOut = (index: number) => {
    const nullBase = index-1; 
    const ani0 = `scale(${1-nullBase/7}) rotate(${nullBase*5}deg)`;
    const ani1 = `scale(${1-nullBase/22}) rotate(${nullBase*10+360}deg)`;
    return keyframes`
        0% {
			transform: ${ani0};
		}
		100% {
			transform: ${ani1};
		}
    `
}

const numberOfRings = 6;
const numberOfDots = 12;
const radius = 100;
const dotsPerCircle = 12;
const angle = 360/dotsPerCircle;

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
    background: #27ae60;
    color: #fff;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	transform: perspective(60px);
	transform-style: preserve-3d;
`
const Dot = styled.div<Props>`
    position: absolute;
    width: 10px;
    height: 10px;
    top: ${radius}px;
    left: ${radius}px;
    background-color: #fff;
    border-radius: 50px;

    ${props => {
        const nullBase = props.index-1;
        const deg = nullBase*angle
        const transform = `translate3d(0, ${radius*-1}px, 0) rotate(${deg}deg)`;
        return css`
            :nth-of-type(${props.index+1}) {
                transform: ${transform} ;
                transform-origin: 0 ${radius}px;
            }`
        }
    }
`
const Ring = styled.div<Props>`
    position: absolute;
    width: ${radius*2}px;
    height: ${radius*2}px;
    top: ${(400-radius*2)/2}px;
    left: ${(400-radius*2)/2}px;

    ${props => {
        const nullBase = props.index-1;
        return css`
            :nth-of-type(${props.index+1}) {
                animation: ${inOut(props.index)} 6s ease-in-out alternate infinite;
            }
            &>:nth-of-type(${props.index+1}) {
                opacity: ${1-nullBase/10};
            }
            `
        }
    }
`

const Day46 = () => {

    return(
        <Frame>
            {Array.from({ length: numberOfRings }).map((_, index) => (
                <Ring index={index} key={index}>
                    {Array.from({ length: numberOfDots}).map((_, index) => (
                        <Dot index={index} key={index}/>
                    ))}
                </Ring>
            ))}
        </Frame>
    )
}

export default Day46