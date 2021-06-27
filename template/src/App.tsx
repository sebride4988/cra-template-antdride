import React from 'react';
import logo from './logo.png';
import './App.less';
import { Typography } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{ background: 'white' }} />
        <Typography.Paragraph style={{ color: 'white' }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography.Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://ant.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Antd
        </a>
      </header>
    </div>
  );
}

export default App;
