import React from 'react';
import '../App.css';

const Sidebar = () => {
    return (
        <nav className={"app-sidebar"}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
    );
};

export default Sidebar;