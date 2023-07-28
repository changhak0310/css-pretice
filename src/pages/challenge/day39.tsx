/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    active: boolean;
}

const lineTopOpen = keyframes`
    0% {
		transform: translate3d(0,0,0) scaleY(1) scaleX(1);
	}
	20% {
		transform: translate3d(0,3px,0) scaleY(1) scaleX(1);
	}
	40% {
		transform: translate3d(0,-20px,0) scaleY(.5) scaleX(1);
	}
	100% {
		transform: translate3d(0,-20px,0) scaleY(.5) scaleX(6);
	}
`
const lineBottomOpen = keyframes`
    0% {
		transform: translate3d(0,0,0) scaleY(1) scaleX(1);
	}
	20% {
		transform: translate3d(0,-3px,0) scaleY(1) scaleX(1);
	}
	40% {
		transform: translate3d(0,20px,0) scaleY(.5) scaleX(1);
	}
	100% {
		transform: translate3d(0,20px,0) scaleY(.5) scaleX(6);
	}
`
const lineTopClose = keyframes`
    0% {
		transform: translate3d(0,-20px,0) scaleY(.5) scaleX(6);
	}
	60% {
		transform: translate3d(0,-20px,0) scaleY(.5) scaleX(1);
	}
	100% {
		transform: translate3d(0,0,0) scaleY(1) scaleX(1);
	}
`
const lineBottomClose = keyframes`
    0% {
		transform: translate3d(0,20px,0) scaleY(.5) scaleX(6);
	}
	60% {
		transform: translate3d(0,20px,0) scaleY(.5) scaleX(1);
	}
	100% {
		transform: translate3d(0,0,0) scaleY(1) scaleX(1);
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
    background: #4A627A;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const MenuIcon = styled.div`
    position: absolute;
    z-index: 2;
    width: 50px;
    height: 26px;
    top: 187px;
    left: 175px;
    cursor: pointer;
`
const paused = css`
    animation: none;
`
const LineTop = styled.div<Props>`
    position: absolute;
    width: 50px;
    height: 4px;
    left: 0;
    background-color: #fff;
    top: 0;
    animation: ${lineTopClose} 1s ease both;
    
    ${props => 
        props.active ? 
        css`
            pointer-events: none;
            animation: ${lineTopOpen} 1s ease both;
        ` : 
        null
    }
`
const LineBottom = styled.div<Props>`
    position: absolute;
    width: 50px;
    height: 4px;
    left: 0;
    top: initial;
    bottom: 0;
    background-color: #fff;
    animation: ${lineBottomClose} 1s ease both;
    
    ${props => 
        props.active ? 
        css`
            pointer-events: none;
            animation: ${lineBottomOpen} 1s ease both;
        ` : 
        null
    }
`
const Menu = styled.div<Props>`
    position: absolute;
    width: 300px;
    height: 20px;
    top: 190px;
    left: 50px;
    padding: 0 10px;
    opacity: 0;
    pointer-events: none;
    transition: all .5s ease-in-out;

    ${props =>
        props.active ? 
        css`
            opacity: 1;
            pointer-events: all;
            transition: all .5s ease-in-out .5s;
        `:
        null
    }
`
const Ul = styled.ul`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    list-style: none;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    text-transform: uppercase;
    width: 280px;
    margin: 0;
    padding: 0;
`
const Li = styled.div`
    position: relative;
    display: block;
    flex: 0 1 auto;
    margin: 0;
    padding: 0;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        opacity: 0.6;
    }
`

const Day39 = () => {
    const [active, setActive] = useState(false);
    const [isPause, setIsPause] = useState(false);
    const onClick = () => {
        setIsPause(true);
        setActive(pre => !pre);
    }

    return(
        <Frame>
            <MenuIcon onClick={onClick}>
                <LineTop active={active} css={isPause ? null : paused}/>
                <LineBottom active={active} css={isPause ? null : paused}/>
            </MenuIcon>
            <Menu active={active} onClick={onClick}>
                <Ul>
                    <Li><span>Home</span></Li>
                    <Li><span>Work</span></Li>
                    <Li><span>Life</span></Li>
                    <Li><span>Spirit</span></Li>
                </Ul>
            </Menu>
        </Frame>
    )
}

export default Day39