/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

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
	background: #E47512;
	color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Center = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 100px;
    perspective: 1000px;
`
const Cube = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    transform-style: preserve-3d;
    transform: translateZ(-100px) rotateX(70deg) rotateZ(-45deg);
    transition: all 1s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: translateZ(-100px) rotateX(-120deg) rotateZ(135deg);
    }
`
const Side = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
`
const front = css`
    transform: rotateY(0deg) translateZ(100px);
    background-color: #fff;
`
const back = css`
    transform: rotateX(180deg) translateZ(100px);
    background-color: #ccc;
`
const right = css`
    transform: rotateY(90deg) translateZ(100px);
    background-color: #ddd;
`
const left = css`
    transform: rotateY(-90deg) translateZ(100px);
    background-color: #eee;
`
const top = css`
    transform: rotateX(90deg) translateZ(100px);
    background-color: #eee;
`
const bottom = css`
    transform: rotateX(-90deg) translateZ(100px);
    background-color: #ddd;
`

const Day48 = () => {
    return(
        <Frame>
            <Center>
                <Cube>
                    <Side css={front}/>
                    <Side css={back}/>
                    <Side css={right}/>
                    <Side css={left}/>
                    <Side css={top}/>
                    <Side css={bottom}/>
                </Cube>
            </Center>
        </Frame>
    )
}

export default Day48