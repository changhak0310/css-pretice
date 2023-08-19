/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

const numberOfTriggers = 200;
const offset = 400/numberOfTriggers;

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
	background: #34495e;
	color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Plane = styled.div`
    position: absolute;
    z-index: 5;
    pointer-events: none;
    width: 400px;
    height: 200px;
    top: 0;
    left: 0;
    background-color: #e67e22;
    overflow: hidden;
    transform-origin: 50% 0%;
    transition: all .4s ease-in-out;
`
const Trigger = styled.div<Props>`
    box-sizing: border-box;
    position: absolute;
    width: 400px;
    height: 10px;
    left: 0;
    cursor: pointer;

    ${props => css`
        &:nth-of-type(${props.index+1}){
            top: ${(props.index-1)*offset}px;

            &:hover ~ ${Plane} {
                height: ${props.index*offset}px;
                transition: initial;
            }
        }
    `}
`
const Text = styled.div`
    position: absolute;
    pointer-events: none;
    z-index: 2;
    width: 400px;
    top: 169px;
    font-size: 60px;
    line-height: 60px;
    font-weight: 700;
    text-align: center;
    color: #fff;
`
const textFront = css`
    z-index: 10;
    color: transparent;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    transition: all .4s ease-in-out;
`

const Day60 = () => {


    return(
        <Frame>
            {Array.from({length: 200}).map((_,index) => (
                <Trigger key={index} index={index}/>
            ))}
            <Plane>
                <Text css={textFront}>HOVER</Text>
            </Plane>
            <Text>HOVER</Text>
        </Frame>
    )
}

export default Day60