/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

interface Props {
    index: number;
}

const radius = 200;
const speed = 6;
const fill = "#fff";
const border = "#D33526";

const slice1 = (index: number) => {
    const offset = index*15 - index*index/2;
    const trans1 = `translateY(${offset+index*4}px) rotateX(90deg)`
    const trans2 = `translateY(${offset-index*2}px) rotateX(90deg)`
    const trans3 = `translateY(${offset+index*1}px) rotateX(90deg)`
    const trans4 = `translateY(${offset-index*0.5}px) rotateX(90deg)`
    const trans5 = `translateY(${offset}px) rotateX(90deg)`
    const trans6 = `translateY(${offset+index*4}px) rotateX(90deg)`
    return keyframes`
        0%, 19% {
				transform: translateY(0) rotateX(90deg);
				opacity: 0;
			}
			20% {
				transform: translateY(0) rotateX(90deg);
				opacity: 1;
				border: 2px solid ${fill};
			}
			30% {
				transform: ${trans1};
				border: 2px solid ${border};
			}
			35% {
				transform: ${trans2};
			}
			40% {
				transform: ${trans3};
			}
			45% {
				transform: ${trans4}
			}
			50%, 65% {
				transform: ${trans5}
			}
			70% {
				transform: ${trans6};
				border: 2px solid ${border};
			}
			80% {
				transform: translateY(0) rotateX(90deg);
				opacity: 1;
				border: 2px solid ${fill};
			} 
			81%, 100% {
				transform: translateY(0) rotateX(90deg);
				opacity: 0;
			}
    `
}
const slice2 = (index: number) => {
    const offset = index*15 - index*index/2;
    const trans1 = `translateY(${-1*offset-index*4}px) rotateX(90deg)`
    const trans2 = `translateY(${-1*offset+index*2}px) rotateX(90deg)`
    const trans3 = `translateY(${-1*offset-index*1}px) rotateX(90deg)`
    const trans4 = `translateY(${-1*offset+index*0.5}px) rotateX(90deg)`
    const trans5 = `translateY(${-1*offset}px) rotateX(90deg)`
    const trans6 = `translateY(${-1*offset-index*4}px) rotateX(90deg)`
    return keyframes`
        0%, 19% {
	    	transform: translateY(0) rotateX(90deg);
	    	opacity: 0;
	    }
	    20% {
	    	transform: translateY(0) rotateX(90deg);
	    	opacity: 1;
	    	border: 2px solid $fill;
	    }
	    30% {
	    	transform: ${trans1};
	    	border: 2px solid $border;
	    }
	    35% {
	    	transform: ${trans2};
	    }
	    40% {
	    	transform: ${trans3};
	    }
	    45% {
	    	transform: ${trans4};
	    }
	    50%, 65% {
	    	transform: ${trans5};
	    }
	    70% {
	    	transform: ${trans6};
	    	border: 2px solid $border;
	    }
	    80% {
	    	transform: translateY(0) rotateX(90deg);
	    	opacity: 1;
	    	border: 2px solid $fill;
	    } 
	    81%, 100% {
	    	transform: translateY(0) rotateX(90deg);
	    	opacity: 0;
	    }
    `
}
const slice21 = keyframes`
    0% {
		transform: rotateX(90deg) scale(0);
	}
	10% {
		transform: rotateX(90deg) scale(1.2);
	}
	15% {
		transform: rotateX(90deg) scale(0.9);
	}
	20%, 75% {
		transform: rotateX(90deg) scale(1);
	}
	80% {
		transform: rotateX(90deg) scale(1.2);
	}
	90%, 100% {
		transform: rotateX(90deg) scale(0);
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
    background: #D33526;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    perspective: 350px;
`
const Form = styled.div`
    width: ${radius}px;
    height: ${radius}px;
    transform-style: preserve-3d;
    transform: rotateX(-25deg);
    transition: all 1s ease-in-out;

    &:hover{
        transform: rotateX(25deg);
    }
`
const Slice1 = styled.div<Props>`
    box-sizing: border-box;
    position: absolute;
    border-radius: 50%;
    background-color: ${fill};
    border: 2px solid ${border};
    opacity: 1;
    transition: all 1s ease-in-out;

    ${({index}) => {
        const size = radius-(2*index*index);
        const offset = index*15 - index*index/2;
        const trans = `translateY(${offset}px) rotateX(90deg);`;
            return css`
                width: ${size}px;
                height: ${size}px;
                left: ${(radius-size)/2}px;
                top: ${(radius-size)/2}px;
                transform: ${trans};
                animation: ${slice1(index)} ${speed}s ease-in-out infinite;
            `
    }}
`
const Slice2 = styled.div<Props>`
    box-sizing: border-box;
    position: absolute;
    border-radius: 50%;
    background-color: ${fill};
    border: 2px solid ${border};
    opacity: 1;
    transition: all 1s ease-in-out;

    ${({index}) => {
        const size = radius-(2*index*index);
        const offset = index*15 - index*index/2;
        const trans = `translateY(${-1*offset}px) rotateX(90deg);`
        return css`
            width: ${size}px;
            height: ${size}px;
            left: ${(radius-size)/2}px;
            top: ${(radius-size)/2}px;
            transform: ${trans};
            animation: ${slice2(index)} ${speed}s ease-in-out infinite;
        `
    }}
`
const Slice = styled.div`
    box-sizing: border-box;
    position: absolute;
    border-radius: 50%;
    background-color: ${fill};
    border: 2px solid ${border};
    opacity: 1;
    transition: all 1s ease-in-out;
    width: ${radius}px;
    height: ${radius}px;
    left: 0;
    top: 0;
    transform: rotateX(90deg);
    animation: ${slice21} ${speed}s ease-in-out infinite; 
`

const Day58 = () => {
    return(
        <Frame>
            <Center>
                <Form>
                    {Array.from({length: 10}).map((_, index) => (
                        <Slice1 key={index} index={index}/>
                    ))}
                    {Array.from({length: 10}).map((_, index) => (
                        <Slice2 key={index} index={index}/>
                    ))}
                    <Slice/>
                </Form>
            </Center>
        </Frame>
    )
}

export default Day58