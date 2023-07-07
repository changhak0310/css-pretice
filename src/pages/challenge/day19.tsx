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
    background: #3FAF82;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Center = styled.div`
    position: absolute;
    text-align: center;
    overflow: hidden;
    width: 400px;
    height: 400px;
    top: 0;
    left: 0;
`

const Radio = styled.input`
    display: none;
`

const Circle = styled.label`
    box-sizing: border-box;
    position: absolute;
    z-index: 5;
    top: 175px;
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;

    &:nth-of-type(1) { left: 115px; }
    &:nth-of-type(2) { left: 175px; }
    &:nth-of-type(3) { left: 235px; }
`

const Active = styled.div`
    position: absolute;
    z-index: 10;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    top: 180px;
    left: 120px;
    transform: all 1s ease;

    #check-1:checked ~ & {
	    transform: translateX(0px);
    }
    #check-2:checked ~ & {
        transform: translateX(60px);
    }
    #check-3:checked ~ & {
        transform: translateX(120px);
    }
`

const BG = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    left: 0;
    background-color: #3498db;
    border-left: 400px solid #9b59b6;
    border-right: 400px solid #1abc9c;
    transition: all 1s ease;
    transform: translateX(0px);

    #check-1:checked ~ & {
        transform: translateX(0px);
    }
    #check-2:checked ~ & {
        transform: translateX(-400px);
    }
    #check-3:checked ~ & {
        transform: translateX(-800px);
    }
`

const Day19 = () => {
    return(
        <Frame>
            <Center>
                <Radio type="radio" id="check-1" name="rd"/>
                <Circle htmlFor="check-1"/>
                <Radio type="radio" id="check-2" name="rd"/>
                <Circle htmlFor="check-2"/>
                <Radio type="radio" id="check-3" name="rd"/>
                <Circle htmlFor="check-3"/>
                <Active/>
                <BG/>
            </Center>
        </Frame>
    )
}

export default Day19