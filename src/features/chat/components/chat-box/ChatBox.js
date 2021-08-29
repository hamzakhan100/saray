import React from 'react';

import Topbar from './TopBar';

import './styles.css';
import MessageInput from './MessageInput';

export default function ChatBox({ onBack, onSend }) {
	return (
		<div className="conversation-container">
			<Topbar onBack={onBack} />
			<div className="message-list-container"></div>
			<MessageInput />
		</div>
	);
}
