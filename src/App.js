import React, { useState, useEffect } from 'react';
import { FormControl, } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Entre your name'));

  }, [])

  const sendMessage = event => {
    event.preventDefault();

    db.collection('messages').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <h1 className="app__h1">
        <ForumIcon className="app__fromicon" />
        Welcome {username}
      </h1>


      <FlipMove className="app__flip">
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      <form className="app__from">
        <FormControl className="form__fx">
          <input className="app__input" placeholder="Send your message...." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconbutton" disabled={!input} variant="contained" color="primary" onClick={sendMessage} type="submit">
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
