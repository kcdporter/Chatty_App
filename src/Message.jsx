import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <main className="messages">
        <div className="message">
          <span className="message-user">{this.props.user}</span>
          <span className="message-content">{this.props.content}</span>
        </div>
      </main>
    )
  }
}
export default ChatBar;