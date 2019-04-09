import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const messages = this.props.messages.map(message => {
     return <Message
     key={message.id}
     user={message.user}
     content={message.content}
     />
    })
    return (
      <React.Fragment>
      {messages}
      </React.Fragment>
    )
  }
}
export default MessageList;