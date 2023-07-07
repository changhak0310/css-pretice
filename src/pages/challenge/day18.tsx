/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const green = "#37D493";
const grey = "#444";
const speed = "5s";
const eWidth = "420px";
const eWOffset = "-10px";
const eHeight = "400px";

const elastic = keyframes`
    0% {
        transform: rotateX(90deg);
    }
    15% {
        transform: rotateX(150deg);
    }
    20%{
        transform: rotateX(50deg);
    }
    25%{
        transform: rotateX(120deg);
    }
    30%{
        transform: rotateX(70deg);
    }
    35%{
        transform: rotateX(100deg);
    }
    40%{
        transform: rotateX(83deg);
    }
    45%{
        transform: rotateX(93deg);
    }
    50%{
        transform: rotateX(90deg);
    }
    65%{
        transform: rotateX(30deg);
    }
    70%{
        transform: rotateX(130deg);
    }
    75%{
        transform: rotateX(60deg);
    }
    80%{
        transform: rotateX(110deg);
    }
    85%{
        transform: rotateX(80deg);
    }
    90%{
        transform: rotateX(97deg);
    }
    95%{
        transform: rotateX(87deg);
    }
    100%{
        transform: rotateX(90deg);
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
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
`

const Position = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    left: 0;
`

const top = css`
    top: 0;
    background-color: ${grey};
`

const bottom = css`
    top: 50%;
    background-color: ${green};
`

const Ellipse = styled.div`
    position: absolute;
    z-index: 2;
    width: ${eWidth};
    height: ${eHeight};
    top: 0;
    left: ${eWOffset};
    transform-style: preserve-3d;
    animation: ${elastic} ${speed} ease-in-out infinite;
`

const Box = styled.div`
    position: absolute;
    width: ${eWidth};
    height: ${eHeight};
    backface-visibility: hidden;
    border-radius: 50%;
`

const greynBox = css`
    background-color: ${grey};
    z-index: 2;
    transform: rotateX(0);
`

const greenBox = css`
    background-color: ${green};
    z-index: 1;
    transform: rotateX(180deg);
`

const Day18 = () => {
    return(
        <Frame>
            <Position css={top}/>
            <Position css={bottom}/>
            <Ellipse>
                <Box css={greynBox}/>
                <Box css={greenBox}/>
            </Ellipse>
        </Frame>
    )
}

export default Day18