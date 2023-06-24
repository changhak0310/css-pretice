/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/react"

const red = "#FA7373";
const blue = "#7BA2FF";

const Frame = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:600,400');

    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
    background: #42A7A1;
    font-family: 'Open Sans', Helvetica, sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`

const Card = styled.div`
    position: absolute;
    top: 90px;
    left: 60px;
    width: 280px;
    height: 220px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    overflow: hidden;
`

const Header = styled.div`
    position: relative;
    height:60px;
    width: 100%;
    background: #F1BA64;
    color: #fff;
`

const bigFont = css`
    position: absolute;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
`

const smallFont = css`
    position: absolute;
    font-weight: 400;
    font-size: 11px;
`

const titleFont = css`
    top: 12px;
    left: 15px;
`

const dateFont = css`
    top: 30px;
    left: 15px;
`

const typeFont = css`
    top: 14px;
    right: 15px;
`

const valueFont = css`
    top: 28px;
    right: 15px;
`

const ParameterContain = styled.div`
    text-align: right;
    padding: 10px 0 14px 0%;
`

const pararmeterFont = css`
    position: relative;
    font-size: 9px;
    color: #606060;
    line-height: 13px;
    padding: 0 10px 0 25px;
    :before{
        position: absolute;
        left: 6px;
        top: 6px;
        display: block;
        content: '';
        width: 11px;
        height: 3px;
        border-radius: 3px;
    }
`

const pararmeterRed = css`
    :before{
        background: ${red};
    }
`

const pararmeterBlue = css`
    :before{
        background: ${blue};
    }
`

const Statistic = styled.div`
    position: relative;
    height: 81px;
    width: 260px;
    margin: 0 auto;
`

const Line = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #F2F2F2;
`

const line2 = css`
    top: 40px;
`

const line3 = css`
    top: inherit;
    bottom: 0;
`

const SVG = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

const RedData = styled.div`
    & polyline{
       stroke: ${red} 
    }
    & div {
        background-color: ${red};
        :after {
            background-color: ${red};
        }
    }
`

const BlueData = styled.div`
    & polyline{
       stroke: ${blue} 
    }
    & div {
        background-color: ${blue};
        :after {
            background-color: ${blue};
        }
    }
`

const Polyline = styled.polyline`
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
`

const Tooltop = styled.div`
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translate3d(-50% , 10px, 0);
    font-weight: 600;
    font-size: 11px;
    line-height: 11px;
    color: #fff;
    padding: 8px 6px;
    border-radius: 3px;
    visibility: hidden;
    opacity: 0;
    transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;

    &::after{
        position: absolute;
        display: block;
        content: '';
        height:  6px;
        width: 6px;
        left: 50%;
        margin-left: -3px;
        bottom: -3px;
        transform: rotate(45deg);
    }
`

const Point = styled.div`
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    cursor: pointer;
    z-index: 10;

    &:hover > div {
        visibility: visible;
        opacity: 1;
        transform: translate3d(-50%, 0, 0);
    }
`

const RedPoints = styled.div`
    &>:nth-child(1){ left: 7px; top: 43px; }
    &>:nth-child(2){ left: 48px; top: 9px; }
    &>:nth-child(3){ left: 88px; top: 20px; }
    &>:nth-child(4){ left: 128px; top: 8px; }
    &>:nth-child(5){ left: 169px; top: 35px; }
    &>:nth-child(6){ left: 209px; top: 45px; }
    &>:nth-child(7){ left: 249px; top: 16px; }
`

const BluePoints = styled.div`
    &>:nth-child(1){ left: 7px; top: 58px; }
    &>:nth-child(2){ left: 48px; top: 47px; }
    &>:nth-child(3){ left: 88px; top: 62px; }
    &>:nth-child(4){ left: 128px; top: 52px; }
    &>:nth-child(5){ left: 169px; top: 58px; }
    &>:nth-child(6){ left: 209px; top: 71px; }
    &>:nth-child(7){ left: 249px; top: 61px; }
`

const Days = styled.div`
    width: 280px;
    margin: 0 auto;
`

const Day = styled.div`
    display: block;
    float: left;
    width: calc(100%/7);
    font-size: 9px;
    color: #949494;
    line-height: 30px;
    text-transform: uppercase;
    text-align: center;
`


const Day3 = () => {
    
    return(
        <Frame>
            <Card>
                <Header>
                    <span css={[titleFont, bigFont]}>Weekly report</span>
                    <span css={[dateFont, smallFont]}>01. Feb - 07. Feb</span>
                    <span css={[typeFont, smallFont]}>Revenue</span>
                    <span css={[valueFont, bigFont]}>$ 3621.79</span>
                </Header>
                <ParameterContain>
                    <span css={[pararmeterFont, pararmeterRed]}>Views</span>
                    <span css={[pararmeterFont, pararmeterBlue]}>Purchases</span>
                </ParameterContain>
                <Statistic>
                    <Line/>
                    <Line css={line2}/>
                    <Line css={line3}/>
                    <RedData>
                        <SVG>
                            <Polyline points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"/>
                        </SVG>
                        <RedPoints>
                            <Point><Tooltop>458</Tooltop></Point>
                            <Point><Tooltop>812</Tooltop></Point>
                            <Point><Tooltop>746</Tooltop></Point>
                            <Point><Tooltop>877</Tooltop></Point>
                            <Point><Tooltop>517</Tooltop></Point>
                            <Point><Tooltop>434</Tooltop></Point>
                            <Point><Tooltop>458</Tooltop></Point>
                        </RedPoints>   
                    </RedData>
                    <BlueData>
                        <SVG>
                            <Polyline points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"/>
                        </SVG>
                        <BluePoints>
                            <Point><Tooltop>26</Tooltop></Point>
                            <Point><Tooltop>41</Tooltop></Point>
                            <Point><Tooltop>22</Tooltop></Point>
                            <Point><Tooltop>36</Tooltop></Point>
                            <Point><Tooltop>25</Tooltop></Point>
                            <Point><Tooltop>13</Tooltop></Point>
                            <Point><Tooltop>20</Tooltop></Point>
                        </BluePoints>   
                    </BlueData>
                </Statistic>
                <Days>
                    <Day>Mon</Day>
                    <Day>Tue</Day>
                    <Day>Wed</Day>
                    <Day>Thu</Day>
                    <Day>Fri</Day>
                    <Day>Sat</Day>
                    <Day>Sun</Day>
                </Days>
            </Card>
        </Frame>
    )
}

export default Day3