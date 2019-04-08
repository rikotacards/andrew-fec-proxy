import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Header } from './components/header.jsx';

class App extends React.Component {
  render() {
    console.log('is app rendering?');
    return (
      <div>
        <Router>
          <Route path="/books/:id" component={Header} />
        </Router>
      </div>
    );
  }
}

export default App;
