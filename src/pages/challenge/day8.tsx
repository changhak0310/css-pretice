/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"

const getRandomNumber = (number: number) => {
    return Math.floor(Math.random() * number)
}

const rotate1 = Array.from({ length: 8 }, (_, index) => {
    return keyframes`
        from {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
        to {
            transform: rotate(360deg) translate3d(0, 0, 0);
        }
    `
})

const rotate2 = Array.from({ length: 11 }, (_, index) => {
    return keyframes`
        from {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
        to {
            transform: rotate(360deg) translate3d(0, 0, 0);
        }
    `
})

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

    ${rotate1.map((aniamtion, index) => {
            const time = 2.5 + index / 5 + "s";
            const delay = (index / 5)+"s";
            const trans = 40 - index * 3+"px";
            return css`
                &>:nth-of-type(${index}) {
                    ::after{
                        transform-origin: calc(${trans} + ${trans});
                        animation: ${aniamtion} ${time} ease-in-out ${delay} infinite;
                    }
                }
            `;
    })}

    ${rotate2.map((aniamtion, index) => {
            const num = index+9;
            const time = 3.5 + index / 5 + "s";
            const delay = (index / 5)+"s";
            const width = 7 + index+"px";
            const tras = 60 - index * 2+"px";
            return css`
                &>:nth-of-type(${num}) {
                    width: ${width};
                    height: ${width};
                    transform: rotate(${getRandomNumber(300)}deg);
                    ::after{
                        animation: ${aniamtion} ${time} ease-in-out ${delay} infinite;
                        transform-origin: ${tras} ${tras};
                        width: ${width};
                        height: ${width};
                    }
                }
            `;
    })}
`

const Blubb = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    transform: rotate(${getRandomNumber(300)}deg);
    &::after{
        position: absolute;
        display: block;
        content: '';
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 50%;
        filter: blur(5px);
    }
`

const Sparkle = styled.div`
    position: absolute;
    top: 38px;
    left: 38px;
    
    &::after{
        position: absolute;
        display: block;
        content: '';
        background-color: #fff;
        border-radius: 50%;
        filter: blur(3px);
    }
`


const Day8 = () => {
    return(
        <Frame>
            <Center>
                <Ball>
                    {
                        rotate1.map((index) => {
                            return(<Blubb/>)
                          })
                    }
                    {
                        rotate2.map((index) => {
                            return(<Sparkle/>)
                        })
                    }
                </Ball>
            </Center>
        </Frame>
    )
}

export default Day8