import React, {Component} from 'react';

import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      loading:true,
      user:"",
      error:"",
      messages:[
        {
          id: 1,
          type: "incomingMessage",
          content: "I won't be impressed with technology until I can download food.",
          user: "Anonymous1"
        },
        {
          id: 2,
          type: "incomingNotification",
          content: "Anonymous1 changed their name to nomnom",
        },
        {
          id: 3,
          type: "incomingMessage",
          content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
          user: "Anonymous2"
        },
        {
          id: 4,
          type: "incomingMessage",
          content: "...",
          user: "nomnom"
        },
        {
          id: 5,
          type: "incomingMessage",
          content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
          user: "Anonymous2"
        },
        {
          id: 6,
          type: "incomingMessage",
          content: "This isn't funny. You're not funny",
          user: "nomnom"
        },
        {
          id: 7,
          type: "incomingNotification",
          content: "Anonymous2 changed their name to NotFunny",
        },
      ]};
      console.log("currentstate", this.state);
  }

  componentDidMount(){
    setTimeout(() => {
      console.log("Stimulating incoming message")
      const newMessage = {id:8, user:"Juanita", content:"Hello there!"}
      const messages = [...this.state.messages, newMessage]
      this.setState({messages:messages, loading:false});
    }, 1000);
  }

  render() {
    if (this.state.loading){
      return (
        <React.Fragment>
        <h1>Hello React :)</h1>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <h1>Loading...</h1>
        <ChatBar/>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
        <h1>Hello React :)</h1>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.user} />
        </React.Fragment>
      );
    }
  }
}
export default App;
