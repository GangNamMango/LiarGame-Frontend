import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './NavContainer.css';
const NavContainer = () => {
    const [Popup,setPopup] = useState(false);
    const [Game, setGame] = useState(false);
    const [HTR, setHTR] = useState(false);
    const [HTJ, setHTJ] = useState(false);
    const Button = styled.h1`
    position:absolute;
    left:50%;
    bottom:0;
    transform: translateX(-50%);
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #54B5C2;
    transition: none;
    
    `
    return(
        <div className="Nav_area">
            <div className={Popup ? "Nav_close" : "Nav_open"} Popup={Popup} onClick={()=> setPopup(!Popup)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={Popup ? "bg" : ""}></div>
            <div className={Popup ? "popup_area" : "hidden"}>
            <div className={Game ? "block" : "none"}>
                
                <Button onClick={() => setGame(!Game)}>확인</Button>
            </div>
            <div className={HTR ? "block" : "none"}>
            <div><p><span>1</span> 방 만들기 버튼을 클릭하세요</p></div>
                <div><p><span>2</span> 대기실의 설정 아이콘을 클릭하세요</p></div>
                <div><p><span>3</span> 게임 주제와 시간을 바꿔보세요</p></div>
            <Button onClick={() => setHTR(!HTR)}>확인</Button>
            </div>
            <div className={HTJ ? "block" : "none"}>
            <div><p><span>1</span> 대기실의 방 코드를 방장에게 요청하세요</p></div>
                <div><p><span>2</span> 참여하기 버튼을 클릭하세요</p></div>
                <div><p><span>3</span> 방코드를 입력하세요</p></div>
            <Button onClick={() => setHTJ(!HTJ)}>확인</Button>
            </div>
                <ul>
                    <li className={Game ? "Move_top" : ""} Game={Game} onClick={() => setGame(!Game)}>게임방법</li>
                    <li className={HTR ? "Move_top" : ""} HTR={HTR} onClick={() => setHTR(!HTR)}>방 만드는 법</li>
                    <li className={HTJ ? "Move_top" : ""} HTJ={HTJ} onClick={() => setHTJ(!HTJ)}>참여하는 법</li>
                </ul>
            </div>
        </div>
    )
}

export default NavContainer;