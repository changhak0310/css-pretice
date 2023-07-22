/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const fill = keyframes`
	from {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 270;
	}
`
const line = keyframes`
    from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
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
    background: #EA4C89;
    font-size: 0;
`
const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Line = styled.div`
    width: 225px;
    height: 2px;
    background-color: #fff;
    margin: 15px 0;
    animation: ${line} .6s ease-out both;
`
const Text = styled.svg`
    stroke: #EA4C89;
    stroke-dasharray: 270;
    stroke-dashoffset: 0;
`
const A1 = styled.path`
    fill: #fff;
    stroke-width: 6;
    animation: ${fill} 1.2s ease-in-out both;
` 
const A2 = styled.path`
    fill: none;
    stroke-width: 12;
    animation: ${fill} 1.7s ease-in-out both;
` 
const A3 = styled.path`
    fill: none;
    stroke-width: 18;
    animation: ${fill} 2.2s ease-in-out both;
`

const Day34 = () => {

    return(
        <Frame>
            <Center>
                <Line/>
                <Text width="224px" height="53px" viewBox="0 0 224 53" >
                    <A1 d="M43.4389648,51.4819336 L29.6757812,51.4819336 L29.6757812,30.8198242 L13.7631836,30.8198242 L13.7631836,51.4819336 L0,51.4819336 L0,0.797363281 L13.7631836,0.797363281 L13.7631836,19.5874023 L29.6757812,19.5874023 L29.6757812,0.797363281 L43.4389648,0.797363281 L43.4389648,51.4819336 Z M84.4858398,51.4819336 L54.394043,51.4819336 L54.394043,0.797363281 L84.4858398,0.797363281 L84.4858398,11.7871094 L68.0878906,11.7871094 L68.0878906,19.7607422 L83.2724609,19.7607422 L83.2724609,30.7504883 L68.0878906,30.7504883 L68.0878906,40.3188477 L84.4858398,40.3188477 L84.4858398,51.4819336 Z M93.3608398,51.4819336 L93.3608398,0.797363281 L107.054688,0.797363281 L107.054688,40.4228516 L126.572754,40.4228516 L126.572754,51.4819336 L93.3608398,51.4819336 Z M134.685059,51.4819336 L134.685059,0.797363281 L148.378906,0.797363281 L148.378906,40.4228516 L167.896973,40.4228516 L167.896973,51.4819336 L134.685059,51.4819336 Z M223.435059,26.0703125 C223.435059,34.5986755 221.343445,41.0815208 217.160156,45.519043 C212.976867,49.9565652 206.852254,52.175293 198.786133,52.175293 C190.835572,52.175293 184.739849,49.9450093 180.498779,45.484375 C176.25771,41.0237407 174.137207,34.5293395 174.137207,26.0009766 C174.137207,17.565062 176.246154,11.1226622 180.464111,6.67358398 C184.682069,2.22450575 190.81246,0 198.855469,0 C206.92159,0 213.034647,2.20717194 217.194824,6.62158203 C221.355001,11.0359921 223.435059,17.5188375 223.435059,26.0703125 L223.435059,26.0703125 Z M188.559082,26.0703125 C188.559082,35.8698407 191.968065,40.7695312 198.786133,40.7695312 C202.252947,40.7695312 204.824129,39.5792762 206.499756,37.1987305 C208.175383,34.8181847 209.013184,31.1087492 209.013184,26.0703125 C209.013184,21.0087638 208.163827,17.2704385 206.465088,14.8552246 C204.766349,12.4400107 202.229835,11.2324219 198.855469,11.2324219 C191.991177,11.2324219 188.559082,16.178336 188.559082,26.0703125 L188.559082,26.0703125 Z"/>
                    <A2 d="M43.4389648,51.4819336 L29.6757812,51.4819336 L29.6757812,30.8198242 L13.7631836,30.8198242 L13.7631836,51.4819336 L0,51.4819336 L0,0.797363281 L13.7631836,0.797363281 L13.7631836,19.5874023 L29.6757812,19.5874023 L29.6757812,0.797363281 L43.4389648,0.797363281 L43.4389648,51.4819336 Z M84.4858398,51.4819336 L54.394043,51.4819336 L54.394043,0.797363281 L84.4858398,0.797363281 L84.4858398,11.7871094 L68.0878906,11.7871094 L68.0878906,19.7607422 L83.2724609,19.7607422 L83.2724609,30.7504883 L68.0878906,30.7504883 L68.0878906,40.3188477 L84.4858398,40.3188477 L84.4858398,51.4819336 Z M93.3608398,51.4819336 L93.3608398,0.797363281 L107.054688,0.797363281 L107.054688,40.4228516 L126.572754,40.4228516 L126.572754,51.4819336 L93.3608398,51.4819336 Z M134.685059,51.4819336 L134.685059,0.797363281 L148.378906,0.797363281 L148.378906,40.4228516 L167.896973,40.4228516 L167.896973,51.4819336 L134.685059,51.4819336 Z M223.435059,26.0703125 C223.435059,34.5986755 221.343445,41.0815208 217.160156,45.519043 C212.976867,49.9565652 206.852254,52.175293 198.786133,52.175293 C190.835572,52.175293 184.739849,49.9450093 180.498779,45.484375 C176.25771,41.0237407 174.137207,34.5293395 174.137207,26.0009766 C174.137207,17.565062 176.246154,11.1226622 180.464111,6.67358398 C184.682069,2.22450575 190.81246,0 198.855469,0 C206.92159,0 213.034647,2.20717194 217.194824,6.62158203 C221.355001,11.0359921 223.435059,17.5188375 223.435059,26.0703125 L223.435059,26.0703125 Z M188.559082,26.0703125 C188.559082,35.8698407 191.968065,40.7695312 198.786133,40.7695312 C202.252947,40.7695312 204.824129,39.5792762 206.499756,37.1987305 C208.175383,34.8181847 209.013184,31.1087492 209.013184,26.0703125 C209.013184,21.0087638 208.163827,17.2704385 206.465088,14.8552246 C204.766349,12.4400107 202.229835,11.2324219 198.855469,11.2324219 C191.991177,11.2324219 188.559082,16.178336 188.559082,26.0703125 L188.559082,26.0703125 Z"/> 
                    <A3 d="M43.4389648,51.4819336 L29.6757812,51.4819336 L29.6757812,30.8198242 L13.7631836,30.8198242 L13.7631836,51.4819336 L0,51.4819336 L0,0.797363281 L13.7631836,0.797363281 L13.7631836,19.5874023 L29.6757812,19.5874023 L29.6757812,0.797363281 L43.4389648,0.797363281 L43.4389648,51.4819336 Z M84.4858398,51.4819336 L54.394043,51.4819336 L54.394043,0.797363281 L84.4858398,0.797363281 L84.4858398,11.7871094 L68.0878906,11.7871094 L68.0878906,19.7607422 L83.2724609,19.7607422 L83.2724609,30.7504883 L68.0878906,30.7504883 L68.0878906,40.3188477 L84.4858398,40.3188477 L84.4858398,51.4819336 Z M93.3608398,51.4819336 L93.3608398,0.797363281 L107.054688,0.797363281 L107.054688,40.4228516 L126.572754,40.4228516 L126.572754,51.4819336 L93.3608398,51.4819336 Z M134.685059,51.4819336 L134.685059,0.797363281 L148.378906,0.797363281 L148.378906,40.4228516 L167.896973,40.4228516 L167.896973,51.4819336 L134.685059,51.4819336 Z M223.435059,26.0703125 C223.435059,34.5986755 221.343445,41.0815208 217.160156,45.519043 C212.976867,49.9565652 206.852254,52.175293 198.786133,52.175293 C190.835572,52.175293 184.739849,49.9450093 180.498779,45.484375 C176.25771,41.0237407 174.137207,34.5293395 174.137207,26.0009766 C174.137207,17.565062 176.246154,11.1226622 180.464111,6.67358398 C184.682069,2.22450575 190.81246,0 198.855469,0 C206.92159,0 213.034647,2.20717194 217.194824,6.62158203 C221.355001,11.0359921 223.435059,17.5188375 223.435059,26.0703125 L223.435059,26.0703125 Z M188.559082,26.0703125 C188.559082,35.8698407 191.968065,40.7695312 198.786133,40.7695312 C202.252947,40.7695312 204.824129,39.5792762 206.499756,37.1987305 C208.175383,34.8181847 209.013184,31.1087492 209.013184,26.0703125 C209.013184,21.0087638 208.163827,17.2704385 206.465088,14.8552246 C204.766349,12.4400107 202.229835,11.2324219 198.855469,11.2324219 C191.991177,11.2324219 188.559082,16.178336 188.559082,26.0703125 L188.559082,26.0703125 Z"/>
                </Text>
                <Line/>
            </Center>
        </Frame>
    )
}

export default Day34