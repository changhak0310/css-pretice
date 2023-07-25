/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const switch1 = keyframes`
    0%, 100% {
		transform: translate3d(0,0,0);
		box-shadow: 4px 8px 12px 0px rgba(0,0,0,0.2);
	}
	33.33% {
		transform: translate3d(145px,0,-45px);
		box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.2);
	}
	66.66% {
		transform: translate3d(-145px,0,-45px);
		box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.2);
	}
`
const switch2 = keyframes`
    0%, 100% {
		transform: translate3d(145px,0,-45px);
		box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.2);
	}
	33.33% {
		transform: translate3d(-145px,0,-45px);
		box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.2);
	}
	66.66% {
		transform: translate3d(0,0,0);
		box-shadow: 4px 8px 12px 0px rgba(0,0,0,0.2);
	}
`
const switch3 = keyframes`
    0%, 100% {
		transform: translate3d(-145px,0,-45px);
		box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.2);
	}
	33.33% {
		transform: translate3d(0,0,0);
		box-shadow: 4px 8px 12px 0px rgba(0,0,0,0.2);
	}
	66.66% {
		transform: translate3d(145px,0,-45px);
		box-shadow: 2px 4px 6px 0px rgba(0,0,0,0.2);
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
    background: #5A717B;
    color: #fff;
`
const Center = styled.div`
    position: absolute;
    height: 130px;
    width: 400px;
    top: 135px;
    left: 0;
    transform: perspective(60px);
    transform-style: preserve-3d;
`
const Card = styled.div`
    position: absolute;
    width: 140px;
    height: 130px;
    top: 0;
    left: 130px;
    background-color: #fff;
    border-radius: 3px;
    overflow: auto;
    box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.2);
`
const Top = styled.div`
    width: 100%;
    height: 30px;
    background-color: #ff9800;
`
const Content = styled.div`
    padding: 17px 14px;
`
const Line = styled.div`
    height: 4px;
    background-color: #E9E9E9;
    margin-bottom: 6px;
`
const card1 = css`
    animation: ${switch1} 5s ease-in-out infinite both;
`
const card2 = css`
    animation: ${switch2} 5s ease-in-out infinite both;
`
const card3 = css`
    animation: ${switch3} 5s ease-in-out infinite both;
`

const Day37 = () => {
    return(
        <Frame>
            <Center>
                <Card css={card1}>
                    <Top/>
                    <Content>
                        <Line css={{width: "104px"}}/>
                        <Line css={{width: "112px"}}/>
                        <Line css={{width: "97px"}}/>
                        <Line css={{width: "108px"}}/>
                        <Line css={{width: "52px"}}/>
                    </Content>
                </Card>
                <Card css={card2}>
                    <Top/>
                    <Content>
                        <Line css={{width: "98px"}}/>
                        <Line css={{width: "106px"}}/>
                        <Line css={{width: "111px"}}/>
                        <Line css={{width: "103px"}}/>
                        <Line css={{width: "81px"}}/>
                    </Content>
                </Card>
                <Card css={card3}>
                    <Top/>
                    <Content>
                        <Line css={{width: "112px"}}/>
                        <Line css={{width: "103px"}}/>
                        <Line css={{width: "92px"}}/>
                        <Line css={{width: "108px"}}/>
                        <Line css={{width: "67px"}}/>
                    </Content>
                </Card>
            </Center>
        </Frame>
    )
}

export default Day37