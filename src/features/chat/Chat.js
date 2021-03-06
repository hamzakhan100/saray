import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

import './chat.css';
import useChat from './useChat';
import { useTabs, tabNames } from './hooks';
import { ChatBox, ChatList } from './components';
import useChats from './hooks/useChats';
import { useSocket } from './hooks';

const SAMPLE_CHATS = [
	{
		_id: '1',
		participant: {
			name: 'Hamad Safdar',
			imageUrl:
				'https://firebasestorage.googleapis.com/v0/b/saraay-363e2.appspot.com/o/profile%2Fava.jpg?alt=media&token=645b287f-8394-4cb6-8119-9a54de06e952',
			email: 't@t.com'
		},
		displayMessage: 'Hello!!'
	},
	{
		_id: '2',
		participant: {
			name: 'Hamad Safdar',
			imageUrl:
				'https://firebasestorage.googleapis.com/v0/b/saraay-363e2.appspot.com/o/profile%2Fava.jpg?alt=media&token=645b287f-8394-4cb6-8119-9a54de06e952',
			email: 't@t.com'
		},
		displayMessage: 'Hey! There?'
	}
];

export default function Chat(props) {
	const { currentTab, showChatBox, showChatList } = useTabs();
	const { chats } = useChats();
	const [selectedChat, setSelectedChat] = useState({});
	const onMessage = (message) => {
		setSelectedChat((prev) => ({
			...prev,
			messages: [...prev?.messages, message]
		}));
	};
	const { sendMessage } = useSocket({ onMessage });

	const handleChatClick = (chatId) => {
		setSelectedChat(chats.find((chat) => chat._id === chatId));
		showChatBox();
	};

	const onSend = ({ body }) => {
		const toEmail = selectedChat?.participants?.find((p) => {
			const currentEmail = JSON.parse(localStorage.getItem('user')).email;
			return p?.email !== currentEmail;
		}).email;
		sendMessage({ to: toEmail, body });
	};

	return (
		<div className="chat-container">
			{currentTab === tabNames.list ? (
				<ChatList chatList={chats} onClick={handleChatClick} />
			) : (
				<ChatBox
					chat={selectedChat}
					onBack={showChatList}
					onSend={onSend}
				/>
			)}
		</div>
	);
}
