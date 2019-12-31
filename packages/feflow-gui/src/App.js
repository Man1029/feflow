import React from 'react';
import SideBar from './components/sidebar';
import ProjectList from './components/project-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideBar />
      <ProjectList />
    </div>
  );
}

export default App;
