/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

const count = keyframes`
    0%{
        transform: translateY(-0px);
    }
    10%{
        transform: translateY(-40px);
    }
    20%{
        transform: translateY(-80px);
    }
    30%{
        transform: translateY(-120px);
    }
    40%{
        transform: translateY(-160px);
    }
    50%{
        transform: translateY(-200px);
    }
    60%{
        transform: translateY(-240px);
    }
    70%{
        transform: translateY(-280px);
    }
    80%{
        transform: translateY(-320px);
    }
    90%{
        transform: translateY(-360px);
    }
    100%{
        transform: translateY(-400px);
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
    overflow: hidden;
    background: #313C46;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Button = styled.input`
    display: none;
`
const Pause = styled.div`
    position: absolute;
    width: 16px;
    height: 20px;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
    transform: scale(1);
    opacity: 1;

    &::before, &::after{
        position: absolute;
        display: block;
        content: '';
        width: 5px;
        height: 20px;
        top: 0;
        left: 0;
        background-color: #fff;
    }

    &::after {
        left: initial;
        right: 0;
    }
`
const Play = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    border-style: soild;
    border-width: 10px 0 10px 16px;
    border-color: transparent transparent transparent #fff;
    transition: all .3s ease-in-out;
    transform: scale(0);
    opacity: 0;
`
const Icon = styled.label`
    position: absolute;
    width: 16px;
    height: 20px;
    top: 240px;
    left: 192px;
    cursor: pointer;

    ${Button}:checked ~ &{
        ${Pause} {
            transform: scale(0);
            opacity: 0;
        }
        ${Play} {
            transform: scale(1);
            opacity: 1;
        }
    }
`
const Number = styled.div`
    float: left;

    span {
        display: block;
        height: 40px;
        width: 22px;
        text-align: center;
        font-size: 30px;
        line-height: 40px;
        font-weight: 400;
		color: #478BB8;
    }
`
const units = css`
    animation: ${count} 10s steps(1) infinite;
`
const tens = css`
    animation: ${count} 100s steps(1) infinite;
`
const hundreds = css`
    animation: ${count} 1000s steps(1) infinite;
`
const thousands = css`
    animation: ${count} 10000s steps(1) infinite;
`
const Counter = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 100px;
    height: 40px;
    top: 180px;
    left: 150px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.3);
    padding: 0 6px;
    overflow: hidden;

    ${Button}:checked ~ & > div {
        animation-play-state: paused !important; 
    }
`

const Day51 = () => {
    return(
        <Frame>
            <Button type="checkbox" name="state" id="button"/>
            <Icon htmlFor="button">
                <Pause/>
                <Play/>
            </Icon>
            <Counter>
                <Number css={thousands}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <span key={index}>{index}</span>
                    ))}
                </Number>
                <Number css={hundreds}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <span key={index}>{index}</span>
                    ))}
                </Number>
                <Number css={tens}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <span key={index}>{index}</span>
                    ))}
                </Number>
                <Number css={units}>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <span key={index}>{index}</span>
                    ))}
                </Number>
            </Counter>
        </Frame>
    )
}

export default Day51