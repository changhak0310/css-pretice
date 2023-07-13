/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface clickProps {
    active: boolean;
}

const hovering = keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(0, -5px, 0);
    }
`
const shadow = keyframes`
    from {
        transform: scale(1) translate3d(0, 0, 0);
    }
    to {
        transform: scale(1.25) translate3d(0, 0, 0);
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
    color: #3F3F3F;
    overflow: hidden;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Map = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2196f3;
`
const MapSVG = styled.svg`
    fill: #1f8de4;
`
const Marker = styled.div<clickProps>`
    position: absolute;
    z-index: 5;
    top: 151px;
    left: 176px;
    font-size: 0;
    cursor: pointer;
    transform: perspective(600px) rotateY(0deg);
    opacity: 1;
    transition: all .5s ease .4s;

    ${props=> (
        props.active && css`
            transform: perspective(600px) rotateY(-90deg);
            opacity: 0;
            transition: all .5s ease;
        `
    )}
`
const MarkerSVG = styled.svg`
    fill: #FFCC30;
    animation: ${hovering} 1s ease-in-out infinite alternate;
`
const Shadow = styled.div`
    width: 18px;
    height: 4px;
    background-color: #1B7AC7;
    border-radius: 50%;
    margin: 5px auto 00 auto;
    animation: ${shadow} 1s ease-in-out infinite alternate;
`
const Card = styled.div<clickProps>`
    position: absolute;
    z-index: 10;
    width: 240px;
    height: 190px;
    top: 105px;
    left: 80px;
    border-radius: 3px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.2);
    text-align: center;
    transform: perspective(600px) rotateY(90deg);
    opacity: 0;
    transition: all .5s ease;

    ${props => (
        props.active && css`
            transform: perspective(600px) rotateY(0deg);
            opacity: 1;
            pointer-events: all;
            transition: all .5s ease .4s;
        `
    )}
`
const CardrImg = styled.img`
    margin-bottom: 18px;
`
const FontStyle = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    margin: 2px 0;
`
const NameStyle = styled.p`
    font-size: 14px;
    line-height: 19px;
    font-weight: 600;
`
const Actions = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
`
const ATag = styled.a`
    float: left;
    width: 50%;
    text-align: center;
    line-height: 40px;
    text-decoration: none;
    color: #1F8DE4;
    font-weight: 400;
    font-size: 12px;
    background-color: transparent;
`
const Divide = styled.span`
    position: absolute;
    width: 1px;
    height: 20px;
    left: 50%;
    top: 10px;
    background-color: #91ccfb;
`

const Day25 = () => {
    const [active, setActive] = useState(false);

    const handleClickActive = () => {
        console.log(active)
        setActive(pre => !pre)
    }

    return(
        <Frame>
            <Map>
                <MapSVG width="400px" height="400px" viewBox="0 0 400 400">
                    <path d="M161.061341,399.999994 C161.061341,399.999994 191.270445,391.453331 205.135883,365.931812 C219.001321,340.410293 200.432398,333.765052 214.613679,309.426833 C228.79496,285.088614 250.056003,267.776851 262.826394,266.922116 C275.596785,266.067381 268.157228,295.720245 275.715421,305.337232 C283.273615,314.954218 275.976179,326.217927 303.147406,318.226259 C330.318634,310.234591 337.441809,308.749917 354.803656,282.075606 C372.165503,255.401296 353.503439,227.118217 363.183533,215.005256 C372.863628,202.892294 400.000001,171.927011 400.000001,171.927011 L400.000001,399.999994 L161.061341,399.999994 Z M8.33144441e-07,274.813084 C8.33144441e-07,274.813084 39.2929748,253.427701 69.7020648,222.975932 C100.111155,192.524163 111.329013,178.897167 120.245786,154.398535 C129.162559,129.899902 108.904134,115.269131 115.056957,98.3643901 C121.20978,81.459649 135.217027,74.9407179 149.468681,74.1092913 C163.720334,73.2778646 154.420375,103.542195 180.702766,94.5346817 C206.985157,85.5271688 208.897554,56.1953712 227.012818,47.5333294 C245.128081,38.8712876 253.356729,68.8621277 278.808059,63.1798791 C304.259388,57.4976304 304.842006,36.4943955 317.091607,32.0191906 C329.341207,27.5439856 334.697225,18.5903589 367.296171,25.5675291 C399.895117,32.5446994 399.999998,49.0022571 399.999998,49.0022571 L400,-5.40012479e-13 L2.47316295e-05,-1.96109795e-12 L8.33144441e-07,274.813084 Z"/>
                </MapSVG>
            </Map>
            <Marker onClick={handleClickActive} active={active}>
                <MarkerSVG width="48px" height="72px" viewBox="0 0 48 72">
                    <path d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z"/>
                </MarkerSVG>
                <Shadow/>
            </Marker>
            <Card onClick={handleClickActive} active={active}>
                <CardrImg src="https://100dayscss.com/codepen/surfshop.jpg" alt="" width="240" height="60"/>
                <NameStyle>Phil's Surfshop</NameStyle>
                <FontStyle>High Street 19<br/>8579 Arkney</FontStyle>
                <Actions>
                    <ATag href="#" title="">Save</ATag>
                    <Divide/>
                    <ATag href="#" title="">Route</ATag>
                </Actions>
            </Card>
        </Frame>
    )
}

export default Day25