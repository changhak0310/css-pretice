/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"
import { useState, useRef, ChangeEvent } from 'react';

interface isUploadProps {
    isUpload: boolean;
}

const syncing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        transform: rotate(360deg);
        opacity: 0;
    }
`

const done = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
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
    background: #3A92AF;
    background: -webkit-linear-gradient(bottom left, #3A92AF 0%, #5CA05A 100%);
    background: -moz-linear-gradient(bottom left, #3A92AF 0%, #5CA05A 100%);
    background: -o-linear-gradient(bottom left, #3A92AF 0%, #5CA05A 100%);
    background: linear-gradient(to top right, #3A92AF 0%, #5CA05A 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3A92AF', endColorstr='#5CA05A',GradientType=1 );
    color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Center = styled.div`
    position: absolute;
    width: 300px;
    height:260px;
    top: 70px;
    left: 50px;
    background-color: #fff;
    box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
    border-radius: 3px;
`

const Title = styled.div`
    font-size: 16px;
    color: #676767;
    line-height: 50px;
    height: 50px;
    border-bottom: 1px;
    text-align: center;
`

const Dropzone = styled.div`
    position: absolute;
    z-index: 1;
    box-sizing: border-box;
    display: table;
    table-layout: fixed;
    width: 100px;
    height: 80px;
    top: 86px;
    left: 100px;
    border: 1px dashed #A4A4A4;
    border-radius: 3px;
    text-align: center;
    overflow: hidden;
`

const IsDragover = styled.div`
    color: #424242;
    /* border-color: #666;
    background-color: #eee; */
`

const Content = styled.div`
    display: table-cell;
    vertical-align: middle;
`

const UploadImg = styled.img`
    margin: 6px 0 0 2px;
`

const Filename = styled.span`
    display: block;
    color: #676767;
    font-size: 14px;
    line-height: 18px;
`

const Input = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
`

const UploadButton = styled.div`
    position: absolute;
    width: 140px;
    height: 40px;
    left: 80px;
    bottom: 24px;
    background-color: #6ECE3B;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    box-shadow: 0 2px 0 0 #498c25;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        box-shadow: 0 2px 0 0 #498c25, 0 2px 10px 0 #6ECE3B;
    }
`

const Bar = styled.div<isUploadProps>`
    position: absolute;
    z-index: 1;
    width: 300px;
    height: 3px;
    top: 49px;
    left: 0;
    background-color: #6ece3b;
    transition: all 3s ease-out;
    transform: scaleX(0);
    transform-origin: 0 0;

    ${props => (
        props.isUpload && css`
            transform: scaleX(1) translate3d(0, 0, 0);
        `
    )}
`

const SyncingImg = styled.img<isUploadProps>`
    position: absolute;
    top: 109px;
    left: 134px;
    opacity: 0;

    ${props => (
        props.isUpload && css`
            animation: ${syncing} 3.2s ease-in-out;
        `
    )}
`

const DoneImg = styled.img<isUploadProps>`
    position: absolute;
    top: 112px;
    left: 132px;
    opacity: 0;

    ${props => (
        props.isUpload && css`
            animation: ${done} .5s ease-in 3.2s;
            animation-fill-mode: both;
        `
    )}
`

const Day15 = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');
    const [isUpload, setIsUpload] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
        setFileName(file ? file.name : '');
    }

    const DoneFunction = () => {
        setIsDone(pre => !pre);
    }

    const startUpload = () => {
        if(!isUpload && fileName != '') {
            setIsUpload(true)
            setTimeout(DoneFunction, 3200)
        }
    }
    
    return(
        <Frame>
            <Center>
                <Bar isUpload={isUpload}/>
                <Title>Drop file to upload</Title>
                {
                    isUpload ?
                    null :
                    <Dropzone>
                        <Content>
                            {
                                selectedFile?.name ?
                                <IsDragover>{fileName}</IsDragover> :
                                <UploadImg src="https://100dayscss.com/codepen/upload.svg"/>
                            }
                            <Filename/>
                            <Input type="file" ref={fileInputRef} onChange={handleFileChange}/>
                        </Content>
                    </Dropzone>
                }
                
                <SyncingImg isUpload={isUpload} src="https://100dayscss.com/codepen/syncing.svg"/>
                <DoneImg isUpload={isUpload} src="https://100dayscss.com/codepen/checkmark.svg"/>
                <UploadButton onClick={startUpload}>
                    {isUpload ? 
                        isDone ?
                            "Done"
                            : "Uploading..." 
                    : "Upload file"}
                </UploadButton>
            </Center>
        </Frame>
    )
}

export default Day15