import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import { countDown, vote } from "../../modules/room";
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
font-size:40px;
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

span.title{
  position:absolute;
  width:300px;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
left:50%;
/* identical to box height */
transform:translate(-50%,10px);
text-align: center;

color: #EEEEEE;

}
@media screen and (max-width:500px){
  top:10px;
  height:430px;
  span.title{
    position:absolute;
    width:300px;
    font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  left:50%;
  /* identical to box height */
  transform:translate(-50%,10px);
  text-align: center;
  
  color: #EEEEEE;
  
  }
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
span{
  position:absolute;
  width:300px;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
left:50%;
/* identical to box height */
transform:translate(-50%,10px);
text-align: center;

color: #EEEEEE;

}

  @media screen and (max-width:500px){
    top:10px;
    height:430px;
    span{
      position:absolute;
      width:300px;
      font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    left:50%;
    /* identical to box height */
    transform:translate(-50%,10px);
    text-align: center;
    
    color: #EEEEEE;
    
    }
  }
`

const PlayerSec = styled.div`
  display:flex;
  justify-content: space-around;
  margin:50px 90px 0 0;
  img{
    width:59px;
  }
  p{
    font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 60px;
text-align: center;
color: #FFFFFF;
  }
`
const LiarSec = styled.div`
display:flex;
justify-content: space-around;
margin: 30px 0px 0 90px;
img{
  width:59px;
}
p{
  font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 60px;
text-align: center;
color: #FFFFFF;
}
`
const Intro = styled.div`
  margin: 10px 30px 0px 30px;
  p{
    font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
text-align: center;
word-break: keep-all;
color: #FFFFFF;
  }
  span{
    font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 30px;
text-align: center;
word-break: keep-all;
    color: #53A6C8;
  }
  @media screen and (max-width:500px){
    p{
      font-family: 'Do Hyeon';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  word-break: keep-all;
  color: #FFFFFF;
    }
    span{
      font-family: 'Do Hyeon';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  word-break: keep-all;
      color: #53A6C8;
    }
  }
`
const BackText = styled.div`
position:absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);
p{
  width: 100%;
  font-family: 'Do Hyeon';
  font-style: normal;
font-weight: 400;
  font-size: 40px;
  text-align: center;
  line-height:140px;
color: #E9DFF5;
}

p:nth-child(2){
  font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 40px;
text-align: center;

color: #53A6C8;
}
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
          주제 <Topic>{Rooms.data.gameRoom.gameSet.topic}</Topic>
          </Subject>
          <CardArea>
          {turn==false ? <FrontCardSection className={turn == false ? "front" : "back"} onClick={()=>setTurn(!turn)}>
          <span className="title">*클릭 후 제시어를 확인하세요</span>
          <PlayerSec>
          <div><img src="/img/player.png"/></div>
          <p>시민</p>
          </PlayerSec>
          <Intro><p>라이어가 <span>제시어를
유추하지 못하게</span> 설명해요
(단, 설명이 사실이어야 합니다)</p></Intro>
          <LiarSec>
          <p>라이어</p>
          <div><img src="/img/liar.png"/></div>
          </LiarSec>
          <Intro><p>정체를 들키지 않도록 <span>제시어를 유추해서</span> 설명해요</p></Intro>
          <LiarSec></LiarSec>
          </FrontCardSection>  : Rooms.data.userId == Rooms.data.gameRoom.gameSet.liarId ? <BackCardSection className={turn == false ? "back" : "front"}  onClick={()=>setTurn(!turn)}>
            <span>*클릭 후 게임방법을 확인하세요</span>
            <BackText>
            <p>당신은</p>
            <p>라이어</p>
            <p>입니다</p>
            </BackText>
          </BackCardSection>: <BackCardSection  onClick={()=>setTurn(!turn)}>
          <span>*클릭 후 게임방법을 확인하세요</span>
          <BackText>
            <p>제시어</p>
            <p>{Rooms.data.gameRoom.gameSet.word}</p>
            <p>입니다</p>
            </BackText>
          </BackCardSection>
          }
          </CardArea></> : <Vote/>}
        </Wrap>

    )
}

export default Hide;