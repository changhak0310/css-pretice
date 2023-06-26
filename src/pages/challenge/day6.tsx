/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const brown = "#786450";

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
    background: #CA7C4E;
    background: -webkit-linear-gradient(bottom left,  #EEDE6C 0%, #CA7C4E 100%);
    background: -moz-linear-gradient(bottom left, #EEBE6C 0%, #CA7C4E 100%);
    background: -o-linear-gradient(bottom left, #EEBE6C 0%, #CA7C4E 100%);
    background: linear-gradient(to top right, #EEBE6C 0%, #CA7C4E 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EEBE6C', endColorstr='#CA7C4E',GradientType=1 );
    color: ${brown};
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Center = styled.div`
    position: absolute;
    top: 50px;
    left: 40px;
	height: 299px;
	width: 320px;
    background: #fff;
	border-radius: 3px;
	overflow: hidden;
	box-shadow: 10px 10px 15px 0 rgba(0,0,0,0.3);
`

const Profile = styled.div`
    float: left;
    width: 200px;
    height: 320px;
    text-align: center;
`

const Image = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
    margin: 38px auto 0 auto;

    :hover{
        cursor: pointer;

        &>:nth-of-type(1){
            transform: rotate(360deg);
        }
        &>:nth-of-type(2){
            transform: rotate(-360deg);
        }
    }
`

const Circle = styled.div`
    position: absolute;
    box-sizing: border-box;
    width: 76px;
    height: 76px;
    top: -3px;
    left: -3px;
    border-width: 1px;
    border-style: solid;
    border-color: ${brown} ${brown} ${brown} transparent;
    border-radius: 50%;
    transition: all 1.5s ease-in-out;
`

const circle2 = css`
    width: 82px;
    height: 82px;
    top: -6px;
    left: -6px;
    border-color: ${brown} transparent ${brown} ${brown};
`

const Img = styled.img`
    display: block;
    border-radius: 50%;
    background-color: #F5E8DF;
    width: 70px;
    height: 70px;
`

const nameFont = css`
    font-size: 15px;
    font-weight: 600;
    margin-top: 20px;
`

const jobFont = css`
    font-size: 11px;
    line-height: 15px;
`

const Actions = styled.div`
    margin-top: 33px;
`

const Button = styled.button`
    display: block;
    width: 120px;
    height: 30px;
    margin: 0px auto 10px auto;
    background: none;
    border: 1px solid ${brown};
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    box-sizing: border-box;
    transition: all .3s ease-in-out;
    color: ${brown};

    &:hover{
        background-color: ${brown};
        color: #fff;
    }
`

const Stats = styled.div`
    float: left;
`

const Box = styled.div`
    box-sizing: border-box;
    width: 120px;
    height: 99px;
    background-color: #F5E8DF;
    text-align: center;
    padding-top: 28px;
    transition: all .4s ease-in-out;

    &:hover{
        background-color: #E1CFC2;
        cursor: pointer;
    }

    &:nth-child(2) {
		margin: 1px 0;
	}

    &>span{
        display: block;
    }
`

const valueFont = css`
    font-size: 18px;
    font-weight: 600;
`

const parameterFont = css`
    font-size: 11px;
`

const Day6 = () => {
    return(
        <Frame>
            <Center>
                <Profile>
                    <Image>
                        <Circle/>
                        <Circle css={circle2}/>
                        <Img src="https://100dayscss.com/codepen/jessica-potter.jpg" width="70" height="70" alt="Jessica Potter"/>
                    </Image>
                    <div css={nameFont}>Jessica Potter</div>
                    <div css={jobFont}>Visual Artist</div>
                    <Actions>
                        <Button>Follow</Button>
                        <Button>Message</Button>
                    </Actions>
                </Profile>
                <Stats>
                    <Box>
                        <span css={valueFont}>523</span>
                        <span css={parameterFont}>Posts</span>
                    </Box>
                    <Box>
                        <span css={valueFont}>1387</span>
                        <span css={parameterFont}>Likes</span>
                    </Box>
                    <Box>
                        <span css={valueFont}>146</span>
                        <span css={parameterFont}>Follower</span>
                    </Box>
                </Stats>
            </Center>
        </Frame>
    )
}

export default Day6