import React, { useState } from "react";
import styled from "styled-components";
import "./NavContainer.css";
const NavContainer = () => {
  const [popup, setPopup] = useState(false);
  const [game, setGame] = useState(false);
  const [htr, setHtr] = useState(false);
  const [htj, setHtj] = useState(false);
  const Button = styled.h1`
    text-align:center;
    font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;
cursor: pointer;
color: #53A6C8;
    color: #54b5c2;
    transition: none;
  `;
  const OnclickPop =() => {
    if(popup == false)
    setPopup(!popup);
    if(popup == true){
    setPopup(!popup)
    setGame(false);
    setHtj(false);
    setHtr(false);
    }
  }
  return (
    <div className="Nav_area">
      <div
        className={popup ? "Nav_close" : "Nav_open"}
        popup={popup}
        onClick={() => OnclickPop()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div><h1 className="game_title">라이어게임</h1><img className="GameLogo" src="/img/GameName.png"/></div>
      <div className={popup ? "bg" : ""}></div>
      <div className={popup ? "popup_area" : "hidden"}>
        <div className={game ? "block" : "none"}>
        <div className="DoHyeon">
          <span>1</span>
            <p>
              시민은 <span className="colors">제시어 카드</span>, 라이어는 역할 카드를 받습니다.
            </p>
          </div>
          <div className="DoHyeon Sub">
          <span>2</span>
            <p>
            참가자들은 돌아가며 <span className="colors">제시어를 설명</span>합니다 
            <p>시민은 라이어에게 <span className="colors">제시어를 들키지 않도록</span> 설명합니다</p>
            <p>라이어는 정체를 의심받지 않고 <span className="colors">제시어를 유추</span>해서 설명합니다</p>
            </p>
            
          </div>
          <div className="DoHyeon">
          <span>3</span>
            <p>
            제한 시간이 지나면 <span className="colors">라이어</span>로 의심되는 사람을 <span className="colors">선택합니다</span>
            </p>
          </div>
          <div className="DoHyeon">
          <span>4</span>
          <div className="Long">
            <p>
            라이어를 찾지 못한 경우 <span className="colors">라이어가 승리</span>합니다
            </p>
            <p>
            라이어를 찾았지만 라이어가 제시어를 맞춘 경우 <span className="colors">라이어가 승리</span>합니다
            </p>
            <p>
            라이어를 찾고 라이어가 제시어를 맞추지 못한 경우 <span className="colors">시민이 승리</span>합니다
            </p>
            <Button onClick={() => setGame(!game)}>확인</Button>
            </div>
            
          </div>
          
        </div>
        
        
        <div className={htr ? "block" : "none"}>
          <div className="DoHyeon">
          <span>1</span>
            <p>
               방 만들기 버튼을 클릭하세요
            </p>
                <img className="makeRoomBtn" src="/img/makeRoom.png"/>
          </div>
          <div className="DoHyeon">
          <span>2</span>
            <p>
               대기실의 설정 아이콘을 클릭하세요
            </p>
            <img className="SettingBtn" src="/img/Set.png"/>
          </div>
          <div className="DoHyeon">
          <span>3</span>
          <div>
            <p>
               게임 주제와 시간을 바꿔보세요
            </p>
            <img className="WaitPop" src="/img/Pop.png"/>
            <div><Button onClick={() => setHtr(!htr)}>확인</Button></div>
          </div>
          </div>
        </div>
        <div className={htj ? "block" : "none"}>
          <div className="DoHyeon Cham">
          <span>1</span>
            <p >
               대기실의 방 코드를 방장에게 요청하세요
            </p>
            <img className="WaitView" src="/img/Code.png"/>
 
          </div>
          <div className="DoHyeon">
          <span>2</span> 
            <p>
              참여하기 버튼을 클릭하세요
            </p>
            <img className="makeRoomBtn" src="/img/Enter.png"/>
          </div>
          <div className="DoHyeon">
          <span>3</span>
          <div>
            <p>
              대기실에서 받은 방코드를 입력하세요
            </p>
            <img className="CodePop" src="/img/EnterPop.png"/>
            <div><Button onClick={() => setHtj(!htj)}>확인</Button></div>
            </div>
          </div>
          
        </div>
        <ul className="About_list">
          <li
            className={game ? "Move_top" : ""}
            game={game}
            onClick={() => setGame(!game)}
          >
            <span>게임방법</span>
          </li>
          <li
            className={htr ? "Move_top" : ""}
            htr={htr}
            onClick={() => setHtr(!htr)}
          >
            <span>방 만드는 법</span>
          </li>
          <li
            className={htj ? "Move_top" : ""}
            htj={htj}
            onClick={() => setHtj(!htj)}
          >
            <span>참여하는 법</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavContainer;
