import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import './chat.css';

import socket from './socket';

export default function Chat(props) {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket.emit('register');
		socket.on('new-message', ({ message }) => {
			console.log(message);
			setMessages((prev) => [...prev, message]);
		});
	}, []);

	const sendMessage = () => {
		socket.emit(
			'message',
			{
				body: 'Hello',
				from: 'h@h.com',
				to: 't@t.com'
			},
			(messageId) => console.log(messageId)
		);
	};
	return (
		<div className="chat-container">
			{console.log(messages)}
			<Button onClick={sendMessage} variant="contained">
				Test
			</Button>
		</div>
	);
}
