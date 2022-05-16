import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../Button";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import { vote } from "../../modules/room";
import WaitVote from "./WaiteVote";

const NickName =styled.p`
  color:#fff;
  text-align: center;
`

const Vote = () => {
    const [Array, setArray] = useState();
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
      const OnClickVote = () => {
        sendVote();
        console.log(Rooms.data.gameRoom.users[Array].nickname);
      }
      const changArray= (i) => {
        setArray(i);
        console.log(i);
        console.log(Rooms.data.gameRoom.VoteSet.notCompleted);
      };

    return(
        <>  
        {Rooms.data.gameRoom.VoteSet == "" ? <WaitVote/> :
                <div className= "Cha_select">
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
            <Button value="선택" OnClick={OnClickVote}/>
        </div>
        </div>
}
        </>
    )
}

export default Vote