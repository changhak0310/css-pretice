/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface PicProps {
    active: boolean;
    index: number;
}
interface ImgProps {
    away: boolean;
    number: number;
}

const rows = 3;
const columns = 3;
const length = "128px";
const space = 4;

const big = keyframes`
   	0%,1% {
		transform: scale(1);
		z-index: 2;
	}
	100% {
		z-index: 2;
		transform: scale(3.0625);
	} 
`
const small = keyframes`
   	0% {
		transform: scale(3.0625);
		z-index: 2;
	}
	99% {
		z-index: 2;
		transform: scale(1);
	}
	100% {
		z-index: 1;
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
    background: #fff;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Pics = styled.div`
    padding: 2px;
`
const Pic = styled.div<PicProps>`
    position: relative;
    float: left;
    margin: ${space/2}px;
    width: ${length};
    height: ${length};
    cursor: pointer;
    background-color: #000;
    animation: ${small} .5s ease-in-out, z-index 0s linear .5s;

    ${props => 
        props.active ? css`
            animation: ${big} .5s ease-in-out both;
        ` : null
    }
    ${props => 
        {
            const row = props.index%3;
            const column = props.index/3;
            let top = row/rows*100+"%";
            let left = column/columns*100+"%";
            return (css`
                &:nth-of-type(${props.index}) {
                    transform-origin: ${left} ${top};
                }
            `)
        }
    }
`

const Img = styled.img<ImgProps>`
    width: 100%;
    height: auto;
    transition: opacity .5s ease-in-out;

    ${props => 
        props.away ? css`
            :not(:nth-of-type(${props.number-1})) {
                opacity: 0;
            }
        ` : null
    }
`

const Day40 = () => {
    const [active, setActive] = useState(false);
    const [away, setAway] = useState(false);
    const [number, setNumber] = useState(0);

    const picClick = (number: number) => {
        setActive(pre => !pre)
        setAway(pre => !pre);
        setNumber(number)
    }

    return(
        <Frame>
            <Pics>
                {Array.from({ length: 9}).map((_, index) => (
                    <Pic onClick={() => picClick(index)} index={index} active={active} key={index}>
                        <Img number={index} away={away} src={`https://100dayscss.com/codepen/40-${index+1}.jpg`} alt=""/>
                    </Pic>
                ))}
            </Pics>
        </Frame>
    )
}

export default Day40