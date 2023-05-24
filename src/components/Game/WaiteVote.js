import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import { useHistory } from "react-router-dom";

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
@media screen and (max-width:500px){
    top:30px;
}
`
const NumWrap = styled.div`
    display:flex;
    padding-top:220px;
    margin: 0 50px;
    @media screen and (max-width:500px){
        padding-top:120px;
    }
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
@media screen and (max-width:500px){
    img{top:60%;
    transform:translateY(-50%);
    }
    img+img{top:90%;
        
        }
}
`

const WaitVote = () => {
    const { Rooms } = useSelector((state) => ({
        Rooms: state.room,
    }));
    //socket 연결
    const sock = new SockJs("http://localhost:8080/socket");

    //stomp 연결
    const stomp = StompJs.over(sock);

    const dispatch = useDispatch();

    function disconnect() {
        stomp.disconnect(() => {
          console.log("socket연결 해제");
        });
      }
    function sendLeave() {
        stomp.send(
          `/pub/game/leave`,
          {},
          JSON.stringify({
            roomId: Rooms.data.gameRoom.roomId,
            userId: Rooms.data.userId,
          })
        );
        disconnect();
      }
      

        const [current, setCurrent] = useState(0);
        const [max, setMax] = useState(Rooms.data.gameRoom.users.length);
    
        // const history = useHistory();
        
        // useEffect(() => {
        //   window.addEventListener('beforeunload', (event) => {
        //     event.preventDefault();
        
        //     event.returnValue = sendLeave();
        //   })
        //     let unlisten = history.listen((location) => {
        //       if (history.action === 'PUSH') {
        //       }
        //       if (history.action === 'POP') {
        //       }
        //     });
        
        //     return () => {
        //       unlisten();
        //     };
        //   }, [history]);
        


    return(
        <Wrap>
            <Title>투표 완료</Title>
            <NumWrap>
            <NUM>{Rooms.data.gameRoom.VoteSet.currentVoteCount}</NUM><NUM>/</NUM><NUM>{max}</NUM>
            </NumWrap>
            <ImgArea>
            <img src={'/img/LogoDot.png'} />
            <img src={'/img/GameName.png'} />
            </ImgArea>
        </Wrap>
    )
}

export default WaitVote;