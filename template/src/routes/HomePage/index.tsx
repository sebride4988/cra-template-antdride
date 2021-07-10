import React from 'react';
import logo from './logo.png';
import './index.less';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" style={{ background: 'white' }} />
        <Typography.Paragraph style={{ color: 'white' }}>
          Edit <code>src/routes/HomePage/index.tsx</code> and save to reload.
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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/404">404 Error</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default HomePage;
