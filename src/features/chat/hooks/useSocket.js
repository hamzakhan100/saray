import { useEffect } from 'react';

import socket from '../socket';

export default function useSocket({ onMessage }) {
	useEffect(() => {
		socket.emit('register');
		socket.on('new-message', onMessage);

		return () => {
			socket.off('new-message', onMessage);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const sendMessage = ({ to, body }) => {
		socket.emit(
			'message',
			{ to, body },
			/*setting message on acknowledgement */ onMessage
		);
	};

	return { sendMessage };
}
