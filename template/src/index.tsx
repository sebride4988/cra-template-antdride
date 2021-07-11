import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';
import './index.less';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';

function Bootstrap() {
  return (
    <StrictMode>
      <AppRouter />
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<Bootstrap />, rootElement);
} else {
  render(<Bootstrap />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
