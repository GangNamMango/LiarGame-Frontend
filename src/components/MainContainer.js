import React, { useState } from "react";
import { Link } from "react-router-dom";
import './MainContainer.css';
import CharaterImg from "../data/character";

const MainContainer = () => {
    const [open,setOpen] = useState(false)
    const [getImg, setGetImg] = useState(1);
    const changeImg = (i) =>{
        setGetImg(i);
    }
    return(
        <div className="Wrap">
            <div className="Container">
                <div className="Img_area" open={open} onClick={() => setOpen(!open)}>
                    {getImg == 1 ? 
                    (
                        <img src="/img/free-icon-alien-4207576.png"/>) :getImg == 2 ? (<img src="/img/free-icon-pumpkin-4207358.png"/>
                        ) : getImg == 3 ? (<img src="/img/free-icon-scientist-4207345.png"/>) :  (<img src="/img/free-icon-werewolf-4207350.png"/>)
                    }
                </div>
                <div className={open ? "Cha_select" : "hidden"}>
                    <div className="title">캐릭터 설정</div>
                    <div className="img_select">
                        { CharaterImg && CharaterImg.map((item) =>
                        <ul className="img_ul">
                        <li onClick={()=>changeImg(item.id)}><input type="image" src={item.image}></input></li>
                        </ul>
                    )}
                    </div>

                    <div className="select_btn" onClick={()=> setOpen(!open)}><span>선택하기</span></div>
                </div>
                
                <div className="text_box">
                    <input id="Nick_Name" type="text" name="#">
                    </input>
                </div>
                <div className="Btn">
                    <ul>
                        <li>방만들기</li>
                        <li>참여하기</li>
                    </ul>
                </div>
                
            </div>
        </div>  
    )
};

export default MainContainer;