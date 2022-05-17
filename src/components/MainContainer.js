import React, { useState } from "react";
import "./MainContainer.css";
import CharaterImg from "../data/character";
import { useDispatch } from "react-redux";
import { postMakeRoom, postEnterRoom } from "../modules/room";

const MainContainer = () => {
  const [nickName, setNickName] = useState("");
  const [open, setOpen] = useState(false);
  const [Join, setJoin] = useState(false);
  const [getImg, setGetImg] = useState(4207576);
  const [roomId, setRoomId] = useState("");
  const [service,setService] = useState(false)

  const dispatch = useDispatch();

  const changeImg = (i) => {
    setGetImg(i);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangeRoomId = (e) => {
    setRoomId(e.target.value);
  };

  const makeRoom = () => {
    if(nickName == ""){
      alert('닉네임을 설정해주세요');
      return;
    }
    else {dispatch(postMakeRoom(nickName, getImg));}
    
  };

  const enterRoom = () => {
    console.log("enter");
    console.log(roomId);
    if(nickName == ""){
      alert('닉네임을 설정해주세요');
      return;
    }
    else{dispatch(postEnterRoom(roomId, nickName, getImg));}
  };
  return (
    <div className="Wrap">
      <div className="Container">
        <div className="Img_area" open={open} onClick={() => setOpen(!open)}>
          <img src={"/img/character-" + getImg + ".png"} />
        </div>
        <div className={Join ? "Join" : "hidden"}>
          <h1 className="title Blue_Gugi">방코드</h1>
          <input
            className="code_text"
            type="text"
            value={roomId}
            name="roomId"
            maxLength={10}
            onChange={onChangeRoomId}
          />
          <p
            className="Blue"
            open={Join}
            onClick={() => {
              enterRoom();
            }}
          >
            입장하기
          </p>
          <p className="Blue" onClick={()=>setJoin(!Join)}>
            취소
          </p>
        </div>
        <div className={open ? "Cha_select" : "hidden"}>
          <div className="title">캐릭터 설정</div>
          <div className="img_select">
            {CharaterImg &&
              CharaterImg.map((item) => (
                <ul className="img_ul">
                  <li onClick={() => changeImg(item.id)}>
                    <input
                      type="image"
                      src={item.image}
                      onClick={() => setOpen(!open)}
                    ></input>
                  </li>
                </ul>
              ))}
          </div>
        </div>
        <div className={service ? "Service" : "hidden"}>
        <div className="title">서비스 약관</div>
          <div>
            <a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="미친 아이콘">미친 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사람들 아이콘">사람들 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사람들 아이콘">사람들 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="외계인 아이콘">외계인 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="무언극 아이콘">무언극 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="공포 아이콘">공포 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/-](https://www.flaticon.com/kr/free-icons/-)" title="우주 비행사 아이콘">우주 비행사 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="천사 아이콘">천사 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사람 아이콘">사람 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/catrina](https://www.flaticon.com/kr/free-icons/catrina)" title="catrina 아이콘">Catrina 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사용자 아이콘">사용자 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="복장 아이콘">복장 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="경찰 아이콘">경찰 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/-](https://www.flaticon.com/kr/free-icons/-)" title="유령 같은 아이콘">유령 같은 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="살인자 아이콘">살인자 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="마법 아이콘">마법 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="마녀 아이콘">마녀 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="프로필 아이콘">프로필 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="프로필 아이콘">프로필 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/-](https://www.flaticon.com/kr/free-icons/-)" title="의상 파티 아이콘">의상 파티 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="요정 아이콘">요정 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="공주님 아이콘">공주님 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="해골 아이콘">해골 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="금언 아이콘">금언 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/-](https://www.flaticon.com/kr/free-icons/-)" title="시체 신부 아이콘">시체 신부 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="간호사 아이콘">간호사 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="무서움 아이콘">무서움 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사육제 아이콘">사육제 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="로봇 아이콘">로봇 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="훔침 아이콘">훔침 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="바이킹 아이콘">바이킹 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="동화 아이콘">동화 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="허수아비 아이콘">허수아비 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="유령 아이콘">유령 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="좀비 아이콘">좀비 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사용자 아이콘">사용자 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="캐릭터 아이콘">캐릭터 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="호박 아이콘">호박 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="캐릭터 아이콘">캐릭터 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="시골뜨기 아이콘">시골뜨기 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="할리퀸 아이콘">할리퀸 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/-](https://www.flaticon.com/kr/free-icons/-)" title="인도 사람 아이콘">인도 사람 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="캐릭터 아이콘">캐릭터 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="미라 아이콘">미라 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="일각수 아이콘">일각수 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/-](https://www.flaticon.com/kr/free-icons/-)" title="석기 시대 아이콘">석기 시대 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사람들 아이콘">사람들 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사람들 아이콘">사람들 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="사육제 아이콘">사육제 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)" title="가톨릭 아이콘">가톨릭 아이콘 제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)
" title="우승자 아이콘">우승자 아이콘  제작자: Freepik - Flaticon</a>

<a href="[https://www.flaticon.com/kr/free-icons/](https://www.flaticon.com/kr/free-icons/)
" title="잃다 아이콘">잃다 아이콘  제작자: Freepik - Flaticon</a>
          </div>
        </div>
        <div className="text_box">
          <input
            id="Nick_Name"
            type="text"
            name="nickname"
            maxLength={10}
            value={nickName}
            onChange={onChangeNickName}
          />
        </div>
        <div className="Btn">
          <ul>
            <li>
              <span className="Blue" onClick={makeRoom}>
                방만들기
              </span>
            </li>
            <li  open={Join} onClick={() => setJoin(!Join)}>
              <span className="Blue">참여하기</span>
            </li>
          </ul>
        </div>
        <footer>
      <div><div><img src="/img/GameName.png"/></div><div><p onClick={() => setService(!service)}>서비스 이용 약관</p></div></div>
      </footer>
      </div>
    </div>
  );
};

export default MainContainer;
