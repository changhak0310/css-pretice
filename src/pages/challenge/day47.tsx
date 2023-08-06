/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react'; 

interface Props {
    index: number;
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
	overflow: hidden;
    background: #DE4738;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Pixel = styled.div`
    float: left;
`
const Label = styled.label`
    box-sizing: border-box;
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #E24E4F;
    cursor: pointer;

    &:hover{
        background-color: #EC5142;
        border-color: #E24E3F;
    }
`
const Input = styled.input`
    display: none;

    &:checked ~ ${Label}{
        background-color: #fff;
        border-color: #fff;
    }
`

const Day47 = () => {

    return(
        <Frame>
            {Array.from({ length: 400}).map((_, index) => (
                <Pixel key={index}>
                    {
                        (index+1 == 130 || index+1 == 131 || index+1 == 149 || index+1 == 150 || index+1 == 151 || index+1 == 152 || index+1 == 168 || index+1 == 169 || index+1 == 170 || index+1 == 171 || index+1 == 172 || index+1 == 173 || index+1 == 187 || index+1 == 188 || index+1 == 190 || index+1 == 191 || index+1 == 193 || index+1 == 194 || index+1 == 207 || index+1 == 208 || index+1 == 209 || index+1 == 210 || index+1 == 211 || index+1 == 212 || index+1 == 213 || index+1 == 214 || index+1 == 229 || index+1 == 232 || index+1 == 248 || index+1 == 250 || index+1 == 251 || index+1 == 253 || index+1 == 267 || index+1 == 269 || index+1 == 272 || index+1 == 274) ?
                        <Input type="checkbox" id={index.toString()} checked={true}/>  :
                        <Input type="checkbox" id={index.toString()}/>
                    }                    
                    <Label htmlFor={index.toString()}/>
                </Pixel>
            ))}
        </Frame>
    )
}

export default Day47;