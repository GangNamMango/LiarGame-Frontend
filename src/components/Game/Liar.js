import React from "react";
import styled from "styled-components";


const Liar = ({turn,setTurn}) => {
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
    return(
        <LiarCardSection  >
        <img src={'/img/동글 캐릭터.png'} />
            <p>당신은</p>
            <p>라이어</p>
            <p>입니다</p>
        </LiarCardSection>
    )
}

export default Liar;