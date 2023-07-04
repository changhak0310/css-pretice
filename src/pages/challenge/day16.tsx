/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

const blobby = keyframes`
    0% {
        transform: translate3d(0, -300px, 0) scaleY(1.2);
    }
    10% {
        transform: translate3d(0, 50px, 0) scaleY(0.8);
    }
    14% {
        transform: translate3d(0, -30px, 0) scaleY(1.1);
    }
    18% {
        transform: translate3d(0, 10px, 0) scaleY(0.9);
    }
    20%, 22% {
        transform: translate3d(0, 0, 0) scaleY(1);
    }
    26% {
        transform: translate3d(0, 0, 0) scale(1.2);
    }
    32%, 74% {
        transform: translate3d(0, 0, 0) scale(0);
    }
    80% {
        transform: translate3d(0, 0, 0) scale(1.2);
    }
    84% {
        transform: translate3d(0, 0, 0) scale(0.9);
    }
    86%, 88% {
        transform: translate3d(0, 0, 0) scale(1);
    }
    92% {
        transform: translate3d(0, -30px, 0) scaleY(0.9);
    }
    100% {
        transform: translate3d(0, 300px, 0) scaleY(1.2);
    }
`

const blobbyRing = keyframes`
    0%, 74% {
        transform: translate3d(0, 0, 0) scale(0);
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    84%, 100% {
        transform: translate3d(0, 0, 0) scale(1.4);
        opacity: 0;
    }
`

const octa = keyframes`
    0%, 30% {
        transform: translate3d(0, 0, 0) scale(0) rotate(22.5deg);
    }
    36% {
        transform: translate3d(0, 0, 0) scale(1.2) rotate(22.5deg);
    }
    40% {
        transform: translate3d(0, 0, 0) scale(0.9) rotate(22.5deg);
    }
    42%, 44% {
        transform: translate3d(0, 0, 0) scale(1) rotate(22.5deg);
    }
    48% {
        transform: translate3d(0, 0, 0) scale(1.2) rotate(22.5deg);
    }
    54%, 100% {
        transform: translate3d(0, 0, 0) scale(0) rotate(22.5deg);
    }
`

const octaSparkle = keyframes`
    0%, 30% {
        transform: translate3d(0, 0, 0) scale(0);
        opacity: 1;
    }
    36% {
        opacity: 1;
    }
    40%, 100% {
        transform: translate3d(0, 0, 0) scale(1.4);
        opacity: 0;
    }
`

const triangle = keyframes`
    0%, 52% {
        transform: translate3d(0, 0, 0) scale(0);
    }
    58% {
        transform: translate3d(0, 0, 0) scale(1.2);
    }
    62% {
        transform: translate3d(0, 0, 0) scale(0.9);
    }
    64%, 66% {
        transform: translate3d(0, 0, 0) scale(1);
    }
    70% {
        transform: translate3d(0, 0, 0) scale(1.2);
    }
    76%, 100% {
        transform: translate3d(0, 0, 0) scale(0);
    }
`

const triangleSparkle = keyframes`
    0%, 52% {
        transform: translate3d(0, 0, 0) scale(0);
    }
    58% {
        opacity: 1;
    }
    62%, 100% {
        transform: translate3d(0, 0, 0) scale(1.4);
        opacity: 0;
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
    background: #46A6DA;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Blobb = styled.div`
    position: absolute;
    width: 90px;
    height: 90px;
    top: 155px;
    left: 155px;
    background-color: #fff;
    border-radius: 50%;
    animation: ${blobby} 5s ease-in-out infinite;
`

const BlobbRing = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 110px;
    height: 110px;
    top: 145px;
    left: 145px;
    border: 3px solid #fff;
    border-radius: 50%;
    animation: ${blobbyRing} 5s ease-in-out infinite;
`

const Octagon = styled.svg`
    position: absolute;
    width: 100px;
    height: 100px;
    top: 150px;
    left: 150px;
    fill: #fff;
    animation: ${octa} 5s ease-in-out infinite; 
`

const OctaSparkles = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 100px;
    animation: ${octaSparkle} 5s ease-in-out infinite;


    &>:nth-of-type(1){ &::after { top: auto; bottom: 0; }}
    &>:nth-of-type(2){ transform: rotate(45deg); 
        &::after { top: auto; bottom: 0; }}
    &>:nth-of-type(3){ transform: rotate(90deg); 
        &::after { top: auto; bottom: 0; }}
    &>:nth-of-type(4){ transform: rotate(135deg); 
        &::after { top: auto; bottom: 0; }}
`

const Sparkle = styled.div`
    position: absolute;
    top: 0;
    left: 98px;
    width: 4px;
    height: 200px;

    &::before, &::after {
        display: block;
        content: '';
        position: absolute;
        width: 4px;
        height: 25px;
        top: 0;
        left: 0;
        border-radius: 2px;
        background-color: #fff;
    }
`

const Triangle = styled.svg`
    position: absolute;
    width: 106px;
    height: 90px;
    top: 145px;
    left: 147px;
    fill: #fff;
    animation: ${triangle} 5s ease-in-out infinite;
`

const TriangleSparkles = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    top: 100px;
    left: 100px;
    animation: ${triangleSparkle} 5s ease-in-out infinite;

    &>:nth-of-type(1) { top: 10px; }
    &>:nth-of-type(2) { transform: rotate(124deg); }
    &>:nth-of-type(3) { transform: rotate(237deg); }
`

const Day16 = () => {
    return(
        <Frame>
            <Blobb/>
            <BlobbRing/>
            <Octagon>
                <polygon points="30,0 70,0 100,30 100,70 70,100 30,100 0,70 0,30" />
            </Octagon>
            <Triangle>
                <polygon points="53,0 106,90 0,90" />
            </Triangle>
            <OctaSparkles>
                <Sparkle/>
                <Sparkle/>
                <Sparkle/>
                <Sparkle/>
            </OctaSparkles>
            <TriangleSparkles>
                <Sparkle/>
                <Sparkle/>
                <Sparkle/>
            </TriangleSparkles>
        </Frame>
    )
}

export default Day16