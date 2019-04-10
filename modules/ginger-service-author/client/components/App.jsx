import React from 'react';
import Author from './Author.jsx.js';
import style from './css/App.less';

class App extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Author />
      </div>
    );
  }
}

export default App;
