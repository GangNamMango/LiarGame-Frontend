import React, { useState } from "react";
import { Link } from "react-router-dom";
import './MainContainer.css';
import CharaterImg from "../data/character";


const MainContainer = () => {
    const [open,setOpen] = useState(false)
    const [check,setCheck] = useState(false)
    const [getImg, setGetImg] = useState(4207576);
    const changeImg = (i) =>{
        setGetImg(i);
    }
    return(
        <div className="Wrap">
            <div className="Container">
                <div className="Img_area" open={open} onClick={() => setOpen(!open)}>
                    <img src={"/img/character-"+getImg+".png"}/>
                </div>
                <div className={open ? "Cha_select" : "hidden"}>
                    <div className="title">캐릭터 설정</div>
                    <div className="img_select">
                        { CharaterImg && CharaterImg.map((item) =>
                        <ul className="img_ul">
                        <li onClick={()=>changeImg(item.id)}  ><input  type="image" src={item.image} onClick={()=> setOpen(!open)}></input></li>
                        </ul>
                    )}
                    </div>
                </div>
                
                <div className="text_box">
                    <input id="Nick_Name" type="text" name="#" maxLength={10}>
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