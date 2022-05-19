import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import { countDown, vote } from "../../modules/room";
import Button from "../Button";
import Vote from "./Vote";
import { useHistory } from "react-router-dom";

const Flip = keyframes`
0%{
  transform: rotateY(0deg);
}
50%{
  transform: rotateY(-90deg);
}
100%{
  transform: rotateY(-180deg);
}
`
const Wrap = styled.div`
position: relative;
width: 100vh;
max-width: 390px;
height: 100vh;
background: #0f0c13;
margin: 0 auto;
`;
const Timer = styled.p`
position:absolute;
left:50%;
transform: translateX(-50%);
color:#53A6C8;
margin-top:58px;
font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 55px;
line-height: 69px;
@media screen and (max-width:500px){
  margin-top:30px;
}
`
const Subject = styled.p`
display:flex;
justify-content:space-around;
color:#fff;
padding-top:140px;
margin: 0 56px 0 70px;
font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 80px;
@media screen and (max-width:500px){
  padding-top:100px;
}
`
const Topic = styled.span`
font-size:55px;
line-height: 69px;
`
const CardArea = styled.div`
perspective:1100px;

`
const FrontCardSection = styled.div`

position:absolute;
left: 45px;
top: 80px;
width: 300px;
height: 467px;
background: #0F0C13;
border: 13px solid #6171A3;
border-radius: 20px;
animation: ${Flip} 0.7s linear;
cursor: pointer;
img{
  position:absolute;
  margin-top:124px;
  left:50%;
  transform:translateX(-50%);
  width:150px;
}
img+img{
  bottom:14px;
}
@media screen and (max-width:500px){
  top:10px;
}
`
const BackCardSection = styled.div`
position:absolute;
left: 45px;
top: 80px;
width: 300px;
height: 467px;
background: #0F0C13;
border: 13px solid #6171A3;
border-radius: 20px;
animation: ${Flip} 0.7s linear;
cursor: pointer;
img{
  position:absolute;
  left:50%;
  transform:translate(-50%,-10%);
  width:110px;
}
  p{
    width: 100%;
    height: 36px;
    font-family: 'Do Hyeon';
    font-style: normal;
  font-weight: 400;
    font-size: 40px;
  line-height: 50px;
    text-align: center;
  margin-top:142px;
  color: #E9DFF5;
  }
  p+p{
    margin-top:56px;
  }
  p:nth-child(3){
    font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 40px;
text-align: center;

color: #53A6C8;
  }
  @media screen and (max-width:500px){
    top:10px;
  }
`
const NickName =styled.p`
  color:#fff;
  text-align: center;
`
const Hide = () => {
  const { Rooms } = useSelector((state) => ({
    Rooms: state.room,
  }));
    //socket 연결
    const sock = new SockJs("http://3.35.178.104/socket");

    //stomp 연결
    const stomp = StompJs.over(sock);

    const dispatch = useDispatch();
    const [turn,setTurn] = useState(false);
    const [seconds, setSeconds] = useState(Rooms.data.gameRoom.setting.timeLimit);

    React.useEffect(() => {
      stompConnect();
    }, []);
    
    function stompConnect() {
      stomp.connect({}, () => {
        stomp.subscribe(`/sub/game/countdown/${Rooms.data.gameRoom.roomId}`, (body) => {
          let data = JSON.parse(body.body);
          console.log(data.data.count);
          if(data.data.count==0)
          dispatch(countDown(data.data));
        });
        
      }
      )}

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

      function sendVote() {
        stomp.send(
          "/pub/game/vote",
          {},
          JSON.stringify({
            roomId: Rooms.data.gameRoom.roomId,
            userId: Rooms.data.userId,
          })
        );
      }
      const OnClickVote = () => {
        sendVote();
        console.log(Rooms.data);
      }

      const history = useHistory();

      useEffect(() => {
        window.addEventListener('beforeunload', (event) => {
          event.preventDefault();
      
          event.returnValue = sendLeave();
        })
        let unlisten = history.listen((location) => {
          if (history.action === 'PUSH') {
          }
          if (history.action === 'POP') {
            history.push('/');
            sendLeave();
          }
        });
    
        return () => {
          unlisten();
        };
      }, [history]);

  useEffect(()=>{
    const countdown = setInterval(()=>{
      if(parseInt(seconds) > 0){
        setSeconds(parseInt(seconds) - 1);
      }
      if(parseInt(seconds) === 0) clearInterval(countdown);
    },1000);
    return () => clearInterval((countdown));
  }, [seconds])
    return (
        <Wrap>
          {Rooms.data.gameRoom.gameStatus != "VOTE" ? <><Timer>
          {seconds}
          </Timer>
          <Subject>
          주제 <Topic>{Rooms.data.gameRoom.setting.topic}</Topic>
          </Subject>
          <CardArea>
          {turn==false ? <FrontCardSection onClick={()=>setTurn(!turn)}>
          <img src={'/img/LogoDot.png'} />
          <img src={'/img/GameName.png'} />
          </FrontCardSection>  : Rooms.data.userId == Rooms.data.gameRoom.gameSet.liarId ? <BackCardSection  onClick={()=>setTurn(!turn)}>
          <img src={'/img/Dongle.png'} />
            <p>당신은</p>
            <p>라이어</p>
            <p>입니다</p>
          </BackCardSection>: <BackCardSection  onClick={()=>setTurn(!turn)}>
          <img src={'/img/Dongle.png'} />
            <p>제시어</p>
            <p>{Rooms.data.gameRoom.gameSet.word}</p>
            <p>입니다</p>
          </BackCardSection>
          }
          </CardArea></> : <Vote/>}
        </Wrap>

    )
}

export default Hide;