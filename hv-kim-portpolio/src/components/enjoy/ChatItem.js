import React from 'react';

const ChatItem = (params) => {

    const calc = (time1) => {
        const time = new Date();
        const time11 = new Date(time1);
        const rest = Math.ceil((time.getTime() - time11.getTime())/1000);

        if (rest < 60) {
            return rest + '초 전';
        } else if (rest < 3600) {
            return Math.floor(rest/60) + '분 전';
        } else if (rest < 86400) {
            return Math.floor(rest/3600) + '시간 전';
        }

        return Math.floor(rest/86400) + '일 전';
    }

    return (
        <div className={params.item.userId === params.userId ? 'chat-item-wrapper-me' : 'chat-item-wrapper-you' }> 
            <div className="chat-item-text">{params.item.text}</div>
            <div className="chat-item-time">{calc(params.item.time)}</div>
        </div>
    )
}

export default ChatItem;