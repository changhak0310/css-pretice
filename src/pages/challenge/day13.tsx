/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { PhoneFilled, MessageFilled, HeartFilled } from "@ant-design/icons";

const red = "#EC6565";

interface ActiveProps{
    active?: boolean;
}

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
    background: #fff;
    color: #fff;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Profile = styled.div`
    position: relative;
    float: left;
    width: 194px;
    height: 194px;
    margin: 4px 0 0 4px;
    cursor: pointer;

    &:hover{
        >div:nth-of-type(1){
            opacity: 0.4;
        }
        >div:nth-of-type(2){
            opacity: 1;
            transform: scale(1) translate3d(0, 0, 0);
        }
    }
`

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0;
    transition: all .6s ease-in-out;
`

const Plus = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    background-color: ${red};
    border-radius: 50%;
    box-shadow: 2px 4px 10px 0 rgba(0, 0, 0, 0.5);
    transition: all .4s ease-in-out;
    opacity: 0;
    transform: scale(2);
    z-index: 2;

    &::before{
        position: absolute;
        content: "";
        width: 14px;
        height: 2px;
        top: 24px;
        left: 18px;
        background-color: #fff;
    }

    &::after{
        position: absolute;
        content: '';
        width: 2px;
        height: 14px;
        top: 18px;
        left: 24px;
        background-color: #fff;
    }
`

const Detail = styled.div<ActiveProps>`
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
    font-size: 0;
    ${(props) => (
        props.active && css`
            pointer-events: all;    
        `
    )}
`

const Close = styled.div<ActiveProps>`
    position: absolute;
    z-index: 2;
    width: 50px;
    height: 50px;
    top: 10px;
    right: 10px;
    background-color: ${red};
    border-radius: 50%;
    transition: background .3s ease-in-out, transform .5s ease-in;
    transform: rotate(45deg) translate3d(-105%, -105%, 0);
    cursor: pointer;

    ${(props) => props.active && (
        css`
            transform: rotate(45deg) translate3d(0, 0, 0);
            transition: background .3s ease-in-out, transform .6s ease-out .6s;
        `
    )}

    &:before{
        position: absolute;
        content: '';
        width: 14px;
        height: 2px;
        top: 24px;
        left: 18px;
        background-color: #fff;
        transition: all .3s ease-in-out;
    }

    &::after{
        position: absolute;
        content: '';
        width: 2px;
        height: 14px;
        top: 18px;
        left: 24px;
        background-color: #fff;
        transition: all .3s ease-in-out;
    }

    &:hover{
        background-color: #fff;
        &::after, &::before{
            background-color: ${red};
        }
    }
`

const Header = styled.img<ActiveProps>`
    transform: translate3d(0, -105%, 0);
    transition: all .6s ease-in .4s;
    ${(props) => props.active && (
        css`
            transform: translate3d(0, 0, 0); 
            transition: all .6s ease-out;
        `
    )}
`

const Image = styled.div<ActiveProps>`
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    top: 130px;
    left: 150px;
    width: 100px;
    height: 100px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 4px 6px 15px 0 rgba(0, 0, 0, 0.2);
    transform: translate3d(0, -250px, 0);
    transition: all .6s ease-in .2s;
    ${(props) => props.active && (
        css`
            transform: translate3d(0, 0, 0);
            transition: all .6s ease-out .3s;
        `
    )}
`

const Img = styled.img`
    width: 100%;
    height: auto;
`

const Infos = styled.div<ActiveProps>`
    box-sizing: border-box;
    background-color: ${red};
    height: 220px;
    padding-top: 67px;
    transform: translate3d(0, 105%, 0);
    transition: all .6s ease-in .4s;
    ${props => 
        props.active && (css`
            transform: translate3d(0, 0, 0);
            transition: all .6s ease-out;
        `)
    }
`

const Name = styled.div`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`

const Action = styled.div`
    margin-top: 35px;
    text-align: center;
`

const Button = styled.div`
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    width: 45px;
    height: 45px;
    border: 1px solid #fff;
    margin: 0 20px;
    border-radius: 45px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        background: #fff;
        color: ${red};
        box-shadow: 2px 3px 6px 0 rgba(0, 0, 0, 0.2);
    }
`

const Icon = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 20px;
    font-size: 19px;
    padding-top: 12px;
`

const phone = css`
    font-size: 22px;
`

const comment = css`
    font-size: 20px;
    padding-top: 10px;
    left: 2px;
`

const heart = css`
    top: 1px;
    left: 2px;
`

const Day13 = () => {
    const [profileActive, setProfileActive] = useState(false);
    
    const handleClick = () => {
        setProfileActive((isActive) => !isActive)
    }

    return(
        <Frame>
            <Profile>
                <Img src="https://100dayscss.com/codepen/13-1.jpg"/>
                <Overlay/>
                <Plus onClick={handleClick}/>
            </Profile>
            <Profile>
                <Img src="https://100dayscss.com/codepen/13-2.jpg"/>
                <Overlay/>
                <Plus onClick={handleClick}/>
            </Profile>
            <Profile>
                <Img src="https://100dayscss.com/codepen/13-3.jpg"/>
                <Overlay/>
                <Plus onClick={handleClick}/>
            </Profile>
            <Profile>
                <Img src="https://100dayscss.com/codepen/13-4.jpg"/>
                <Overlay/>
                <Plus onClick={handleClick}/>
            </Profile>
            <Detail active={profileActive}>
                <Close active={profileActive} onClick={handleClick}/>
                <Header active={profileActive} src="https://100dayscss.com/codepen/13-1-header.jpg"/>
                <Image active={profileActive}>
                    <Img src="https://100dayscss.com/codepen/13-1.jpg"/>
                </Image>
                <Infos active={profileActive}>
                    <Name>
                        Julia Toth
                    </Name>
                    <Action>
                        <Button>
                            <Icon css={phone}><PhoneFilled /></Icon>
                        </Button>
                        <Button>
                            <Icon css={comment}><MessageFilled /></Icon>
                        </Button>
                        <Button>
                            <Icon css={heart}><HeartFilled /></Icon>
                        </Button>
                    </Action>
                </Infos>
            </Detail>
        </Frame>
    )
}

export default Day13