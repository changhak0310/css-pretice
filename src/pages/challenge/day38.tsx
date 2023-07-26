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
	background: #9B59B6;
	color: #fff;
	cursor: pointer;
`
const Logo = styled.div`
    position: absolute;
    top: 160px;
    left: 165px;   
`
const white = css`
    &>svg{
        fill: #fff;
    }
`
const purple = css`
    &>svg{
        fill: #9B59B6;
    }
`
const small = css`
    transform: scale(0);
    transition: all .5s ease-in;
`
const normal = css`
    transform: scale(1);
    transition: all .5s ease-out .3s;
`
const big = css`
    transform: scale(10);
    transition: all .5s ease-in;
`



const Day2 = () => {
    const  [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(pre => !pre);
    }
    return(
        <Frame onClick={handleClick}>
            <Logo css={active ? [white, big] : [white, normal]}>
                <svg width="70px" height="80px" viewBox="0 0 70 80">
                    <path d="M-4.67739102e-15,21.1739614 L-5.32907052e-15,20 L34.6410162,0 L69.2820323,20 L69.2820323,21.1739614 C65.1281093,26.3215737 62.6410162,32.870341 62.6410162,40 C62.6410162,47.129659 65.1281093,53.6784263 69.2820323,58.8260386 L69.2820323,60 L34.6410162,80 L1.687539e-14,60 L1.62237105e-14,58.8260386 C4.15392303,53.6784263 6.64101615,47.129659 6.64101615,40 C6.64101615,32.870341 4.15392303,26.3215737 2.88213897e-13,21.1739614 Z"/>
                </svg>
            </Logo>
            <Logo css={active ? [purple, normal] : [purple, small]}>
                <svg width="70px" height="80px" viewBox="0 0 70 80">
                    <path d="M-4.67739102e-15,21.1739614 L-5.32907052e-15,20 L34.6410162,0 L69.2820323,20 L69.2820323,21.1739614 C65.1281093,26.3215737 62.6410162,32.870341 62.6410162,40 C62.6410162,47.129659 65.1281093,53.6784263 69.2820323,58.8260386 L69.2820323,60 L34.6410162,80 L1.687539e-14,60 L1.62237105e-14,58.8260386 C4.15392303,53.6784263 6.64101615,47.129659 6.64101615,40 C6.64101615,32.870341 4.15392303,26.3215737 2.88213897e-13,21.1739614 Z"/>
                </svg>
            </Logo>
        </Frame>
    )
}

export default Day2