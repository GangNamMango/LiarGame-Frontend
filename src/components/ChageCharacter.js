
import React from "react";
import CharaterImg from "../data/character";
import "./ChangeCharacter.css";



const Change = ({setCharacter}) => {
    const Change = (i) =>{
        setCharacter(i)
    }
    
    return(
        <div className= "Cha_select_c">
        <div className="title">캐릭터 설정</div>
        <div className="img_select">
            {CharaterImg &&
            CharaterImg.map((item) => (
                <ul className="img_ul">
                <li>
                    <input
                    className="Checked"
                    type="image"
                    src={item.image}
                    onClick={()=>Change(item.id)}
                    setCharacter={setCharacter}
                    ></input>
                </li>
                </ul>
            ))}
        </div>
        </div>
    )
}

export default Change;

