import { Avatar } from '@material-ui/core';
import React from 'react';

import './styles.list.css';

export default function ChatList({ chatList }) {
	return (
		<div>
			<div></div>
			{chatList.map((chat) => (
				<ChatListItem key={chat._id} chatItem={chat} />
			))}
		</div>
	);
}

function ChatListItem({ chatItem }) {
	return (
		<div className="item">
			<div className="avatar-container">
				<Avatar
					style={{ width: 80, height: 80 }}
					src={chatItem.imageUrl}
				/>
			</div>
			<div className="details">
				<p className="title">{chatItem.participant.name}</p>
				<p className="sub-title">{chatItem.displayMessage}</p>
			</div>
		</div>
	);
}
