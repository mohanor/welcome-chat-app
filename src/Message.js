import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && "message__user"}`}>
            <Card className={isUser ? "message__userCard" : "message__questCard"} >
                <CardContent>
                    <Typography color="white" variant="h5" component="h2" className="text__h1">
                        <div>{!isUser && message.username}</div> {message.message}
                    </Typography>
                </CardContent>
            </Card >
        </div>
    )
});

export default Message
