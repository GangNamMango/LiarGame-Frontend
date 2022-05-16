import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import { vote } from "../../modules/room";

const Wrap = styled.div`
position: relative;
width: 100vh;
max-width: 390px;
height: 100vh;
background: #0f0c13;
margin: 0 auto;
`;
const Title = styled.h1`
position: absolute;
width: 292px;
height: 84px;
left: 49px;
top: 117px;

font-family: 'Dongle';
font-style: normal;
font-weight: 400;
font-size: 70px;
line-height: 101px;
text-align: center;

color: #53A6C8;
`
const NumWrap = styled.div`
    display:flex;
    padding-top:220px;
    margin: 0 50px;
`
const NUM = styled.p`
width: 292px;
height: 100px;


font-family: 'Dongle';
font-style: normal;
font-weight: 400;
font-size: 85px;
line-height: 123px;
text-align: center;

color: #53A6C8;

`
const ImgArea = styled.div`
img{
    position: absolute;
width: 200px;
height: 292.66px;
left: 95px;
top: 387px;
}
img+img{
    position: absolute;
width: 193px;
height: 59px;
left: 98px;
top: 761px;
}
`

const WaitVote = () => {
    const { Rooms } = useSelector((state) => ({
        Rooms: state.room,
    }));
    
        //socket 연결
        const sock = new SockJs("http://3.35.178.104/socket");

        //stomp 연결
        const stomp = StompJs.over(sock);
    
        const dispatch = useDispatch();
        React.useEffect(() => {
            stompConnect();
          }, []);

        function stompConnect() {
            stomp.connect({}, () => {


            }
            )}


    return(
        <Wrap>
            <Title>투표 완료</Title>
            <NumWrap>
            <NUM>{Rooms.data.gameRoom.VoteSet.currentVoteCount}</NUM><NUM>/</NUM><NUM>{Rooms.data.gameRoom.VoteSet.maxVoteCount}</NUM>
            </NumWrap>
            <ImgArea>
            <img src={'/img/LogoDot.png'} />
            <img src={'/img/GameName.png'} />
            </ImgArea>
        </Wrap>
    )
}

export default WaitVote;