/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface ActiveProps {
    index: number;
}

const fadeIn = keyframes`
    from {
		opacity: 0;
		transform: scale(0.9);		
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const fadeOut = keyframes`
    from {
		opacity: 1;
		transform: scale(1);	
	}
	to {
		opacity: 0;
		transform: scale(1.15);
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
    background: #C7D6E1;
    color: #fff;
    font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Card = styled.div<ActiveProps>`
    position: absolute;
    z-index: 0;
    width: 240px;
    height: 150px;
    top: 125px;
    left: 80px;
    background-color: #fff;
    box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.5);

    ${props => {
            if(props.index === 1) {
                return(css`
                    &:nth-of-type(1) {
                        pointer-events: all;
                        z-index: 1;
                        animation: ${fadeIn} .5s ease-in-out both;
                    }

                `)
            }
            if(props.index === 2) {
                return(css`
                    &:nth-of-type(2) {
                        pointer-events: all;
                        z-index: 1;
                        animation: ${fadeIn} .5s ease-in-out both;
                    }

                    &:nth-of-type(1) {
                        z-index: 2;
                        animation: ${fadeOut} .5s ease-in-out both;
                    }
                `)
            }
            if(props.index === 3) {
                return(css`
                    &:nth-of-type(3) {
                        pointer-events: all;
                        z-index: 1;
                        animation: ${fadeIn} .5s ease-in-out both;
                    }

                    &:nth-of-type(2) {
                        z-index: 2;
                        animation: ${fadeOut} .5s ease-in-out both;
                    }
                `)
            }
        }
    }
`

const NumberBG = styled.div`
    position: absolute;
    width: 60px;
    height: 60px;
    top: -31px;
    right: -31px;
    background-color: #8391a1;
    transform: rotate(45deg);
`
const Number = styled.div`
    position: absolute;
    top: 6px;
    right: 8px;
    font-size: 13px;
    line-height: 13px;
    font-weight: 600;
    color: #fff;
`
const Text = styled.div`
    text-align: center;
    padding: 20px 10px;
`
const Headline = styled.span`
    display: block;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    color: #616e7d;
    margin-bottom: 8px;
`
const Line = styled.p`
    font-size: 12px;
    line-height: 17px;
    color: #8391a1;
    margin: 0;
`
const Button = styled.div`
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #3ca7fb;
    cursor: pointer;
    text-align: center;
    line-height: 38px;
    font-size: 13px;
    transition: all .3s ease-in-out;
    text-transform: uppercase;

    &:hover{
        background-color: #2196f3;
    }
`

const Day26 = () => {
    const [active, setActive] = useState(1);

    const ClickButton = () => {
        console.log(active);
        setActive(pre => (pre < 3) ? ++pre : pre=1);
    }

    return(
        <Frame>
           <Card index={active}>
                <NumberBG/>
                <Number>1</Number>
                <Text>
                    <Headline>The couch</Headline>
                    <Line>
                        If you want to grow, get outside<br/> your comfort zone. 
                    </Line>
                </Text>
                <Button onClick={ClickButton}>OK</Button>
           </Card>
           <Card index={active}>
                <NumberBG/>
                <Number>2</Number>
                <Text>
                    <Headline>Failing is learning</Headline>
                    <Line>
                    Pick yourself up, dust yourself off,<br/> and start again.
                    </Line>
                </Text>
                <Button onClick={ClickButton}>OK</Button>
           </Card>
           <Card index={active}>
                <NumberBG/>
                <Number>3</Number>
                <Text>
                    <Headline>Flowers and rainbows</Headline>
                    <Line>
                        Always be yourself,<br/> unless you can be a unicorn.
                    </Line>
                </Text>
                <Button onClick={ClickButton}>OK</Button>
           </Card>
        </Frame>
    )
}

export default Day26