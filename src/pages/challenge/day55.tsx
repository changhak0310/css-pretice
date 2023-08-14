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
    background: #2B4147;
    color: #7a7a7a;
	font-family: 'Open Sans', Helvetica, sans-serif;
	line-height: 130%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Control = styled.div`
    position: absolute;
    z-index: 5;
    width: 130px;
    height: 130px;
    top: 35px;
    left: 35px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.2);
`
const Indicator = styled.div`
    position: absolute;
    width: 1px;
    height: 12px;
    left: 50%;
    top: 0;
    background-color: #6c6c6c;
    transform-origin: 0 65px;
    transform: rotate(-50deg);
    transition: all .5s ease-in-out;
`
const TempOutside = styled.div`
    position: absolute;
    top: 18px;
    left: 6px;
    right: 0;
    text-align: center;
    font-weight: 300;
    font-size: 12px;
`
const TempRoom = styled.div`
    position: absolute;
    top: 34px;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    color: #873183;
    letter-spacing: -8px;
    padding-right: 12px;
    opacity: 1;
    transform: translateX(0);
    transition: all .5s ease-in-out;

    span{
        position: absolute;
        top: 0;
        right: 37px;
        font-size: 20px;
        line-height: 34px;
        padding: 0 0 0 7px;
    }
`
const TempRoomTwo = styled.div`
    position: absolute;
    top: 34px;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 400;
    font-size: 60px;
    line-height: 60px;
    color: #873183;
    letter-spacing: -8px;
    padding-right: 12px;
    opacity: 1;
    transform: translateX(0);
    transition: all .5s ease-in-out;

    letter-spacing: -6px;
    padding-right: 2px;
    opacity: 0;
    color: #98317A;
    transform: translateX(50px) scale(0.5);

    span{
        position: absolute;
        top: 0;
        right: 30px;
        font-size: 20px;
        line-height: 34px;
        padding: 0 0 0 7px;
    }
`
const Room = styled.div`
    position: absolute;
    bottom: 18px;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: 300;
    font-size: 12px;
`
const Ring = styled.div`
    position: absolute;
    width: 180px;
    height: 180px;
    top: 10px;
    left: 10px;
    background-color: rgb(103,43,149);
    background: -moz-linear-gradient(90deg, rgba(103,43,149,1) 0%, rgba(206,46,95,1) 100%);
	background: -webkit-linear-gradient(90deg, rgba(103,43,149,1) 0%, rgba(206,46,95,1) 100%);
	background: linear-gradient(90deg, rgba(103,43,149,1) 0%, rgba(206,46,95,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#672b95",endColorstr="#ce2e5f",GradientType=1);
    border-radius: 50%;
    box-shadow: inset 2px 4px 4px 0px rgba(0,0,0,0.3);
`
const BottomOverlay = styled.div`
    position: absolute;
    width: 95px;
    height: 95px;
    top: 50%;
    left: 50%;
    background-color: #F2F2F2;
    transform-origin: 0 0;
    transform: rotate(45deg);
    border-radius: 0 0 95px 0;
`
const Thermostat = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 100px;
    background-color: #F2F2F2;
    border-radius: 50%;
    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.3);
    cursor: pointer;

    &:hover{
        ${Control} {
            ${Indicator} {
                transform: rotate(-20deg);
            }
            ${TempRoom} {
                opacity: 0;
                transform: translateX(-50px) scale(0.5); 
                
                
            }
            ${TempRoomTwo} {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
`

const Day55 = () => {
    return(
        <Frame>
            <Thermostat>
                <Ring>
                    <BottomOverlay/>
                </Ring>
                <Control>
                    <Indicator/>
                    <TempOutside>23°</TempOutside>
                    <TempRoom>19<span>°</span></TempRoom>
                    <TempRoomTwo>20<span>°</span></TempRoomTwo>
                    <Room>Bedroom</Room>
                </Control>
            </Thermostat>
        </Frame>
    )
}

export default Day55