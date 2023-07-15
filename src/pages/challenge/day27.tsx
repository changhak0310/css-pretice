/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';

const Frame = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
    background: #FDA231;
    background: -webkit-linear-gradient(bottom left, #FDA231 0%, #FDCA31 100%);
    background: -moz-linear-gradient(bottom left, #FDA231 0%, #FDCA31 100%);
    background: -o-linear-gradient(bottom left, #FDA231 0%, #FDCA31 100%);
    background: linear-gradient(to top right, #FDA231 0%, #FDCA31 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#FDA231', endColorstr='#FDCA31',GradientType=1 );
    color: #497081;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const List = styled.div`
    position: absolute;
    width: 240px;
    height: 280px;
    top: 60px;
    left: 80px;
    background-color: #fff;
    box-shadow: 4px 8px 12px 0px rgba(0, 0, 0, 0.10);
    border-radius: 3px;
`
const Head = styled.div`
    padding: 20px 0px;
    margin: 0 30px;
    border-bottom: 1px solid #D4DCE0;
`
const Title = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
`
const Subtite = styled.div`
    font-size: 12px;
    line-height: 18px;
    text-align: center;
`
const Ul = styled.ul`
    list-style: none;
    padding: 4px 0px;
    margin: 0 30px;
`
const Li = styled.li`
    position: relative;
    display: block;
    margin: 24px 0;
    height: 14px;
`
const Text = styled.label`
    float: left;
    font-size: 13px;
    line-height: 14px;
    cursor: pointer;
    transition: all .3s ease-in-out;  
`
const Button = styled.label`
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    float: right;
    width: 14px;
    height: 14px;
    border: 1px solid #497081;
    border-radius: 50%;
    cursor: pointer;
    transition: all .4s ease-out .5s;

    
`
const Checkmark = styled.svg`
    position: absolute;
    top: 2px;
    right: 0%;
    stroke: #C8D4D9;
    fill: none;
    stroke-width: 1.5;
    stroke-dasharray: 30 30;
    stroke-dashoffset: 30;
    transition: all .5s ease-out;
`
const Input = styled.input`
    display: none;

    &:checked ~ .text {
        color: #C8D4D9;
    }
    &:checked ~ .button {
        transition: all .4s ease-in;
        transform: scale(1.5);
        opacity: 0;
    }
    &:checked ~ .checkmark {
        stroke-dashoffset: 0;
        transition: all .5s ease-out .4s;
    }
`

const Day27 = () => {
    return(
        <Frame>
            <List>
                <Head>
                    <Title>Friday</Title>
                    <Subtite>March 4, 2016</Subtite>
                </Head>
                <Ul>
                    <Li>
                        <Input type="checkbox" id="item-1" name="item-1"/>
                        <Text htmlFor="item-1" className="text">Create a list</Text>
                        <Button htmlFor="item-1" className="button"/>
                        <Checkmark width="15px" height="10px" className="checkmark">
                            <polyline points="1,5 6,9 14,1" />
                        </Checkmark>
                    </Li>
                    <Li>
                        <Input type="checkbox" id="item-2" name="item-2"/>
                        <Text htmlFor="item-2" className="text">Complete first task</Text>
                        <Button htmlFor="item-2" className="button"/>
                        <Checkmark width="15px" height="10px" className="checkmark">
                            <polyline points="1,5 6,9 14,1" />
                        </Checkmark>
                    </Li>
                    <Li>
                        <Input type="checkbox" id="item-3" name="item-3"/>
                        <Text htmlFor="item-3" className="text">Write some CSS code</Text>
                        <Button htmlFor="item-3" className="button"/>
                        <Checkmark width="15px" height="10px" className="checkmark">
                            <polyline points="1,5 6,9 14,1" />
                        </Checkmark>
                    </Li>
                    <Li>
                        <Input type="checkbox" id="item-4" name="item-4"/>
                        <Text htmlFor="item-4" className="text">Amaze the world</Text>
                        <Button htmlFor="item-4" className="button"/>
                        <Checkmark width="15px" height="10px" className="checkmark">
                            <polyline points="1,5 6,9 14,1" />
                        </Checkmark>
                    </Li>
                </Ul>
            </List>
        </Frame>
    )
}

export default Day27