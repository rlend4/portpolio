import React, { useEffect, useState } from 'react';
import ChatInput from './ChatInput';
import ChatList from './ChatList';
import './EnjoyContent.css';

const ChatWithMe = () => {
    const [chatItemList, setChatItemList] = useState([]);

    useEffect(() => {
        const chatItemList = window.localStorage.getItem("chatItemList") ? JSON.parse(window.localStorage.getItem("chatItemList")) : [];
        setChatItemList(chatItemList);
    }, [])

    const onAddItem = (text, userId) => {
        const chatItemList = window.localStorage.getItem("chatItemList") ? JSON.parse(window.localStorage.getItem("chatItemList")) : [];
        let index = window.localStorage.getItem("index") ? JSON.parse(window.localStorage.getItem("index")) : 0;

        let today = new Date();

        const newChatItemList = [{
            index: index++,
            text: text,
            userId: userId,
            time: today
        }];

        window.localStorage.setItem('chatItemList', JSON.stringify(chatItemList.concat(newChatItemList)));
        window.localStorage.setItem('index', JSON.stringify(index));
        setChatItemList(chatItemList.concat(newChatItemList));
    }

    const onReset = () => {
        window.localStorage.setItem('chatItemList', JSON.stringify([]));
        window.localStorage.setItem('index', JSON.stringify(0));
        setChatItemList([]);
    }

    return (
        <div>
            <div className="enjoy-content-title">
                Chat Myself
            </div>
            <p>채팅을 입력하세요.
            <br />you는 왼쪽, me는 오른쪽에 메세지가 나타납니다.
            <br />shift + enter 입력 시 반대 위치에 입력됩니다.</p>
            <div className="chat-content-wrapper">
                <ChatList chatItemList={chatItemList} userId={'me'} />
                <ChatInput onAddItem={onAddItem} onReset={onReset} />
            </div>
        </div>
    );
};

export default ChatWithMe;