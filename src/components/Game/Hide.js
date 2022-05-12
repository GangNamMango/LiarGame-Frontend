import React, { useEffect, useState } from "react";
import { useInsertionEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Liar from "./Liar";
import NoLiar from "./NoLiar";

const Hide = () => {
  const { Rooms } = useSelector((state) => ({
    Rooms: state.room,
  }));
    const [turn,setTurn] = useState(false);
    const [seconds, setSeconds] = useState(Rooms.data.gameRoom.setting.timeLimit);
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
    `
    const Subject = styled.p`
    position:absolute;
    display:flex;
    
    left:50%;
    transform:translateX(-50%);
    color:#fff;
    margin-top:120px;
    font-family: 'Do Hyeon';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 69px;
    padding: 0px 0px;
    .Subject{
      font-size:40px;
    }
    `
    const CardArea = styled.div`
    perspective:300px;
    `
    const CardSection = styled.div`
    
    position:absolute;
    left: 45px;
top: 300px;
    width: 300px;
height: 467px;
    background: #0F0C13;
border: 13px solid #6171A3;
border-radius: 20px;
backface-visibility: hidden;
transition:1s;


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
    `
    const LiarCardSection = styled.div`
    position:fixed;
    left: 45px;
top: 300px;
    width: 300px;
height: 467px;
    background: #0F0C13;
border: 13px solid #6171A3;
border-radius: 20px;

transition:1s ease-in-out; 
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
    `

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
          <Timer>
          {seconds}
          </Timer>
          <Subject>
          주제:<span className="Subject">{Rooms.data.gameRoom.setting.topic}</span>
          </Subject>
          <CardArea>
          {turn==false ? <CardSection onClick={()=>setTurn(!turn)}>
          <img src={'/img/로고 돋보기.png'} />
          <img src={'/img/게임명.png'} />
          </CardSection>  : Rooms.data.gameRoom.gameSet.liarName == Rooms.data.gameRoom.users.nickname ? <LiarCardSection  onClick={()=>setTurn(!turn)}>
          <img src={'/img/동글 캐릭터.png'} />
            <p>당신은</p>
            <p>라이어</p>
            <p>입니다</p>
          </LiarCardSection>: <LiarCardSection  onClick={()=>setTurn(!turn)}>
          <img src={'/img/동글 캐릭터.png'} />
            <p>제시어</p>
            <p>{Rooms.data.gameRoom.gameSet.word}</p>
            <p>입니다</p>
          </LiarCardSection>
          }
          </CardArea>
        </Wrap>

    )
}

export default Hide;