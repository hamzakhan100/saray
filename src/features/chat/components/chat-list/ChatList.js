import { Avatar } from '@material-ui/core';
import React from 'react';

import './styles.list.css';

export default function ChatList({ chatList, onClick }) {
	return (
		<div>
			{chatList?.map((chat) => (
				<ChatListItem
					key={chat._id}
					chatItem={chat}
					onClick={onClick}
				/>
			))}
		</div>
	);
}

function ChatListItem({ chatItem, onClick }) {
	const onChatClick = () => {
		onClick && onClick(chatItem._id);
	};
	return (
		<div className="item" onClick={onChatClick}>
			<div className="avatar-container">
				<Avatar style={{ width: 80, height: 80 }} />
			</div>
			<div className="details">
				<p className="title">{chatItem.participant.name}</p>
			</div>
		</div>
	);
}
