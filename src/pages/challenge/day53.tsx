/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const trackColor = "#7AD175";
const thumbColor = "#fff";
const thumbRadius = 24;
const thumbHeight = 24;
const thumbWidth = 24;
const thumbShadow = `1px 2px 4px 0 rgba(0,0,0,0.1)`;
const thumbBorderWidth = 2;
const thumbBorderColor = "#7AD175";

const trackWidth = 270;
const trackHeight = 4;
const trackShadow = `insert 0 1px 1px 0 rgba(0,0,0,0.2)`;
const trackRadius = 2;

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
    overflow: hidden;
    background: #506172;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Center = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 300px;
    height: 40px;
    top: 180px;
    left: 50px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 2px 4px 8px rgba(0,0,0,0.3);
    padding: 5px 15px;
`
const track = css`
    width: ${trackWidth}px;
    height: ${trackHeight}px;
    cursor: pointer;
    transition: all .2s ease;
`
const thumb = css`
    border: ${thumbBorderWidth}px solid ${thumbBorderColor};
    height: ${thumbHeight}px;
    width: ${thumbWidth}px;
    border-radius: ${thumbRadius}px;
    background: ${thumbColor} url("https://100dayscss.com/codepen/slider-thumb.png") center center no-repeat;
    background-size: 50% 50%;
    cursor: pointer;
    box-shadow: ${thumbShadow};
`
const Input = styled.input`
    margin: 0;
    width: ${trackWidth}px;
	height: 30px;

    &:focus {
        outline: none;
    }
	&::-moz-focus-outer {
		border: 0;
	}

  &::-webkit-slider-runnable-track {
    @include ${track};
    background: ${trackColor};
	border: none;
    border-radius: ${trackRadius}px;
	box-shadow: ${trackShadow};
  }
  &::-webkit-slider-thumb {
    @include ${thumb};
    -webkit-appearance: none;
    margin-top: ${trackHeight/2-thumbHeight/2}px;
  }

  &::-moz-range-track {
    @include ${track};
    background: ${trackColor};
    border: none;
    border-radius: ${trackRadius}px;
	box-shadow: ${trackShadow};
  }

  &::-moz-range-thumb {
    @include ${thumb};
  }

  &::-ms-track {
    @include ${track};
    background: transparent;
    border-color: none;
    color: transparent;
  }

  &::-ms-fill-lower,
	&::-ms-fill-upper{
    background: ${trackColor};
    border: none;
    border-radius: ${trackRadius}px;
  }

  &::-ms-thumb {
    @include ${thumb};
  }
`

const Day53 = () => {
    return(
        <Frame>
            <Center>
                <Input type="range" min="0" max="100"/>
            </Center>
        </Frame>
    )
}

export default Day53