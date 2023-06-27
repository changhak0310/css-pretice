/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { InputHTMLAttributes, HTMLAttributes } from 'react';

const blue = "#5F98CD";
const blueDark = "#264057";
const blueLight = "#B2DAFF";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    active?: boolean;
}

interface DivProps extends HTMLAttributes<HTMLInputElement> {
    active?: boolean;
}

const introAnimation = Array.from({ length: 4 }, (_, index) => {
    return keyframes`
      from {
        transform: translate3d(0, 50px, 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    `;
});

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
    background: ${blueDark};
    color: #666666;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	overflow: hidden;
`

const Panel = styled.div<DivProps>`
    position: absolute;
    z-index:  2;
    height: 300px;
    width: 300px;
    top: 50px;
    left: 50px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transition: all .5s ease-in-out;
    
    ${
        props => props.active && (
            `transform: translate3d(150px, 0, 0)`
        )
    }
`

const Header = styled.div`
    height: 60px;
    width: 100%;
    background-color: ${blue};
`

const MenuIcon = styled.div`
    position: absolute;
    width: 29px;
    height: 15px;
    top: 23px;
    left: 20px;
    cursor: pointer;

    &:hover div{
        background-color: #fff;
    }
`

const Dash = styled.div`
    position: absolute;
    width: 20px;
    height: 3px;
    top: 0;
    left: 0;
    background-color: ${blueLight};
    border-radius: 3px;
    transition: all .2s ease-in-out;
`

const dastBottom = css`
    width: 29px;
    top: auto;
    bottom: 0;
`

const Circle = styled.div`
    position: absolute;
    height: 7px;
    width: 7px;
    border-radius: 4px;
    top: -2px;
    right: 0;
    background-color: ${blueLight};
    transition: all .2s ease-in-out;
`

const title = css`
    display: block;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
`

const SearchInput = styled.input<InputProps>`
    box-sizing: border-box;
    position: absolute;
    top: 13px;
    right: 55px;
    width: 230px;
    height: 34px;
    border-radius: 17px;
    border: none;
    background-color: #fff;
    padding: 0 17px;
    font-size: 13px;
    color: #666;
    transition: all .3s ease-in-out;
    transform: translateX(15px);
    opacity: 0;
    pointer-events: none;

    &:focus {
        outline: none;
    }

    ${props => props.active && (
            `transform: translateX(0);
            opacity: 1;
            pointer-events: all;`
        )
    }
    
    &:active{
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
    }
`

const SearchIcon = styled.div`
    position: absolute;
    z-index: 2;
    font-size: 21px;
    color: ${blueLight};
    top: 18px;
    right: 20px;
    transition: all .3 ease;
    cursor: pointer;;
    &:hover :nth-of-type(1){
        border-color: #fff;
    }
    &:hover :nth-of-type(2){
        background-color: #fff;
    }
`

const SearchCircle = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    right: 0;
    border-radius: 50%;
    transition: all .2s ease-in-out;
    border: 4px solid  ${blueLight};
    background-color: none;
`

const SearchBar = styled.div`
    position: absolute;
    width: 4px;
    height: 12px;
    top: 14px;
    right: -2px;
    background-color: ${blueLight};
    transform: rotate(135deg);
    transition: all .2s ease-in-out;
    border-radius: 5px;
`

const Notifications = styled.div`
    position: relative;
    height: 100%;
    overflow: hidden;
`

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 27px;
    bottom: 0;
    width: 3px;
    background-color: #EBEBEB;
`

const Notification = styled.div`
    position: relative;
    z-index: 2;
    margin: 25px 20px 25px 43px;

    ${introAnimation.map((animation, index) => {
        const delay = index * 0.2;
        return css`
        &:nth-of-type(${index + 1}) {
            animation: ${animation} 0.5s ease-out ${delay}s;
            animation-fill-mode: both;
        }
        `;
    })}

    &:hover{
        color: ${blue};
        cursor: pointer;
    }
`

const NotiCircle = styled.div`
    box-sizing: border-box;
    position: absolute;
    height: 11px;
    width: 11px;
    background-color: #fff;
    border: 2px solid ${blue};
    box-shadow: 0 0 0 3px #fff;
    border-radius: 6px;
    top: 0;
    left: -20px;
`

const notiTimeFont = css`
    display: block;
    font-size: 11px;
    line-height: 11px;
    margin-bottom: 2px;
`

const notiContents = css`
    font-size: 15px;
    line-height: 20px;
    margin: 0;
`

const notiName = css`
    font-weight: 600;
`

const Menu = styled.div<DivProps>`
    position: absolute;
    width: 170px;
    height: 270px;
    top: 65px;
    left: 50px; 
    background-color: #43637d;
    border-radius: 3px;
    transition: all .5s ease-in-out;
    transform: translate3d(20px, 0, 0);

    ${
        props => props.active && (
            (`
                box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.2);
                transform: translate3d(0, 0, 0);
            `)
        )
    }
`

const MenuUl = styled.ul`
    margin: 0;
    padding: 10px 0;
`

const MenuLi = styled.li`
    color: #93b2cd;
    margin: 0;
    padding: 18px 17px;
    list-style: none;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        color: #fff;
        background-color: #385269;
    }
`

const MenuIconPos = styled.span`
    display: block;
    float: left;
    margin-right: 8px;
    margin-top: -1px;
`

const Day7 = () => {
    const [searchActive, setSearchActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const onClickSearch = () => {
        setSearchActive((isActive) => !isActive);
    }

    const onClickMenu = () => {
        setMenuActive((isActive) => !isActive);
    }

    return(
        <Frame>
            <Panel active={menuActive}>
                <Header>
                    <MenuIcon onClick={onClickMenu}>
                        <Dash/>
                        <Dash css={dastBottom}/>
                        <Circle/>
                    </MenuIcon>
                    <span css={title}>Notifications</span>
                    <SearchInput active={searchActive} type="text" placeholder="Shearch ..."/>
                    <SearchIcon onClick={onClickSearch}>
                        <SearchCircle/>
                        <SearchBar/>
                    </SearchIcon>
                </Header>
                <Notifications>
                    <Line/>
                    <Notification>
                        <NotiCircle/>
                        <span css={notiTimeFont}>9:24 AM</span>
                        <p css={notiContents}><b css={notiName}>John Walker</b> posted a photo on your wall.</p>
                    </Notification>
                    <Notification>
                        <NotiCircle/>
                        <span css={notiTimeFont}>8:19 AM</span>
                        <p css={notiContents}><b css={notiName}>Alice Parker</b> commented your last post.</p>
                    </Notification>
                    <Notification>
                        <NotiCircle/>
                        <span css={notiTimeFont}>Yesterday</span>
                        <p css={notiContents}><b css={notiName}>Luke Wayne</b> added you as friend.</p>
                    </Notification>
                </Notifications>
            </Panel>
            <Menu active={menuActive}>
                <MenuUl>
                    <MenuLi><MenuIconPos/>Dashboard</MenuLi>
                    <MenuLi><MenuIconPos/>Profile</MenuLi>
                    <MenuLi><MenuIconPos/>Notifications</MenuLi>
                    <MenuLi><MenuIconPos/>Messages</MenuLi>
                    <MenuLi><MenuIconPos/>Settings</MenuLi>
                </MenuUl>
            </Menu>
        </Frame>
    )
}

export default Day7