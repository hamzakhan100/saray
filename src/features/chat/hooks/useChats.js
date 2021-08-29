import { useEffect, useState } from 'react';
import api from '../api';

export default function useChats() {
	const [chats, setChats] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const result = await api.getAllConversations();
				setChats(result.data?.conversations ?? []);
			} catch (error) {
				alert(error);
			}
		})();
	}, []);

	return { chats };
}
