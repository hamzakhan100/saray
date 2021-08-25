import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from './api';
import socket from './socket';

export default function useChat() {
	const { conversationId = '61266039a14a3a305081fa10' } = useParams();
	const [chat, setChat] = useState({
		_id: '',
		participants: [],
		messages: [
			{ _id: '1', author: '', body: '', createdAt: '' },
			{ _id: '2', author: '', body: '', createdAt: '' }
		]
	});
	const [error, setError] = useState();

	const onMessageRecieve = ({ author, body, _id, createdAt }) => {
		setChat((prevChat) => ({
			...prevChat,
			messages: [...prevChat.messages, { _id, body, author, createdAt }]
		}));
	};

	const sendMessage = () => {};

	useEffect(() => {
		getConversationMessages();
		socket.emit('register');
		socket.on('new-message', onMessageRecieve);

		return () => {
			socket.off('new-message', onMessageRecieve);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getConversationMessages = async () => {
		try {
			const { conversation } = await api.getMessages(conversationId);
			setChat(conversation);
		} catch (error) {
			setError(error);
		}
	};

	return { chat, error, sendMessage };
}
