import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Quiz from './enjoy/Quiz';
import ChatWithMe from './enjoy/ChatWithMe';
import EnjoyMenu from './EnjoyMenu';
import './Enjoy.css';

const Enjoy = () => {
    return (
        <div className="enjoy-wrapper">
            <BrowserRouter>
                <EnjoyMenu />
                <div className="enjoy-content-wrapper">
                    <Route path="/enj/chat" exact component={ChatWithMe} />
                    <Route path="/enj/quiz" exact component={Quiz} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default Enjoy;