/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState } from 'react';
import { EyeOutlined, CommentOutlined, BellOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons'

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
    background: #2B3642;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`
const Center = styled.div`
    position: absolute;
    width: 320px;
    height: 240px;
    top: 80px;
    left: 40px;
    background-color: #fff;
    box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.3);
`
const Top = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #3D4D5E;
`
const Tab = styled.label`
    position: relative;
    float: left;
    z-index: 5;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 38px;
    color: #8398AD;
    cursor: pointer;
    font-size: 14px;
    transition: background .5s ease-in-out;

    &:hover{
        color: #fff;
    }

    input[type="radio"]:checked + & {
        background: #5DA2ED;
		color: #fff;	
    }

    #tab-1:checked ~ #box-1 #content,
    #tab-2:checked ~ #box-2 #content,
    #tab-3:checked ~ #box-3 #content,
    #tab-4:checked ~ #box-4 #content{
        pointer-events: all;
        opacity: 1;
        transform: translateY(0);
        transition: all .5s ease-out .4s;
    }
`
const Input = styled.input`
    display: none;
    
`
const search = css`
    float: right;
`
const Content = styled.div`
    position: absolute;
    top: 40px;
    color: #000;

    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
    transition: all .5s ease-out .4s;
`
const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(3px);
    pointer-events: none;
    padding: 25px;
    transition: all .3s ease-in;

    pointer-events: all;
    opacity: 1;
    transform: translateY(0);
    transition: all .5s ease-out .4s;
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 16px;
    color: #415868;
    margin: 0;
    padding: 0;
`
const P = styled.p`
    margin: 17px 0;
`
const Line = styled.span`
    display: block;
    height: 4px;
    background-color: #E9E9E9;
    margin: 6px 0;
`
const Tabs = styled.div`

`

const Day36 = () => {
    const box = [
        {
            title: "Dashboard",
            content: <><P><Line css={{width: '250px'}}/><Line css={{width: '270px'}}/><Line css={{width: '235px'}}/><Line css={{width: '260px'}}/><Line css={{width: '53px'}}/></P><P><Line css={{width: '262px'}}/><Line css={{width: '234px'}}/><Line css={{width: '246px'}}/><Line css={{width: '260px'}}/><Line css={{width: '144px'}}/></P></>
        },
        {
            title: "Comments",
            content: <><P><Line css={{width: '250px'}}/><Line css={{width: '270px'}}/><Line css={{width: '235px'}}/><Line css={{width: '260px'}}/><Line css={{width: '53px'}}/></P><P><Line css={{width: '262px'}}/><Line css={{width: '234px'}}/><Line css={{width: '246px'}}/><Line css={{width: '260px'}}/><Line css={{width: '144px'}}/></P></>
        },
        {
            title: "Notifications",
            content: <><P><Line css={{width: '250px'}}/><Line css={{width: '270px'}}/><Line css={{width: '235px'}}/><Line css={{width: '260px'}}/><Line css={{width: '53px'}}/></P><P><Line css={{width: '262px'}}/><Line css={{width: '234px'}}/><Line css={{width: '246px'}}/><Line css={{width: '260px'}}/><Line css={{width: '144px'}}/></P></>
        },
        {
            title: "Settings",
            content: <><P><Line css={{width: '250px'}}/><Line css={{width: '270px'}}/><Line css={{width: '235px'}}/><Line css={{width: '260px'}}/><Line css={{width: '53px'}}/></P><P><Line css={{width: '262px'}}/><Line css={{width: '234px'}}/><Line css={{width: '246px'}}/><Line css={{width: '260px'}}/><Line css={{width: '144px'}}/></P></>
        }
    ]
    const [state, setState] = useState(0);
    const handleChange = (number: number) => {
        setState(number)
    }
    return(
        <Frame>
            <Center>
                <Tabs>
                    <Top/>
                    <Input type="radio" id="tab-1" name="rd" defaultChecked={true} onChange={() => handleChange(0)}/>
                    <Tab htmlFor="tab-1">
                        <EyeOutlined />
                    </Tab>
                    <Input type="radio" id="tab-2" name="rd" onChange={() => handleChange(1)}/>
                    <Tab htmlFor="tab-2">
                        <CommentOutlined />
                    </Tab>
                    <Input type="radio" id="tab-3" name="rd" onChange={() => handleChange(2)}/>
                    <Tab htmlFor="tab-3">
                        <BellOutlined />
                    </Tab>
                    <Input type="radio" id="tab-4" name="rd" onChange={() => handleChange(3)}/>
                    <Tab htmlFor="tab-4">
                        <SettingOutlined />
                    </Tab>
                    <Tab css={search}>
                        <SearchOutlined />
                    </Tab>
                </Tabs>
                <Content id="content">
                    <Box>
                        <H1>{box[state].title}</H1>
                        {box[state].content}
                    </Box>
                </Content>
            </Center>
        </Frame>
    )
}

export default Day36