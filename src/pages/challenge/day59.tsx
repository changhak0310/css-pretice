/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

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
	background: #333;
	color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Text = styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    top: 145px;
`
const H1 = styled.h1`
    font-size: 60px;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    transition: all 1s ease-in-out;
    transform: translateX(0);
    text-shadow: 0 0 10px rgba(0,0,0,0.4);
`
const H2 = styled.h2`
    font-size: 40px;
    line-height: 40px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
    transition: all 1s ease-in-out;
    transform: translateX(0);
    text-shadow: 0 0 10px rgba(0,0,0,0.4);
`
const Slice = styled.div<Props>`
    position: relative;
    z-index: 2;
    float: left;
    box-sizing: border-box;
    width: 50px;
    height: 400px;
    background: url('https://100dayscss.com/codepen/slice-image-2.jpg') center center no-repeat;
    background-size: 400px 400px;
    transition: all 1s ease-in-out;

    ${props => css`
        &:nth-of-type(${props.index+1}){
            background-position: ${props.index*-50}px 0px;
            transform: translateY(-40px);
            opacity: 0;
        }
        &:nth-of-type(2n){
            transform: translateY(40px);
        }
    `}
`
const Slices = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    background: url('https://100dayscss.com/codepen/slice-image-1.jpg') center center no-repeat;
    background-size: 400px 400px;
    cursor: pointer;

    &:hover{
        ${H1} {
            transform: translateX(-40px);
        }
        ${H2} {
            transform: translateX(40px);
        }
        ${Slice} {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

const Day59 = () => {
    return(
        <Frame>
            <Slices>
                {Array.from({length:8}).map((_, index) => (
                    <Slice key={index} index={index}/>
                ))}
                <Text>
                    <H1>Slice</H1>
                    <H2>transition</H2>
                </Text>
            </Slices>
        </Frame>
    )
}

export default Day59