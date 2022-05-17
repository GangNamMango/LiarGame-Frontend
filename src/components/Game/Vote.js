import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import { result, vote } from "../../modules/room";
import WaitVote from "./WaiteVote";

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

  font-family: 'Do Hyeon';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 35px;
text-align: center;

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
        const sock = new SockJs("http://3.35.178.104/socket");

        //stomp 연결
        const stomp = StompJs.over(sock);
    
        const dispatch = useDispatch();
        React.useEffect(() => {
            stompConnect();
          }, []);

        function stompConnect() {
            stomp.connect({}, () => {
      
              stomp.subscribe(`/sub/game/vote/${Rooms.data.gameRoom.roomId}`, (body)=>{
                let data = JSON.parse(body.body);  
                dispatch(vote(data.data));
            });
            stomp.subscribe(`/sub/game/result/${Rooms.data.gameRoom.roomId}`, (body)=>{
              let data = JSON.parse(body.body); 
              if(Rooms.data.gameRoom.VoteSet.maxVoteCount == Rooms.data.gameRoom.VoteSet.currentVoteCount){
              dispatch(result(data.data)); 
              }
          });

            }
            )}

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
      
      const changArray= (i) => {
        setArray(i);
        console.log(i);
      };
      const changePop = (e) => {
        sendVote();
        setPop(e);
        console.log(Rooms.data);
        
      }

    return(
        <>
        {pop == 'voted' ? <WaitVote/> :  <div className= "Cha_select">
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