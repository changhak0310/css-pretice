/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { SoundFilled } from "@ant-design/icons";

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
    background: #4CB6DE;
    color: #fff;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Quote = styled.div`
    position: relative;
    margin-top: 90px;
    padding: 0 30px;

    &:before{
        display: block;
        position: absolute;
        z-index: 0;
        content: ',,';
        font-family: Arial;
        font-size: 250px;
        color: #6AC2E3;
        line-height: 35px;
        top: -100px;
        left: 7px;
    }
`

const FamousSayingFont = css`
    position: relative;
    z-index: 1;
    font-size: 24px;
    line-height: 35px;
    margin: 20px 0;
`

const AuthorFont = css`
    font-weight: 300;
    font-style: initial;
    font-size: 20px;
    line-height: 28px;
`

const ToolTip = styled.span`
    position: relative;
    display: inline-block;
    background-color: #286F8A;
    padding: 0px 8px 5px 8px;
    margin: -10px 0;
    cursor: pointer;

    &:hover>:first-child, &:focus>:first-child{
        visibility: visible;
		opacity: 1;
		transform: translate3d(0,0,0);
    }
`

const Info = styled.span`
    box-sizing: border-box;
    position: absolute;
    bottom: 53px;
    left: -85px;
    display: block;
    background-color: #286F8A;
    width: 300px;
    font-size: 16px;
    line-height: 24px;
    cursor: text;
    visibility: hidden;
    opacity: 0;
    transform: translate3d(0, -20px, 0);
    transition: all .5s ease-out;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 14px;
        bottom: -14px;
        left: 0;
    }

    &::after{
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        bottom: -5px;
        left: 50%;
        margin-left: -5px;
        background-color: #286F8A;
    }
`

const Pronounce = styled.span`
    display: block;
    background-color: #fff;
    color: #286F8A;
    padding: 8px 17px 10px 17px;
    line-height: 16px;
`

const soundIcon = css`
    position: relative;
    margin-left: 10px;
    top: 1px;
    cursor: pointer;
    transition: all .2s ease-out;

    &:hover{
        transform: scale(1.15) translate3d(0, 0, 0);
        backface-visibility: none;
    }
`

const Text = styled.span`
    display: block;
    padding: 13px 17px;
`

const Day12 = () => {
    return(
        <Frame>
            <Quote>
                <p css={FamousSayingFont}>I know quite certainly that I myself have no special talent; curiosity,
                    <ToolTip onClick={void(0)}>obsession
                        <Info>
                            <Pronounce>[əbˈseʃ(ə)n]<SoundFilled css={soundIcon}/></Pronounce>
                            <Text><b>Obsession</b>, a persistent disturbing preoccupation with an often unreasonable idea or feeling.</Text>
                        </Info>
                    </ToolTip> and dogged endurance, combined with self-criticism have brought me to my ideas.
                </p>
                <p css={AuthorFont}>Albert Einstein</p>
            </Quote>
        </Frame>
    )
}

export default Day12