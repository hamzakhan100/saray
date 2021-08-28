import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import './chat.css';
import useChat from './useChat';
import { useTabs, tabNames } from './hooks';
import { ChatBox, ChatList } from './components';

const SAMPLE_CHATS = [
	{
		_id: '1',
		participant: {
			name: 'Hamad Safdar',
			imageUrl: 'https://timesofindia.indiatimes.com/photo/61237190.cms',
			email: 't@t.com'
		}
	},
	{
		_id: '2',
		participant: {
			name: 'Hamad Safdar',
			imageUrl: 'https://timesofindia.indiatimes.com/photo/61237190.cms',
			email: 't@t.com'
		}
	}
];

export default function Chat(props) {
	const { currentTab, showChatBox, showChatList } = useTabs();
	const { chat, sendMessage } = useChat();
	const [message, setMessage] = useState('');
	const currentEmail = JSON.parse(localStorage.getItem('user')).email;

	return (
		<div className="chat-container">
			{currentTab === tabNames.list ? (
				<ChatList chatList={SAMPLE_CHATS} />
			) : (
				<ChatBox />
			)}
		</div>
	);
}

// const renderMessages = () => {
// 	const sortedMessages = chat.messages.sort((a, b) => {
// 		return new Date(b.createdAt) - new Date(a.createdAt);
// 	});
// 	return sortedMessages.map((message) => (
// 		<div key={message._id} className="message-container">
// 			<div
// 				className={
// 					message?.author?.email === currentEmail
// 						? 'sent'
// 						: 'recieved'
// 				}
// 			>
// 				{message.body}
// 			</div>
// 		</div>
// 	));
// };

// const renderChatBox = () => {};
