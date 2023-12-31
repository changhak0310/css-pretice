/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { SearchOutlined } from "@ant-design/icons";

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
    background: #5CA4EA;
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Search = styled.div`
    position: absolute;
    width: 260px;
    top: 180px;
    left: 70px;
    font-size: 0%;
    background-color: #fff;
    box-shadow: 4px 8px 12px 0 rgba(0,0,0,0.1);
`
const SearchField = styled.input`
    float: left;
    width: 205px;
    height: 40px;
    border: none;
    border-radius: 0;
    -webkit-appearance: none;
    font-weight: 13px;
    font-size: 13px;
    padding: 0 0 0 15px;
    background-color: #fff;
    color: #4D8DCB;
`
const Button = styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
    background-color: #fff;
    color: #5CA4EA;
    font-size: 20px;
    padding: 0;

    span {
        position: relative;
        top: -1px;
    }
`
const Suggestions = styled.div`
    background-color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    padding: 0 15px;
    margin: 0;
    list-style: none;
    color: #6E6E6E;

    &.active{
        border-top: 1px solid #5CA4EA;
    }
`
const Li = styled.li`
    margin: 18px 0px;
    padding: 0;
    cursor: pointer;

    :hover{
        color: #4D8DCB;
    }

    b{
        font-weight: 600;
    }
`
const clearfix = css`
    *zoom: 1;
    &::after, &::before{
        content: '';
        display: table;
    }
    &::after{
        clear: both;
    }
    *:focus {
	outline: none;
    }
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #A4B9CE;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #A4B9CE;
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #A4B9CE;
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #A4B9CE;
    }
    :placeholder-shown { /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */
        color: #A4B9CE;
    }
`

const Day29 = () => {
    return(
        <Frame>
            <Search>
                <SearchField  type="text" placeholder="Start typing ..." value=""/>
                <Button><SearchOutlined/></Button>
                <Suggestions css={clearfix}></Suggestions>
            </Search>
        </Frame>
    )
}

export default Day29