import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import WaitVote from "./WaiteVote";
import { useHistory } from "react-router-dom";
import "./Vote.css";
import ResultPage from "../../pages/ResultPage";

const NickName =styled.p`
  color:#fff;
  text-align: center;
`
const Button = styled.button`
  width: 195px;
  height: 55px;
  margin: 0 auto;

  background: #201651;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin-top:30px;
  font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;
cursor: pointer;
color: #53A6C8;
  color: #54b5c2;
  & + & {
    margin-top: 2rem;
  }
`;

const Vote = () => {
    const [Array, setArray] = useState();
    const [pop,setPop] = useState();
    const { Rooms } = useSelector((state) => ({
        Rooms: state.room,
    }));
    
        //socket 연결
        const sock = new SockJs("http://localhost:8080/socket");

        //stomp 연결
        const stomp = StompJs.over(sock);

        function disconnect() {
          stomp.disconnect(() => {
            console.log("socket연결 해제");
          });
        }

    function sendVote() {
        stomp.send(
          "/pub/game/vote",
          {},
          JSON.stringify({
            roomId: Rooms.data.gameRoom.roomId,
            userId: Rooms.data.userId,
            voteTo: Rooms.data.gameRoom.users[Array].nickname,
          })
        );
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
      
      const changArray= (i) => {
        setArray(i);
        console.log(i);
      };
      const changePop = (e) => {
        sendVote();
        setPop(e);
        console.log(Rooms.data);
      }
      // const history = useHistory();
      // useEffect(() => {
      //   window.addEventListener('beforeunload', (event) => {
      //     event.preventDefault();
      
      //     event.returnValue = sendLeave();
      //   })
      //   let unlisten = history.listen((location) => {
      //     if (history.action === 'PUSH') {
      //     }
      //     if (history.action === 'POP') {
      //       history.push('/');
      //   sendLeave();
      //     }
      //   });
    
      //   return () => {
      //     unlisten();
      //   };
      // }, [history]);

    return(
        <>
        {Rooms.data.gameRoom.gameStatus == 'END' || Rooms.data.gameRoom.gameStatus == 'CHOICE' ? <ResultPage/> : pop == 'voted' ? <WaitVote/> : <div className= "Cha_select_v">
        <div className="title">라이어 선택</div>
        <div className="img_select">
            {
            Rooms.data.gameRoom.users.map((user,index) => (
                <ul className="img_ul">
                <li onClick={() => changArray(index)}>
                    <input
                    key={index}
                    className="Checked"
                    type="image"
                    src={"/img/character-" + user.character + ".png"}
                    ></input>
                    <NickName>{user.nickname}</NickName>
                </li>
                </ul>
            ))}
            <Button onClick={() => changePop('voted')}>선택</Button>
        </div>
        </div> }
        
        </>
    )
}

export default Vote