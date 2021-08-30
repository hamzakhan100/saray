import { useEffect } from 'react';

import socket from '../socket';

export default function useSocket({ onMessage }) {
	useEffect(() => {
		socket.emit('register');
		socket.on('new-message', onMessage);
		return () => socket.off('new-message', onMessage);
	}, []);

	const sendMessage = ({ to, body }) => {
		socket.emit('message', { to, body }, onMessage);
	};
	return { sendMessage };
}
