import React, { useState } from 'react'
import {db, auth} from "../firebase.js";
import firebase from "firebase/compat/app";
import Input from '@mui/material/Input'; 
import SendIcon from "@mui/icons-material/Send"

function SendMessage() {
    const [message, setMessage] = useState("");

    function sendMessage(e){
        // formに入力をしてenterキーが押されてしまうと、再ロードされてしまう
        // e.preventDefault()でその機能を妨げる【大切】
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            // フォームに入力されEnterキーを押されてた時の時間を取得することができる
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })

        // 入力フォームから送信済みの場合、入力フォームの中身を空に戻す
        setMessage("");

    }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
            <Input style={
                {
                    width: "78%",
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px",
                }
            }
                placeholder="メッセージを入力" type="text" onChange={(e)=> setMessage(e.target.value)} value={message}/>
            <SendIcon />
        </div>
      </form>
    </div>
  )
}

export default SendMessage
