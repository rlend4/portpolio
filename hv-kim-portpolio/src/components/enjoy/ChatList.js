import React, { useEffect, useRef, useState } from 'react';
import ChatItem from './ChatItem';
import './EnjoyContent.css';

const ChatList = (params) => {

    const chatItemList = params.chatItemList ? params.chatItemList : [];
    const [time, setTime] = useState(0);
    const timeRef = useRef(0);
    const scrollRef = useRef();
    // 스크롤바 하단으로 이동시키는 방법
    const scrollToBottom = () => {
        const { scrollHeight, clientHeight } =  scrollRef.current;
        scrollRef.current.scrollTop = scrollHeight - clientHeight;
    }

    // 1초 마다 호출 후 컴포넌트 사라질때 clean up
    useEffect(() => {
        setInterval(() => {
            setTime((timeRef.current += 1));
        }, 1000);
        return () => {
            clearInterval(time);
        }
    }, []);

    useEffect(() => {
        if(scrollRef.current){
            scrollToBottom();
        }
    }, [chatItemList]);

    return (
        <div className="chat-list-wrapper" ref={scrollRef}>
            {chatItemList.map((item)=> (
                <ChatItem key={item.index} item={item} userId={params.userId} time={time} />
            ))}
        </div>
    )
}

export default React.memo(ChatList);