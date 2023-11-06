import React, {useEffect, useState} from 'react';
import SignOut from './SignOut';
import {auth, db} from "../firebase.js";
import SendMessage from './SendMessage.js';

function Line() {

  const [messages, setMessages] = useState([]);
  // 第2引数に空の[]配列を指定：マウント時に１回だけレンダリングをしたい
  useEffect(()=>{
    // firestoreのmessagesテーブルにアクセスする
    db.collection("messages")
    // 最新の作成順に並び替え
    .orderBy("createdAt")
    // 最大限表示したい数
    .limit(50)
    .onSnapshot((snapshot)=>{
      setMessages(snapshot.docs.map((doc)=>doc.data()))
    })
  },[])

  return (
    <div>
    {console.log(messages)}
    <SignOut />
    <div className="msgs">
      {messages.map(({ id, text, photoURL, uid, createdAt }) => (
        <div className="msf">
          {/* 条件に基づいて JSX を動的に構築 */}
          {uid === auth.currentUser.uid ? (
              <div className='flex sentRight'>
                <div className='timeStampSent'><span>{createdAt.toDate().toLocaleString('ja-JP', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</span></div>
                <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                <p>{text}</p>
              </div>
            </div>
          ) : (
            <div className='flex'>
              <img src={photoURL} alt="" className={`img ${uid === auth.currentUser.uid ? "left" : "right"}`} />
              <div className={`msg ${uid === auth.currentUser.uid ? "sent" : "received"}`}>
                <p>{text}</p>
              </div>
              <div className='timeStampReceived'>{createdAt.toDate().toLocaleString('ja-JP', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</div>
            </div>
          )}
        </div>
      ))}
    </div>
    <SendMessage />
  </div>
  )
}

export default Line
