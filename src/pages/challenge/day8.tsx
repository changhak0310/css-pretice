/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes  } from "@emotion/react"

interface DivProps{
    index: number;
}

const getRandomNumber = (number: number) => {
    return Math.floor(Math.random() * number)
}

const frame = keyframes`
    from {
        transform: rotate(0deg) translate3d(0, 0, 0);
    }
    to {
        transform: rotate(360deg) translate3d(0, 0, 0);
    }
`;

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
    background: #000;
    filter: contrast(25);
`

const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Ball = styled.div`
    position: relative;
    width: 90px;
    height: 90px;
    background-color: #fff;
    border-radius: 50%;
    filter: blur(15px);
`

const Blubb = styled.div<DivProps>`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    transform: rotate(${({ index }) => getRandomNumber(300)}deg);
    &::after{
        position: absolute;
        display: block;
        content: '';
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        filter: blur(5px);
        ${(props) => {
            const trasOrigin = 40-props.index*3+"px";
            const animationIn = 2.5+props.index/5+"s";
            const delay = "ease-in-out";
            const animationOut = props.index/ 5+"s";
            const direction = "infinite";
            return(css`
                transform-origin: ${trasOrigin} ${trasOrigin};
                animation: ${frame} ${animationIn} ${delay} ${animationOut} ${direction};
            `)
        }}
    }
`;

const Sparkle = styled.div<DivProps>`
    position: absolute;
    top: 38px;
    left: 38px;
    transform: rotate(${({ index }) => getRandomNumber(300)}deg);
    ${(props) => {
            const width = 7 + props.index+"px";
            return(css`
                width: ${width};
                height: ${width};
    `)}}
    
    &::after{
        position: absolute;
        display: block;
        content: '';
        background-color: #fff;
        border-radius: 50%;
        filter: blur(3px);

        ${(props) => {
            const width = 7 + props.index+"px";
            const animationIn = 3.5 + props.index / 5 + "s";
            const animationOut = (props.index / 5)+"s";
            const tras = 60 - props.index * 2+"px";
            const delay = "ease-in-out";
            const direction = "infinite";
            return(css`
                animation: ${frame} ${animationIn} ${delay} ${animationOut} ${direction};
                transform-origin: ${tras} ${tras};
                width: ${width};
                height: ${width};
        `)}}
    }
`;


const Day8 = () => {
    return(
        <Frame>
            <Center>
                <Ball/>
                {Array.from({ length: 8 }).map((_, index) => {
                    return <Blubb key={index} index={index}/>})}
                {Array.from({length: 10}).map((_, index) => {
                    return(<Sparkle key={index} index={index}/>)})}
            </Center>
        </Frame>
    )
}

export default Day8