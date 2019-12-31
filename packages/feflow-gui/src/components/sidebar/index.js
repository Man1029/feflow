import React from 'react';
import './index.css';

export default class SideBar extends React.Component {

    render() {
        return (
            <div className="side-bar">
                <ul className="nav">
                    <li className="project current"><i className="icon" />我的项目</li>
                    <li className="market"><i className="icon" />插件市场</li>
                </ul>
                <div className="account">
                    <div className="personal-info">
                        <div className="avatar">
                            <img src="https://avatars1.githubusercontent.com/u/18289264?s=460&v=4" />
                        </div>
                        <div className="nickname">cpselvis</div>
                    </div>
                    <div className="logout" />
                </div>
            </div>
        )
    }
}
