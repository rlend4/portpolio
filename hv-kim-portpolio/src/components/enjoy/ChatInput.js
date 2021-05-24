import React, { useState } from 'react';

const ChatInput = (params) => {
    const [text, setText] = useState("");
    const [user, setUser] = useState("me");

    const handlOnChange= (e) => {
        setText(e.target.value);
    }

    const handleOnKeyPress =  (e) => {
        if(text.trim() !== "" && e.key === "Enter") {
            let userId = user;
            if(e.shiftKey) {
                userId = userId === "me" ? "you" : "me";
            }
            params.onAddItem(text, userId);
            setText("");
        }
    }

    const toggleUser = () => {
        setUser(user === "me" ? "you" : "me");
    }

    return (
        <div className="chat-input-line">
            <button className="chat-input-button" onClick={params.onReset}>Reset</button>
            <button className="chat-input-button" onClick={() => toggleUser()}>Toggle</button>
            <input className="chat-input-text" maxLength={100} placeholder={ user + " : Enter your message" } value={text} onChange={handlOnChange} onKeyDown={handleOnKeyPress} />
        </div>
    )
}

export default ChatInput;