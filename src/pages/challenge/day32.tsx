/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const fadeIn = keyframes`
    from {
		transform: scale(0.6);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`
const fadeOut = keyframes`
	from {
		transform: scale(1);
		opacity: 1;
	}
	to {
		transform: scale(1.4);
		opacity: 0;
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
    background: #FDB03A;
    background: -webkit-linear-gradient(bottom left, #D2592A 0%, #FDB03A 100%);
    background: -moz-linear-gradient(bottom left, #D2592A 0%, #FDB03A 100%);
    background: -o-linear-gradient(bottom left, #D2592A 0%, #FDB03A 100%);
    background: linear-gradient(to top right, #D2592A 0%, #FDB03A 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#D2592A', endColorstr='#FDB03A',GradientType=1 );
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Counter = styled.div`
    position: absolute;
    height: 40px;
    width: 130px;
    top: 180px;
    left: 135px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.1);
`
const Minus = styled.div`
    position: absolute;
    z-index: 10;
    width: 32px;
    height: 32px;
    top: 4px;
    left: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #E26E6E;
        &>div{
            background-color: #fff;
        }
    }
`
const Line = styled.div`
    position: absolute;
    height: 2px;
    width: 18px;
    left: 7px;
    top: 15px;
    background-color: #E26E6E;
    transition: all .3s ease-in-out;
`
const Plus = styled.div`
    position: absolute;
    z-index: 10;
    width: 32px;
    height: 32px;
    top: 4px;
    right: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease-in-out;

    &:hover{
        background-color: #8ED273;

        &>div{
            background: #fff;
        }
    }
`
const LineH = styled.div`
    position: absolute;
    height: 2px;
    width: 18px;
    left: 7px;
    top: 15px;
    background-color: #8ED273;
    transition: all .3s ease-in-out;
`
const LineV = styled.div`
    position: absolute;
    height: 18px;
    width: 2px;
    left: 15px;
    top: 7px;
    background-color: #8ED273;
    transition: all .3s ease-in-out;
`
const Number = styled.div`
    position: relative;
    width: 130px;
    height: 40px;
    font-weight: 600;
    font-size: 20px;
    color: #6A85A0;
    line-height: 40px;
    text-align: center;
`
const Span = styled.span`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform-origin: 50% 50%;

    &.fadeInUp {
        animation: ${fadeIn} .3s ease-out .15s backwards;
        transform: scale(1);
        opacity: 1;
    }

    &.fadeOutUp {
        animation: ${fadeOut} .3s ease-in;
        transform: scale(1.4);
        opacity: 0;
    }

    &.fadeInDown {
        animation: ${fadeOut} .15s ease-out .15s reverse;
        transform: scale(1);
        opacity: 1;
    }

    &.fadeOutDown {
        animation: ${fadeIn} .3s ease-out .15s reverse;
        transform: scale(0.6);
        opacity: 0;
    }
`

const Day32 = () => {
    const [number, setNumber] = useState(0);

    const onClickPlus = () => {
        setNumber(pre => pre+1)
    }
    const onClickMinus = () => {
        setNumber(pre => pre-1)
    }
    return(
        <Frame>
            <Counter>
                <Minus onClick={onClickMinus}>
                    <Line/>
                </Minus>
                <Number>
                    <Span>{number}</Span>
                </Number>
                <Plus onClick={onClickPlus}>
                    <LineH/>
                    <LineV/>
                </Plus>
            </Counter>
        </Frame>
    )
}

export default Day32