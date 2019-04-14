import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const uuid = require('uuid/v1');

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      id: uuid(),
      messages:[],
      user:'Anonymous',
      nOfUsers:0,
      };
    this.addmsg = this.addmsg.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  componentDidMount(){
    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onmessage = (event) => {
      let incomingMsg = JSON.parse(event.data);
      const messages = [...this.state.messages, incomingMsg];
      this.setState({messages: messages, nOfUsers:incomingMsg.nOfUsers});
    }
  }

  addUser = event => {
    if (event.key === 'Enter' && event.target.value !== this.state.user && event.target.value.trim()) {
      this.setState ({user:event.target.value});
      const notifictionMsg = {
        user: '',
        content: `${this.state.user} has changed their name to ${event.target.value}`,
        type: "globalNotification",
      };
      this.socket.send(JSON.stringify(notifictionMsg))
    }
  };

  addmsg = event => {
    if(event.key === 'Enter'){
      const newMsg = {
        user: this.state.user,
        content: event.target.value,
        type: 'message',
        nOfUsers:this.state.nOfUsers,
      }
      const messages = [...this.state.messages]
      this.setState({messages: messages})
      this.socket.send(JSON.stringify(newMsg))
      event.target.value='';
    }
  }


  render() {
    return(
      <React.Fragment>
      <h1>Welcome, {this.state.user}</h1>
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <p>There are {(this.state.nOfUsers)} users to share your thoughts with!</p>
      </nav>
      <MessageList
      messages={this.state.messages}
      user={this.state.users} />
      <ChatBar
      onKeyPress={(event) => this.addmsg(event)}
      newUser={(event) => this.addUser(event)}
      username={this.state.user}/>
      </React.Fragment>
      );
  }
}
export default App;
