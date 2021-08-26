import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import './chat.css';
import useChat from './useChat';

export default function Chat(props) {
	const { chat, sendMessage } = useChat();
	const [message, setMessage] = useState('');
	const currentEmail = JSON.parse(localStorage.getItem('user')).email;

	const onChange = (e) => {
		setMessage(e.target.value);
	};

	const onClick = () => {
		sendMessage(message);
		setMessage('');
	};
	const renderMessages = () => {
		const sortedMessages = chat.messages.sort((a, b) => {
			return new Date(b.createdAt) - new Date(a.createdAt);
		});
		return sortedMessages.map((message) => (
			<div key={message._id} className="message-container">
				<div
					className={
						message?.author?.email === currentEmail
							? 'sent'
							: 'recieved'
					}
				>
					{message.body}
				</div>
			</div>
		));
	};

	const renderChatBox = () => {};
	return (
		<div className="chat-container">
			{renderChatBox()}
			{renderMessages()}
			<div
				style={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					margin: 25
				}}
			>
				<TextField
					onChange={onChange}
					value={message}
					label="Message"
					placeholder="Message to send"
				/>
				<Button variant="contained" onClick={onClick}>
					Send
				</Button>
			</div>
		</div>
	);
}
