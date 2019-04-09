import React, {Component} from 'react';

import NavBar from './NavBar.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello React :)</h1>
      <NavBar />
      <Message />
      <ChatBar />
      </div>
    );
  }
}
export default App;
