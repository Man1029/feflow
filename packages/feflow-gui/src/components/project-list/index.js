import React from 'react';
import GridProjectList from './components/grid-project-list';
import ListProjectList from './components/list-project-list';
import './index.css';

export default class ProjectList extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            switchIndex: 0
        };
    }

    swithClickHandler(index) {
        this.setState({
            switchIndex: index
        });
    }

    render() {
        return (
            <div className="project-list">
                <div className="title-bar">
                    <div className="title">我的项目</div>
                    <div className="switch">
                        <i className="grid-icon" onClick={ this.swithClickHandler.bind(this, 0) } />
                        <i className="list-icon" onClick={ this.swithClickHandler.bind(this, 1) } />
                    </div>
                </div>
                {
                    this.state.switchIndex === 0 ? 
                        <GridProjectList />
                        : <ListProjectList />
                }
            </div>
        );
    }
}
