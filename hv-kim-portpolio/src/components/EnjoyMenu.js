import react from 'react';
import { NavLink } from 'react-router-dom';
import './EnjoyMenu.css';

const EnjoyMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact className="enjoy-menu-item" activeClassName="enjoy-menu-item-acitve" to="/enj/chat">Chat Myself</NavLink>
                </li>
                <li>
                    <NavLink className="enjoy-menu-item" activeClassName="enjoy-menu-item-acitve" to="/enj/quiz">Quiz</NavLink>
                </li>
            </ul>
        </nav>
    );
};

  export default EnjoyMenu;