import { useState } from 'react';

const tabNames = { list: 'CHAT_LIST', box: 'CHAT_BOX' };

export default function useTabs() {
	const [currentTab, setTab] = useState(tabNames.box);
	const showChatList = () => setTab(tabNames.list);
	const showChatBox = () => setTab(tabNames.box);
	return { currentTab, showChatList, showChatBox };
}

export { tabNames };
