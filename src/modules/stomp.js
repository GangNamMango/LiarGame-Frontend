import SockJs from "sockjs-client";
import StompJs from "stompjs";

export function stompConnect(info) {
  //socket 연결
  const sock = new SockJs("http://3.35.178.104/socket");

  //stomp 연결
  const stomp = StompJs.over(sock);
  try {
    //웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을
    //console에 보여주는데 그것을 감추기 위한 debug

    stomp.connect({}, () => {

      //이벤트 구독

      //에러관련 이벤트
      stomp.subscribe(`/sub/game/error/${info.userId}`, (body) => {
        console.log(JSON.parse(body.body))

        //이후 처리
      })

      //대기실 입장 이벤트
      stomp.subscribe(`/sub/game/enter/${info.gameRoom.roomId}`, (body)=> {
        console.log(JSON.parse(body.body));

        //이후 처리
      })

      //대기실 퇴장 이벤트
      stomp.subscribe(`/sub/game/leave/${info.gameRoom.roomId}`, (body) => {
        console.log(JSON.parse(body.body));

        //이후 처리
      })

      //대기실 세팅 변경 이벤트
      stomp.subscribe(`/sub/game/setting/${info.gameRoom.roomId}`, (body) => {
        console.log(JSON.parse(body.body));

        //이후 처리
      })

      //대기실 프로필 변경 이벤트
      stomp.subscribe(`/sub/game/profile/${info.gameRoom.roomId}`, (body) => {
        console.log(JSON.parse(body.body));

        //이후 처리
      })
    });
  } catch (err) {}
}
//이벤트 출판
//만약 유저가 설정변경관련된 행동을 했을 경우
// stomp.send(
//   "/pub/game/setting",
//   {},
//   JSON.stringify({
//     roomId: roomId,
//     userId: userId,
//     setting: {
//       timeLimit: 30,
//       capacity: 10,
//       topic: "food",
//     },
//   })
// );

//연결 끊기
// stomp.disconnect(() => {
//   console.log("socket연결 해제");
// });
