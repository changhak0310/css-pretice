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
    background: #fff;
    background: #fff;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
`

const Stripes = styled.div`
    position: relative;
    top: -67px;
    left: -100px;
    width: 600px;
    transform: rotate(45deg);
`

const Stripe = styled.div`
    background-color: #353535;
    width: 600px;
    height: 3px;
    margin-bottom: 16px;
`

const Center = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    top: 70px;
    left: 70px;
    background-color: #353535;
    border-radius: 3px;
    box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.3);
`

const Polygon = styled.svg`
    position: absolute;
    width: 160px;
    height: 140px;
    top: 60px;
    left: 50px;

    &:hover {
        &>:nth-of-type(1) { fill: #eee; }
        &>:nth-of-type(2) { fill: #ccc; }
        &>:nth-of-type(3) { fill: #aaa; }
    }
`

const Light = styled.polygon`
    fill: #eee;
    transition: all .5s ease-in-out;
`

const Middle = styled.polygon`
    fill: #ccc;
    transition: all .5s ease-in-out;
`

const Dark = styled.polygon`
    fill: #aaa;
    transition: all .5s ease-in-out;
`


const Day17 = () => {
    return(
        <Frame>
            <Stripes>
                {Array.from({ length: 29 }).map((_, index) => (
                    <Stripe key={index}/>
                ))}
            </Stripes>
            <Center>
                <Polygon>
                    <Middle points="68,0 91,0 160,117 46,117 59,93 121,93"/>
                    <Dark points="68,41 79,59 46,117 160,117 147,160 11,140"/>
                    <Light points="0,117 68,0 121,93 98,93 68,41 11,140"/>
                </Polygon>
            </Center>
        </Frame>
    )
}

export default Day17