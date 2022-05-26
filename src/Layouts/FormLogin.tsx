import React from 'react';
import { useState } from "react";
import { Form, Button } from "antd";
export const FormLogin = () =>{

    const [username, setUsername] = useState("");
    const [modal_active, Setmodal_active] = useState(false);
    const [password, setPassword] = useState("");

    const submitInfo = () =>{
        const result = {
            username,
            password
        }

        const localInfo = localStorage.getItem("login");
        let wrong = false;

        if(localInfo){
            const itemsData = JSON.parse(localInfo);

            for(let i=0; i<itemsData.length; i++){
                if(itemsData[i].user == username && itemsData[i].password == password){

                    wrong = true;
                    Setmodal_active(true);
                    break;

                }
            }

            if(password.length == 0 && username.length == 0 ){
                alert("Introduceti username și parola");
            }else
            if(username.length == 0){
                alert("Username");
            }else
            if(password.length == 0){
                alert("Parola");
            }

            else if(!wrong){
                setUsername("");
                setPassword("");
                alert("Username sau parola e gresita!");

            }  else if(wrong){
                setUsername("");
                setPassword("");
                alert("Succes!");

            }
        }
    }
    return(
        <main>
            <div className={`modal-bg ${modal_active? 'close-modal' : ''}`}>
                <div className="modal">
                    <h2>Login:</h2>
                    <label htmlFor="email">Username:</label>
                    <input type="text" value={username} onChange={(e)=> {setUsername(e.target.value);}} placeholder="Introduceți username" />
                    <label htmlFor="password">  parola:  </label>
                    <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value);}} placeholder="Introduceți password" />
                    <button className='Log_button' onClick={submitInfo}>Login</button>

                </div>
            </div>
        </main>
    )
}
