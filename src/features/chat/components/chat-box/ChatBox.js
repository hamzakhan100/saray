import React from 'react';

import Topbar from './TopBar';

import './styles.css';
import MessageInput from './MessageInput';

export default function ChatBox({ onBack, onSend, messages }) {
	return (
		<div className="conversation-container">
			<Topbar onBack={onBack} />
			<div className="message-list-container">
				{messages?.map((m) => (
					<Message message={m} />
				))}
			</div>
			<MessageInput onSend={onSend} />
		</div>
	);
}

function Message({ message }) {
	const currentEmail = JSON.parse(localStorage.getItem('user')).email;
	return (
		<div
			className={
				message?.author?.email === currentEmail
					? 'message sent'
					: 'message recieved'
			}
		>
			<div className="message-text">{message.text}</div>
		</div>
	);
}
