import logo from '../../assets/images/logo.png';
import './index.less';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import RouteHelmet from './RouteHelmet';

function RoutePage() {
  return (
    <div className="App">
      <RouteHelmet />
      <header className="App-header">
        <img src={logo} alt="logo" style={{ background: 'white' }} />
        <Typography.Paragraph style={{ color: 'white' }}>
          Edit <code>src/pages/RoutePage/index.tsx</code> and save to reload.
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
            <Link to="/about">About</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default RoutePage;
