/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const showModal = keyframes`
    0% {
		transform: scale(0);
	}
	60% {
		transform: scale(1.1);
	}
	80% {
		transform: scale(.95);
	}
	100% {
		transform: scale(1);
	}
`
const hideModal = keyframes`
    0% {
		transform: scale(1);
	}
	20% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(0);
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
    background: #3F3F3F;
    color: #415868;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Modal = styled.div`
    position: absolute;
    width: 280px;
    height: 210px;
    top: 95px;
    left: 60px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.4);
    text-align: center;
    overflow: hidden;
    animation: ${showModal} .7s ease-in-out;
`
const hide = css`
    animation: ${hideModal} .6s ease-in-out both;
`
const Img = styled.img`
    margin-top: 24px;
`
const Title = styled.span`
    display: block;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    margin: 14px 0 5px 0;
`
const P = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 19px;
    margin: 0;
    padding: 0 30px;
`
const Button = styled.button`
    position: absolute;
    height: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F65656;
    border: 0;
    color: #fff;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    transition: background .3s ease-in-out;

    &:hover{
        background-color: #EC3434;
    }
`
const Day41 = () => {
    const [active, setActive] = useState(false);

    const handelClick = () => {
        setActive(pre => !pre);
    }

    return(
        <Frame>
            <Modal onClick={handelClick} css={active ? hide : null}>
                <Img src="https://100dayscss.com/codepen/alert.png" width="44" height="38"/>
                <Title>Oh snap!</Title>
                <P>An error has occured while creating an error report.</P>
                <Button>Dismiss</Button>
            </Modal>
        </Frame>
    )
}

export default Day41