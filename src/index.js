import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // エラーになりやすいよねというのをconsoleに表示してくれる。無くてもOK
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // public/index.htmlのdiv id="root"の中に追加していく
  document.getElementById("root")
);
