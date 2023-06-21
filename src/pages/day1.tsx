import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Frame = styled.div`
    position: absolute;
    top: 50%;
    left:50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgb(0, 0, 0, 0.3);
    background: #43389F;
    background: -webkit-linear-gradient(bottom left, #43389F 0%, #4ec6ca 100%);
    background: -moz-linear-gradient(bottom left, #43389F 0%, #4ec6ca 100%);
    background: -o-linear-gradient(bottom left, #43389F 0%, #4ec6ca 100%);
    background: linear-gradient(to top right, #43389F 0%, #4ec6ca 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#43389F', endColorstr='#4ec6ca',GradientType=1 ); 
    font-family: 'Courier New', 'Courier', sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

const Center = styled.div`
    position: absolute;
    top: 50.8%;
    left: 50.5%;
    transform: translate(-50%, -50%);
`

const Number = styled.div`
    position: relative;
    height: 100px;
    width: 200px;
`
const OneOne = styled.div`
   position: absolute;
   z-index: 1;
   top: 0;
   left: -16px;
   height: 40px;
   width: 20px;
   background: #fff;
   border-radius: 3px;
   transform: rotate(50deg);
   box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.2);
`

const Day1 = () => {
    
    return(
        <Frame>
            <Center>
                <Number>
                    <OneOne/>
                </Number>
            </Center>
        </Frame>
    )
}

export default Day1