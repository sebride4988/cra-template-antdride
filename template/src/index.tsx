import './index.less';

import { StrictMode } from 'react';

import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './AppRouter';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

function Bootstrap() {
  return (
    <StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement?.hasChildNodes()) {
  hydrate(<Bootstrap />, rootElement);
} else {
  render(<Bootstrap />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
