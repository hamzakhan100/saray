import { PersonalVideo } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from './api';
import socket from './socket';

export default function useChat() {
	const { conversationId = '61273062565e95163aff03ec' } = useParams();
	const [chat, setChat] = useState({
		_id: '',
		participants: [],
		messages: [
			{ _id: '1', author: '', body: '', createdAt: '' },
			{ _id: '2', author: '', body: '', createdAt: '' }
		]
	});
	const [error, setError] = useState();

	const currentUser = JSON.parse(localStorage.getItem('user'));

	const onMessageRecieve = ({ author, body, _id, createdAt }) => {
		setChat((prevChat) => ({
			...prevChat,
			messages: [...prevChat.messages, { _id, body, author, createdAt }]
		}));
	};

	const sendMessage = (message) => {
		const msg = {
			body: message,
			from: currentUser.email,
			to: 'h@h.com'
		};
		socket.emit('message', msg, (ackMessage) => {
			setChat((prev) => {
				return {
					...prev,
					messages: [...prev.messages, ackMessage]
				};
			});
		});
	};

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
			console.log(conversation);
			setChat(conversation);
		} catch (error) {
			setError(error);
		}
	};

	return { chat, error, sendMessage };
}
